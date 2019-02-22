'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderitemSchema extends Schema {
  up () {
    this.create('orderitems', (table) => {
      table.increments()
      table.string('orderitems').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('orderitems')
  }
}

module.exports = OrderitemSchema
