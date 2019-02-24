'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Branch extends Model {
    business(){
        return this.belongsTo('App/Models/Business')
    }
    staff(){
        return this.hasMany('App/Models/Staff')
    }
    products(){
        return this.hasMany('App/Models/Product')
    }
    orders(){
        return this.hasMany('App/Models/Order')
    }
}

module.exports = Branch
