// app/controllers/dtos/events_dtos.ts
import { ApiProperty } from '@foadonis/openapi/decorators'
import { PaginationMetaDto } from '#controllers/dtos/clubs_dtos'

export class EventDto {
  @ApiProperty({ type: Number })
  declare id: number

  @ApiProperty({ type: Number })
  declare clubId: number

  @ApiProperty({ type: String })
  declare name: string

  @ApiProperty({ type: String })
  declare slug: string

  @ApiProperty({ type: String, required: false })
  declare description?: string | null

  @ApiProperty({ type: String })
  declare type: string

  @ApiProperty({ type: String, required: false })
  declare city?: string | null

  @ApiProperty({ type: String })
  declare country: string

  @ApiProperty({ type: String, required: false })
  declare addressLine1?: string | null

  @ApiProperty({ type: String, required: false })
  declare addressLine2?: string | null

  @ApiProperty({ type: String, required: false })
  declare postalCode?: string | null

  @ApiProperty({ type: Number, required: false })
  declare latitude?: number | null

  @ApiProperty({ type: Number, required: false })
  declare longitude?: number | null

  @ApiProperty({ type: String, required: false })
  declare startAt?: string | null

  @ApiProperty({ type: String, required: false })
  declare endAt?: string | null

  @ApiProperty({ type: String, required: false })
  declare imageUrl?: string | null

  @ApiProperty({ type: Boolean })
  declare isActive: boolean

  @ApiProperty({ type: String })
  declare createdAt: string

  @ApiProperty({ type: String })
  declare updatedAt: string
}

export class EventsIndexSuccessResponseDto {
  @ApiProperty({ type: () => EventDto })
  declare data: EventDto[]

  @ApiProperty({ type: () => PaginationMetaDto })
  declare meta: PaginationMetaDto
}
