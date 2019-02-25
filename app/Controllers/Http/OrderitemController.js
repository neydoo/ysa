'use strict'

const OrderItem = use('App/Models/Orderitem')
const Order = use('App/Models/Order')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with orderitems
 */
class OrderitemController {
  /**
   * Show a list of all orderitems.
   * GET orderitems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new orderitem.
   * GET orderitems/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new orderitem.
   * POST orderitems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const orderitem = JSON.stringify(request.body.orderitem)
    // const orderitem = request.body.orderitem

    const order_item = new OrderItem()
    const order = new Order()

    order_item.orderitems = orderitem
    order.total = request.body.total
    order.staff_id = request.body.staff_id
    order.branch_id = request.body.branch_id
    order.method_of_payment = request.body.method_of_payment
    
    await order.save()
    order_item.order_id = order.id
    await order_item.save()
    // const ordered_item = JSON.parse(order_item.orderitems)
    return response.json(order)

  }

  /**
   * Display a single orderitem.
   * GET orderitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing orderitem.
   * GET orderitems/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update orderitem details.
   * PUT or PATCH orderitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = await OrderItems.find(params.id)
    const orderitem = JSON.parse(data)

    orderitem.orderitems = request.body.orderitem
    order_item = JSON.stringify(orderitem)
    await order_item.save()

    return response.json(order_item)
  }

  /**
   * Delete a orderitem with id.
   * DELETE orderitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OrderitemController
