import { ApiOperation, ApiResponse } from '@foadonis/openapi/decorators'

export default class HealthController {
  @ApiOperation({ summary: 'API Health Check' })
  @ApiResponse({ status: 200, description: 'Service is up' })
  async index() {
    return { up: true, ts: Date.now() }
  }
}
