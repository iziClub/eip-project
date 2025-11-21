import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()
      table.text('description')
      table.string('type').notNullable()
      table.string('email')
      table.string('phone')
      table.string('website_url')
      table.string('address_line_1')
      table.string('address_line_2')
      table.string('postal_code')
      table.string('city')
      table.string('country').notNullable()

      table.float('latitude')
      table.float('longitude')

      table.boolean('is_active').defaultTo(true)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
