'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.text('name')
      table.text('batch')
      table.text('productType')
      table.text('description')
      table.text('otherDesc')
      table.text('barcode')
      table.real('costPrice')
      table.real('sellingPrice')
      table.string('variants')
      table.integer('quantity')
      table.integer('manufacturer_id').unsigned().references('id').inTable('manufacturers')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
