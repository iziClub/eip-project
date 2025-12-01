import vine from '@vinejs/vine'

export const adminCreateClubValidator = vine.compile(
  vine.object({
    club: vine.object({
      name: vine.string().trim().minLength(2).maxLength(255),
      description: vine.string().trim().optional(),
      type: vine.string().trim().minLength(2).maxLength(64),
      email: vine.string().trim().email().optional(),
      phone: vine.string().trim().optional(),
      websiteUrl: vine.string().trim().url().optional(),
      addressLine1: vine.string().trim().optional(),
      addressLine2: vine.string().trim().optional(),
      postalCode: vine.string().trim().optional(),
      city: vine.string().trim().optional(),
      country: vine.string().trim().optional(),
      latitude: vine.number().min(-90).max(90).optional(),
      longitude: vine.number().min(-180).max(180).optional(),
      imageUrl: vine.string().trim().url().optional(),
      bannerImageUrl: vine.string().trim().url().optional(),
      logoImageUrl: vine.string().trim().url().optional(),
      galleryUrls: vine.array(vine.string().trim().url()).optional(),
      openingHours: vine.array(vine.string().trim()).optional(),
      tags: vine.array(vine.string().trim().minLength(1)).optional(),
      isActive: vine.boolean().optional(),
    }),
    admin: vine.object({
      firstName: vine.string().trim().minLength(1).maxLength(64),
      lastName: vine.string().trim().minLength(1).maxLength(64),
      email: vine.string().trim().email().maxLength(254).normalizeEmail().toLowerCase(),
      password: vine.string().trim().minLength(10).maxLength(128).optional(),
    }),
  })
)
