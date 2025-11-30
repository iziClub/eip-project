import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { slugify } from '@adonisjs/lucid-slugify'
import Club from '#models/club'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clubId: number

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
  declare city: string | null

  @column()
  declare country: string

  @column({ serializeAs: 'addressLine1' })
  declare addressLine1: string | null

  @column({ serializeAs: 'addressLine2' })
  declare addressLine2: string | null

  @column({ serializeAs: 'postalCode' })
  declare postalCode: string | null

  @column()
  declare latitude: number | null

  @column()
  declare longitude: number | null

  @column.dateTime({ serializeAs: 'startAt' })
  declare startAt: DateTime | null

  @column.dateTime({ serializeAs: 'endAt' })
  declare endAt: DateTime | null

  @column({ serializeAs: 'imageUrl' })
  declare imageUrl: string | null

  @column({ serializeAs: 'isActive' })
  declare isActive: boolean

  @column.dateTime({ autoCreate: true, serializeAs: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: 'updatedAt' })
  declare updatedAt: DateTime

  @belongsTo(() => Club)
  declare club: BelongsTo<typeof Club>
}
