'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchSchema extends Schema {
  up () {
    this.create('branches', (table) => {
      table.increments()
      table.text('address')
      table.text('tel')
      table.text('email')
      table.integer('staff_id').unsigned().references('id').inTable('staff')
    })
  }

  down () {
    this.drop('branches')
  }
}

module.exports = BranchSchema
