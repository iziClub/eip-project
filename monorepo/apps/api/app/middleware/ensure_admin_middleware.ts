import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class EnsureAdminMiddleware {
  async handle({ auth, response }: HttpContext, next: NextFn) {
    const isLogged = await auth.check()
    if (!isLogged) {
      return response.unauthorized({ message: 'Unauthorized' })
    }

    const user = auth.user!
    const hasAdminRole = user.role === 'ADMIN'
    if (!hasAdminRole) {
      return response.forbidden({ message: 'Forbidden' })
    }
    const output = await next()
    return output
  }
}
