'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    manufacturer(){
        return this.hasMany('App/Models/Manufacturer')
    }
    branch(){
        return this.hasOne('App/Models/Branch')
    }
    category() {
        return this.hasOne('App/Models/Category')
    }
    static get dates () {
        return super.dates.concat(['batch'])
    }
    
    static get dates () {
        return super.dates.concat(['expDate'])
      }
}

module.exports = Product
