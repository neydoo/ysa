'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BusinessSchema extends Schema {
  up () {
    this.create('businesses', (table) => {
      table.increments()
      table.text('name')
      table.text('address')
      table.text('tel')
      table.text('email')
      table.blob('logo')
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.timestamps()
    })
  }

  down () {
    this.drop('businesses')
  }
}

module.exports = BusinessSchema
