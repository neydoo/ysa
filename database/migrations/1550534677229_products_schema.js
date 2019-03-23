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
      table.text('category').notNullable()
      table.text('otherDesc')
      table.text('barcode').notNullable().unique()
      table.real('costPrice').notNullable()
      table.real('sellingPrice').notNullable()
      table.string('variants')
      table.integer('quantity').notNullable()
      table.text('expDate')
      // table.text('manufacturer_name').unsigned().references('name').inTable('manufacturers')
      table.integer('branch_id').unsigned().references('id').inTable('branches')
      table.integer('business_id').unsigned().references('id').inTable('businesses')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
