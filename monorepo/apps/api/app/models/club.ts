import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, computed } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { slugify } from '@adonisjs/lucid-slugify'
import Event from '#models/event'

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

  @column({ serializeAs: 'imageUrl' })
  declare imageUrl: string | null

  @column({ columnName: 'banner_image_url', serializeAs: 'bannerImageUrl' })
  declare bannerImageUrl: string | null

  @column({ columnName: 'logo_image_url', serializeAs: 'logoImageUrl' })
  declare logoImageUrl: string | null

  @column({
    columnName: 'gallery_urls',
    serializeAs: 'galleryUrls',
    consume: (value: string | null) => (value ? (JSON.parse(value) as string[]) : []),
    prepare: (value: string[] | null) => (value && value.length > 0 ? JSON.stringify(value) : null),
  })
  declare galleryUrls: string[]

  @column({
    columnName: 'opening_hours',
    serializeAs: 'openingHours',
    consume: (value: string | null) => (value ? (JSON.parse(value) as string[]) : []),
    prepare: (value: string[] | null) => (value && value.length > 0 ? JSON.stringify(value) : null),
  })
  declare openingHours: string[]

  @column({
    columnName: 'tags',
    serializeAs: 'tags',
    consume: (value: string | null) => (value ? (JSON.parse(value) as string[]) : []),
    prepare: (value: string[] | null) => (value && value.length > 0 ? JSON.stringify(value) : null),
  })
  declare tags: string[]

  @column({ serializeAs: 'isActive' })
  declare isActive: boolean

  @column.dateTime({ autoCreate: true, serializeAs: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: 'updatedAt' })
  declare updatedAt: DateTime

  @hasMany(() => Event)
  declare events: HasMany<typeof Event>

  @computed()
  public get distance(): number | null {
    const raw = (this as any).$extras?.distance_km ?? (this as any).$extras?.distance
    return typeof raw === 'number' ? Math.round(raw * 1000) / 1000 : null
  }
}
