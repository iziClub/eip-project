import vine from '@vinejs/vine'

const nameRegex = /^[\p{L}\p{M}\p{Zs}'-]+$/u
const noSpaceRegex = /^\S+$/
const strongPwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/

export const registerValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(1).maxLength(64).regex(nameRegex),
    lastName: vine.string().trim().minLength(1).maxLength(64).regex(nameRegex),
    email: vine.string().trim().email().maxLength(254).normalizeEmail().toLowerCase(),
    password: vine.string().minLength(10).maxLength(128).regex(noSpaceRegex).regex(strongPwdRegex),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email().maxLength(254).normalizeEmail().toLowerCase(),
    password: vine.string(),
  })
)
