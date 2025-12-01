import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubs'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('banner_image_url').nullable()
      table.string('logo_image_url').nullable()
      table.text('gallery_urls').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('banner_image_url')
      table.dropColumn('logo_image_url')
      table.dropColumn('gallery_urls')
    })
  }
}
