'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    orderitems(){
        return this.hasMany('App/Models/Orderitem')
    }

    customer(){
        return this.belongsTo('App/Models/Customer')
    }
    branch(){
        return this.belongsTo('App/Models/Branch')
    }
}

module.exports = Order
