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
      table.string('tel')
      table.string('email')
      table.timestamps()
    })
  }

  down () {
    this.drop('staff')
  }
}

module.exports = StaffSchema
