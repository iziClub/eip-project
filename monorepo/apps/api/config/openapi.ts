import { defineConfig } from '@foadonis/openapi'

export default defineConfig({
  ui: 'swagger',
  document: {
    info: {
      title: 'Iziclub - API',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
})
