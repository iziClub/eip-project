import type { HttpContext } from '@adonisjs/core/http'
import Database from '@adonisjs/lucid/services/db'
import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'

import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiBearerAuth,
} from '@foadonis/openapi/decorators'

import {
  RegisterRequestDto,
  RegisterSuccessResponseDto,
  EmailAlreadyInUseDto,
  ValidationErrorDto,
  LoginRequestDto,
  LoginSuccessResponseDto,
  InvalidCredentialsDto,
  LogoutSuccessResponseDto,
  UnauthorizedMessageDto,
} from '#controllers/dtos/auth_dtos'

import { REGISTER_RULES_MD, LOGIN_RULES_MD, LOGOUT_RULES_MD } from '#openapi/auth_descriptions'

@ApiTags('Auth')
export default class AuthController {
  @ApiOperation({
    summary: 'Register a new user',
    description: REGISTER_RULES_MD,
  })
  @ApiBody({
    description: 'Payload for user registration',
    type: RegisterRequestDto,
    mediaType: 'application/json',
    schema: {
      example: {
        firstName: 'Alice',
        lastName: 'Martin',
        email: 'alice@example.com',
        password: 'StrongPass123!',
      },
    },
  })
  @ApiResponse({ status: 201, description: 'User created', type: RegisterSuccessResponseDto })
  @ApiResponse({ status: 409, description: 'Email already in use', type: EmailAlreadyInUseDto })
  @ApiResponse({ status: 422, description: 'Validation error', type: ValidationErrorDto })
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)

    const exists = await User.findBy('email', payload.email)
    if (exists) {
      return response.conflict({ message: 'Email already in use' })
    }

    const user = await User.create(payload)

    return response.created({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    })
  }

  @ApiOperation({ summary: 'Login a user/admin', description: LOGIN_RULES_MD })
  @ApiBody({
    description: 'Payload for user connection',
    type: LoginRequestDto,
    mediaType: 'application/json',
    schema: {
      example: {
        email: 'alice@example.com',
        password: 'StrongPass123!',
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Authenticated', type: LoginSuccessResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid credentials', type: InvalidCredentialsDto })
  @ApiResponse({ status: 422, description: 'Validation error', type: ValidationErrorDto })
  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(email, password)

      await Database.from('auth_access_tokens').where('tokenable_id', user.id).delete()

      const name = `web:${(request.header('user-agent') ?? 'unknown').slice(0, 60)}`
      const token = await User.accessTokens.create(user, ['*'], {
        expiresIn: '30 days',
        name,
      })

      return {
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        token: {
          type: 'bearer',
          value: token.value!.release(),
          expiresAt: token.expiresAt?.toISOString(),
        },
      }
    } catch {
      return response.unauthorized({ message: 'Invalid credentials' })
    }
  }

  @ApiOperation({ summary: 'Logout a user/admin', description: LOGOUT_RULES_MD })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, type: LogoutSuccessResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: UnauthorizedMessageDto })
  async logout({ auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
    return response.ok({ message: 'Logged out' })
  }
}
