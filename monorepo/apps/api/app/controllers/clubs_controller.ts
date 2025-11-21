import type { HttpContext } from '@adonisjs/core/http'
import Club from '#models/club'
import { clubIndexValidator } from '#validators/club_index_validator'

import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@foadonis/openapi/decorators'

import {
  ClubsIndexSuccessResponseDto
} from '#controllers/dtos/clubs_dtos'

import { CLUB_INDEX_RULES_MD } from '#openapi/club_descriptions'

@ApiTags('Clubs')
export default class ClubsController {
  @ApiOperation({
    summary: 'Get a paginated list of clubs',
    description: CLUB_INDEX_RULES_MD,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination (default: 1)',
    example: 1,
  })
  @ApiQuery({
    name: 'per_page',
    type: Number,
    required: false,
    description: 'Number of items per page (default: 20)',
    example: 20,
  })
  @ApiQuery({
    name: 'city',
    type: String,
    required: false,
    description: 'Filter clubs by city'
  })
  @ApiQuery({
    name: 'type',
    type: String,
    required: false,
    description: 'Type of club (ex: football, tennis, etc.)'
  })
  @ApiQuery({
    name: 'q',
    type: String,
    required: false,
    description:
      'Full-text search in name, description, city and type (ex: "foot", "tennis", "Paris")'
  })
  @ApiResponse({
    status: 200,
    description: 'Paginated list of clubs',
    type: ClubsIndexSuccessResponseDto,
  })
  public async index({ request }: HttpContext) {
    const payload = await request.validateUsing(clubIndexValidator)

    const page = payload.page ?? 1
    const perPage = payload.per_page ?? 20
    const q = payload.q
    const city = payload.city
    const type = payload.type

    const query = Club.query()

    if (q) {
      query.where((subQuery) => {
        subQuery
          .whereILike('name', `%${q}%`)
          .orWhereILike('description', `%${q}%`)
          .orWhereILike('city', `%${q}%`)
          .orWhereILike('type', `%${q}%`)
      })
    }

    if (city) {
      query.whereILike('city', `%${city}%`)
    }

    if (type) {
      query.where('type', type)
    }

    query.orderBy('name', 'asc')

    const clubs = await query.paginate(page, perPage)
    clubs.baseUrl('/clubs')

    return clubs
  }
}
