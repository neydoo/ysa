'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StaffSchema extends Schema {
  up () {
    this.create('staff', (table) => {
      table.increments()
      table.string('name')
      table.string('role')
      table.text('dob')
      table.text('address')
      table.string('sog')
      table.string('relationship')
      table.string('lga')
      table.string('sex')
      table.string('nok')
      table.string('tel', 11).notNullable().unique()
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('staff')
  }
}

module.exports = StaffSchema
