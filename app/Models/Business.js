'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Business extends Model {
    branch(){
        return this.hasMany('App/Models/Branch')
    }
    staff(){
        return this.hasMany('App/Models/Staff')
    }
}

module.exports = Business
