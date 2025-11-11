import { ApiProperty, ApiPropertyOptional } from '@foadonis/openapi/decorators'

export class LoginRequestDto {
  @ApiProperty({ type: String, example: 'alice@example.com' })
  declare email: string

  @ApiProperty({ type: String, example: 'StrongPass123!' })
  declare password: string
}

export class RegisterRequestDto {
  @ApiProperty({ type: String, example: 'Alice' })
  declare firstName: string

  @ApiProperty({ type: String, example: 'Martin' })
  declare lastName: string

  @ApiProperty({ type: String, example: 'alice@example.com' })
  declare email: string

  @ApiProperty({ type: String, example: 'StrongPass123!' })
  declare password: string
}

export class PublicUserDto {
  @ApiProperty({ type: String, example: 'Alice' }) declare firstName: string
  @ApiProperty({ type: String, example: 'Martin' }) declare lastName: string
  @ApiProperty({ type: String, example: 'alice@example.com' }) declare email: string
}

export class AuthTokenDto {
  @ApiProperty({ type: String, example: 'bearer' }) declare type: 'bearer'
  @ApiProperty({ type: String, description: 'Opaque access token', example: '1|mQ...zA' })
  declare value: string
}

export class LoginSuccessResponseDto {
  @ApiProperty({ type: PublicUserDto }) declare user: PublicUserDto
  @ApiProperty({ type: AuthTokenDto }) declare token: AuthTokenDto
}

export class RegisterSuccessResponseDto {
  @ApiProperty({ type: PublicUserDto })
  declare user: PublicUserDto
}

export class InvalidCredentialsDto {
  @ApiProperty({ type: String, example: 'Invalid credentials' }) declare message: string
}

export class EmailAlreadyInUseDto {
  @ApiProperty({ type: String, example: 'Email already in use' }) declare message: string
}

export class LogoutSuccessResponseDto {
  @ApiProperty({ type: String, example: 'Logged out' }) declare message: string
}

export class UnauthorizedMessageDto {
  @ApiProperty({ type: String, example: 'Unauthorized' }) declare message: string
}

export class ValidationMetaDto {
  @ApiPropertyOptional({ type: Number }) declare min?: number
  @ApiPropertyOptional({ type: Number }) declare max?: number
  @ApiPropertyOptional({ type: Number }) declare minLength?: number
  @ApiPropertyOptional({ type: Number }) declare maxLength?: number
  @ApiPropertyOptional({ type: [String] }) declare enum?: string[]
}

export class ValidationErrorDto {
  @ApiProperty({ type: String, example: 'email' }) declare field: string
  @ApiProperty({ type: String, example: 'required' }) declare rule: string
  @ApiProperty({ type: String, example: 'The email field is required' }) declare message: string
  @ApiPropertyOptional({ type: ValidationMetaDto }) declare meta?: ValidationMetaDto
}
