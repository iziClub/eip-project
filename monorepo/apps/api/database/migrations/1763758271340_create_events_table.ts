import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('club_id')
        .unsigned()
        .references('id')
        .inTable('clubs')
        .onDelete('CASCADE')
        .notNullable()

      table.string('name').notNullable()
      table.string('slug').notNullable().unique()
      table.text('description')
      table.string('type').notNullable()

      table.string('city')
      table.string('country').notNullable()
      table.string('address_line_1')
      table.string('address_line_2')
      table.string('postal_code')

      table.float('latitude')
      table.float('longitude')

      table.dateTime('start_at', { useTz: true })
      table.dateTime('end_at', { useTz: true })

      table.string('image_url')

      table.boolean('is_active').defaultTo(true)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
