import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'
import Club from '#models/club'
import db from '@adonisjs/lucid/services/db'
import { eventIndexValidator } from '#validators/event_index_validator'
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@foadonis/openapi/decorators'
import { EVENT_INDEX_RULES_MD } from '#openapi/event_descriptions'
import { EventsIndexSuccessResponseDto } from '#controllers/dtos/events_dtos'

@ApiTags('Events')
export default class EventsController {
  @ApiOperation({
    summary: 'Get a paginated list of events (tous clubs)',
    description: EVENT_INDEX_RULES_MD,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination (default: 1)',
  })
  @ApiQuery({
    name: 'per_page',
    type: Number,
    required: false,
    description: 'Number of items per page (default: 20)',
  })
  @ApiQuery({
    name: 'city',
    type: String,
    required: false,
    description: 'Filter events by city',
  })
  @ApiQuery({
    name: 'type',
    type: String,
    required: false,
    description: 'Type of event (ex: match, tournoi)',
  })
  @ApiQuery({
    name: 'q',
    type: String,
    required: false,
    description: 'Full-text search in name, description, city and type',
  })
  @ApiQuery({
    name: 'club_id',
    type: Number,
    required: false,
    description: 'Filter events by club',
  })
  @ApiQuery({
    name: 'latitude',
    type: Number,
    required: false,
    description: 'Latitude to filter events nearby',
  })
  @ApiQuery({
    name: 'longitude',
    type: Number,
    required: false,
    description: 'Longitude to filter events nearby',
  })
  @ApiQuery({
    name: 'radius_km',
    type: Number,
    required: false,
    description: 'Radius in kilometers used with latitude/longitude (default: 50km)',
  })
  @ApiResponse({
    status: 200,
    description: 'Paginated list of events',
    type: EventsIndexSuccessResponseDto,
  })
  public async index({ request }: HttpContext) {
    const payload = await request.validateUsing(eventIndexValidator)

    const page = payload.page ?? 1
    const perPage = payload.per_page ?? 20
    const q = payload.q
    const city = payload.city
    const type = payload.type
    const latitude = payload.latitude
    const longitude = payload.longitude
    const radiusKm = payload.radius_km ?? 50
    const hasLocation = latitude !== undefined && longitude !== undefined

    const query = Event.query()

    if (payload.club_id) {
      query.where('club_id', payload.club_id)
    }

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

    if (hasLocation) {
      const distanceSql =
        'sqrt(power((latitude - ?) * 111.32, 2) + power((longitude - ?) * 111.32 * cos(radians(?)), 2))'
      query.select('*').select(db.rawQuery(`${distanceSql} as distance_km`, [latitude, longitude, latitude]))
      const latRadius = radiusKm / 111.32
      const lonRadius =
        radiusKm / Math.max(111.32 * Math.cos((latitude * Math.PI) / 180), 0.0001)

      query
        .whereNotNull('latitude')
        .whereNotNull('longitude')
        .whereBetween('latitude', [latitude - latRadius, latitude + latRadius])
        .whereBetween('longitude', [longitude - lonRadius, longitude + lonRadius])
        .orderByRaw('ABS(latitude - ?) + ABS(longitude - ?)', [latitude, longitude])
    }

    query.orderBy('start_at', 'asc').orderBy('name', 'asc')

    const events = await query.paginate(page, perPage)
    events.baseUrl('/events')

    return events
  }

  @ApiOperation({
    summary: 'Get a paginated list of events for a club (slug)',
    description: EVENT_INDEX_RULES_MD,
  })
  @ApiParam({
    name: 'slug',
    type: String,
    required: true,
    description: 'Slug du club (route /clubs/{slug}/events)',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination (default: 1)',
  })
  @ApiQuery({
    name: 'per_page',
    type: Number,
    required: false,
    description: 'Number of items per page (default: 20)',
  })
  @ApiQuery({
    name: 'city',
    type: String,
    required: false,
    description: 'Filter events by city',
  })
  @ApiQuery({
    name: 'type',
    type: String,
    required: false,
    description: 'Type of event (ex: match, tournoi)',
  })
  @ApiQuery({
    name: 'q',
    type: String,
    required: false,
    description: 'Full-text search in name, description, city and type',
  })
  @ApiQuery({
    name: 'latitude',
    type: Number,
    required: false,
    description: 'Latitude to filter events nearby',
  })
  @ApiQuery({
    name: 'longitude',
    type: Number,
    required: false,
    description: 'Longitude to filter events nearby',
  })
  @ApiQuery({
    name: 'radius_km',
    type: Number,
    required: false,
    description: 'Radius in kilometers used with latitude/longitude (default: 50km)',
  })
  @ApiResponse({
    status: 200,
    description: 'Paginated list of events',
    type: EventsIndexSuccessResponseDto,
  })
  public async byClub({ request, params, response }: HttpContext) {
    const payload = await request.validateUsing(eventIndexValidator)

    const page = payload.page ?? 1
    const perPage = payload.per_page ?? 20
    const q = payload.q
    const city = payload.city
    const type = payload.type
    const latitude = payload.latitude
    const longitude = payload.longitude
    const radiusKm = payload.radius_km ?? 50
    const hasLocation = latitude !== undefined && longitude !== undefined

    const club = await Club.findBy('slug', params.slug)
    if (!club) {
      return response.notFound({ message: 'Club not found' })
    }

    const query = Event.query().where('club_id', club.id)

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

    if (hasLocation) {
      const distanceSql =
        'sqrt(power((latitude - ?) * 111.32, 2) + power((longitude - ?) * 111.32 * cos(radians(?)), 2))'
      query.select('*').select(db.rawQuery(`${distanceSql} as distance_km`, [latitude, longitude, latitude]))
      const latRadius = radiusKm / 111.32
      const lonRadius =
        radiusKm / Math.max(111.32 * Math.cos((latitude * Math.PI) / 180), 0.0001)

      query
        .whereNotNull('latitude')
        .whereNotNull('longitude')
        .whereBetween('latitude', [latitude - latRadius, latitude + latRadius])
        .whereBetween('longitude', [longitude - lonRadius, longitude + lonRadius])
        .orderByRaw('ABS(latitude - ?) + ABS(longitude - ?)', [latitude, longitude])
    }

    query.orderBy('start_at', 'asc').orderBy('name', 'asc')

    const events = await query.paginate(page, perPage)
    events.baseUrl(`/clubs/${params.slug}/events`)

    return events
  }
}
