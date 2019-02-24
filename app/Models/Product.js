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
}

module.exports = Product
