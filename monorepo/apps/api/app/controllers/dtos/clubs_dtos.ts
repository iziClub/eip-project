// app/controllers/dtos/clubs_dtos.ts
import { ApiProperty } from '@foadonis/openapi/decorators'

export class ClubDto {
  @ApiProperty({ type: Number })
  declare id: number

  @ApiProperty({ type: String })
  declare name: string

  @ApiProperty({ type: String })
  declare slug: string

  @ApiProperty({ type: String, required: false })
  declare description?: string | null

  @ApiProperty({ type: String })
  declare type: string

  @ApiProperty({ type: String, required: false })
  declare email?: string | null

  @ApiProperty({ type: String, required: false })
  declare phone?: string | null

  @ApiProperty({ type: String, required: false })
  declare websiteUrl?: string | null

  @ApiProperty({ type: String, required: false })
  declare addressLine1?: string | null

  @ApiProperty({ type: String, required: false })
  declare addressLine2?: string | null

  @ApiProperty({ type: String, required: false })
  declare postalCode?: string | null

  @ApiProperty({ type: String, required: false })
  declare city?: string | null

  @ApiProperty({ type: String })
  declare country: string

  @ApiProperty({ type: Number, required: false })
  declare latitude?: number | null

  @ApiProperty({ type: Number, required: false })
  declare longitude?: number | null

  @ApiProperty({ type: String, required: false })
  declare imageUrl?: string | null

  @ApiProperty({ type: String, required: false })
  declare bannerImageUrl?: string | null

  @ApiProperty({ type: String, required: false })
  declare logoImageUrl?: string | null

  @ApiProperty({ type: () => [String], required: false })
  declare galleryUrls?: string[]

  @ApiProperty({ type: Number, required: false })
  declare distance?: number | null

  @ApiProperty({ type: () => [String], required: false })
  declare openingHours?: string[]

  @ApiProperty({ type: () => [String], required: false })
  declare tags?: string[]

  @ApiProperty({ type: Boolean })
  declare isActive: boolean

  @ApiProperty({ type: String })
  declare createdAt: string

  @ApiProperty({ type: String })
  declare updatedAt: string
}

export class PaginationMetaDto {
  @ApiProperty({ type: Number })
  declare total: number

  @ApiProperty({ type: Number })
  declare perPage: number

  @ApiProperty({ type: Number })
  declare currentPage: number

  @ApiProperty({ type: Number })
  declare lastPage: number

  @ApiProperty({ type: Number })
  declare firstPage: number

  @ApiProperty({ type: String, required: false })
  declare firstPageUrl: string | null

  @ApiProperty({ type: String, required: false })
  declare lastPageUrl: string | null

  @ApiProperty({ type: String, required: false })
  declare nextPageUrl: string | null

  @ApiProperty({ type: String, required: false })
  declare previousPageUrl: string | null
}

export class ClubsIndexSuccessResponseDto {
  @ApiProperty({ type: () => ClubDto })
  declare data: ClubDto[]

  @ApiProperty({ type: () => PaginationMetaDto })
  declare meta: PaginationMetaDto
}

// --- erreurs de validation (si tu n’en as pas déjà un ailleurs) ---

export class ValidationErrorItemDto {
  @ApiProperty({ type: String })
  declare field: string

  @ApiProperty({ type: String })
  declare rule: string

  @ApiProperty({ type: String })
  declare message: string
}

export class ValidationErrorDto {
  @ApiProperty({ type: () => ValidationErrorItemDto })
  declare errors: ValidationErrorItemDto[]
}
