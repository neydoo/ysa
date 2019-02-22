'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.text('name').notNullable()
      table.text('batch').notNullable()
      table.text('productType').notNullable()
      table.text('description').notNullable()
      table.text('otherDesc')
      table.text('barcode').notNullable().unique()
      table.real('costPrice').notNullable()
      table.real('sellingPrice').notNullable()
      table.string('variants')
      table.integer('quantity').notNullable()
      table.text('expDate')
      table.integer('manufacturer_id').unsigned().references('id').inTable('manufacturers')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
