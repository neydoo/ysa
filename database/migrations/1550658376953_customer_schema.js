'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('name')
      table.text('address')
      table.text('tel').notNullable().unique()
      table.text('email').notNullable().unique()
      table.integer('loyalty')
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
