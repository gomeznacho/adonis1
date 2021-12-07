import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Experiences extends BaseSchema {
  protected tableName = 'experiences'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('level')
      table.integer('skill_id').unsigned().references('id').inTable('skills')
      table.integer('candidate').unsigned().references('id').inTable('candidates')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
