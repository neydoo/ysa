'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Staff extends Model {
    business(){
        return this.belongsTo('App/Models/Business')
    }
    branch(){
        return this.hasOne('App/Models/Branch')
    }
    user(){
        return this.belongsTo('App/Models/User')
    }
    static get dates () {
        return super.dates.concat(['dob'])
      }
      // static formatDates (field, value) {
      //   if (field === 'dob') {
      //     return value.format('YYYY-MM-DD')
      //   }
      //   return super.formatDates(field, value)
      // }
}

module.exports = Staff
