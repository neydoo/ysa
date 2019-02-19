'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Branch extends Model {
    business(){
        return this.belongsTo('App/Models/Business')
    }
}

module.exports = Branch
