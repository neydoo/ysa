'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManufacturerSchema extends Schema {
  up () {
    this.create('manufacturers', (table) => {
      table.increments()
      table.text('name')
      table.text('tel')
      table.text('address')
      table.text('email')
      table.text('website')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('manufacturers')
  }
}

module.exports = ManufacturerSchema
