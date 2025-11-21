import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { slugify } from '@adonisjs/lucid-slugify'

export default class Club extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  @slugify({
    fields: ['name'],
    strategy: 'dbIncrement',
    allowUpdates: true,
  })
  declare slug: string

  @column()
  declare description: string | null

  @column()
  declare type: string

  @column()
  declare email: string | null

  @column()
  declare phone: string | null

  @column({ serializeAs: 'websiteUrl' })
  declare websiteUrl: string | null

  @column({ serializeAs: 'addressLine1' })
  declare addressLine1: string | null

  @column({ serializeAs: 'addressLine2' })
  declare addressLine2: string | null

  @column({ serializeAs: 'postalCode' })
  declare postalCode: string | null

  @column()
  declare city: string | null

  @column()
  declare country: string

  @column()
  declare latitude: number | null

  @column()
  declare longitude: number | null

  @column({ serializeAs: 'isActive' })
  declare isActive: boolean

  @column.dateTime({ autoCreate: true, serializeAs: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: 'updatedAt' })
  declare updatedAt: DateTime
}
