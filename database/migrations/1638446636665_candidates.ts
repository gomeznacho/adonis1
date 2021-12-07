import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Candidates extends BaseSchema {
  protected tableName = 'candidates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('phoneNumber').unique().notNullable()
      table.dateTime('birthDate')//.notNullable()
      table.integer('currentSalary').notNullable()
      table.integer('expectSalary').notNullable()
      table.string('city').notNullable()
      table.boolean('remote').notNullable()
      table.boolean('mobility').notNullable()
      table.boolean('active').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
