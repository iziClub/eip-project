import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router.post('register', [AuthController, 'register']).as('auth.register')
    router.post('login', [AuthController, 'login']).as('auth.login')
    router.post('logout', [AuthController, 'logout']).as('auth.logout').use(middleware.auth())
  })
  .prefix('auth')
