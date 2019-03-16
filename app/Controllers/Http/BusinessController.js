'use strict'

const Business = use('App/Models/Business')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with businesses
 */
class BusinessController {
  /**
   * Show a list of all businesses.
   * GET businesses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let businesses = await Business.all().query().with('user').fetch()
    response.json(businesses)
  }

  /**
   * Render a form to be used for creating a new business.
   * GET businesses/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new business.
   * POST businesses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const name = request.body.name
    const email = request.body.email
    const tel = request.body.tel
    const logo = request.body.logo
    const address = request.body.address

    const business = new Business()
    business.name = name
    business.email = email
    business.tel = tel
    business.logo = logo
    business.address = address

    await business.save()
    return response.json(business)
  }

  /**
   * Show a  business with orders made.
   * GET businesses/:id/orders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async showOrder ({params, request, response }) {
    const business = await Business
    .query()
    .where('id','=', params.id)
    .with('orders')
    .fetch()
    response.json(business)
  }
  /**
   * Show a  business with staff.
   * GET businesses/:id/staff
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async showStaff ({params, request, response }) {
    const business = await Business
    .query()
    .where('id','=', params.id)
    .with('staff')
    .fetch()
    response.json(business)
  }
  /**
   * Show a  business with its products.
   * GET businesses/:id/products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async showProduct ({params, request, response }) {
    const business = await Business
    .query()
    .where('id','=', params.id)
    .with('product')
    .fetch()
    response.json(business)
  }

  /**
   * Display a single business.
   * GET businesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const business = await Business
    .query()
    .where('id','=', params.id)
    .with('branches')
    .fetch()
    response.json(business)
  }

  /**
   * Render a form to update an existing business.
   * GET businesses/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update business details.
   * PUT or PATCH businesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const name = request.body.name
    const email = request.body.email
    const tel = request.body.tel
    const logo = request.body.logo
    const address = request.body.address

    const business = await Business.find(params.id)

    business.name = name
    business.email = email
    business.tel = tel
    business.logo = logo
    business.address = address

    await business.save()
    return response.json(business)
  }

  /**
   * Delete a business with id.
   * DELETE businesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const business = await Business.find(params.id)
    await branch.delete()
    return response.json({"message":'Deleted succesfully'})
  }
}

module.exports = BusinessController
