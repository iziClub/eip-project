import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubs'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('opening_hours').nullable()
      table.text('tags').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('opening_hours')
      table.dropColumn('tags')
    })
  }
}
