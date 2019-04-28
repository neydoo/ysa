'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubcategorySchema extends Schema {
  up () {
    this.create('subcategories', (table) => {
      table.increments()
      table.text('subcategory_name').notNullable()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('subcategories')
  }
}

module.exports = SubcategorySchema
