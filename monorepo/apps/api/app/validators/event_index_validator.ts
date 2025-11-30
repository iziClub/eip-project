import vine from '@vinejs/vine'

export const eventIndexValidator = vine.compile(
  vine.object({
    page: vine.number().positive().optional(),
    per_page: vine.number().positive().max(100).optional(),
    q: vine.string().trim().optional(),
    city: vine.string().trim().optional(),
    type: vine.string().trim().optional(),
    club_id: vine.number().positive().optional(),
    latitude: vine.number().min(-90).max(90).optional(),
    longitude: vine.number().min(-180).max(180).optional(),
    radius_km: vine.number().positive().max(500).optional(),
  })
)
