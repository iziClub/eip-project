import router from '@adonisjs/core/services/router'
import HealthController from '#controllers/health_controller'
import openapi from '@foadonis/openapi/services/main'

openapi.registerRoutes('api/docs')

router.get('/health', [HealthController, 'index'])

router.get('/', () => ({
  name: 'Iziclub - API',
  version: '1.0.0',
  docs: '/api/docs',
  status: 'online',
}))

await import('./routes/auth.js')
await import('./routes/clubs.js')
