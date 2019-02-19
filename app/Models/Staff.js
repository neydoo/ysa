'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Staff extends Model {
    business(){
        return this.belongsTo('App/Models/Business')
    }
    branch(){
        return this.hasMany('App/Models/Branch')
    }
}

module.exports = Staff
