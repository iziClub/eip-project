import vine from '@vinejs/vine'

export const clubIndexValidator = vine.compile(
  vine.object({
    page: vine.number().positive().optional(),
    per_page: vine.number().positive().max(100).optional(),
    q: vine.string().trim().optional(),
    city: vine.string().trim().optional(),
    type: vine.string().trim().optional(),
  })
)
