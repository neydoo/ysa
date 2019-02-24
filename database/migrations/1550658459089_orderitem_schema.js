'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderitemSchema extends Schema {
  up () {
    this.create('orderitems', (table) => {
      table.increments()
      table.string('orderitems').notNullable()
      table.integer('order_id').unsigned().references('id').inTable('orders')
      table.timestamps()
    })
  }

  down () {
    this.drop('orderitems')
  }
}

module.exports = OrderitemSchema
