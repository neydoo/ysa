'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StaffSchema extends Schema {
  up () {
    this.create('staff', (table) => {
      table.increments()
      table.string('name')
      table.string('role')
      table.text('DOB')
      table.text('address')
      table.string('SOG')
      table.string('LGA')
      table.string('sex')
      table.string('NOK')
      table.string('tel').notNullable().unique()
      table.string('email').notNullable().unique()
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.timestamps()
    })
  }

  down () {
    this.drop('staff')
  }
}

module.exports = StaffSchema
