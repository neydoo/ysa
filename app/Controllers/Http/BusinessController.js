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
    let businesses = await Business.query().with('user').fetch()
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
    const name = request.input.name
    const email = request.input.email
    const tel = request.input.tel
    const logo = request.input.logo
    const address = request.input.address

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
   * Display a single business.
   * GET businesses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const business = await Business.find(params.id).query().with('branches').fetch()
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
    const name = request.input.name
    const email = request.input.email
    const tel = request.input.tel
    const logo = request.input.logo
    const address = request.input.address

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
    await Branch.find(params.id).delete()
    return response.json({"message":'Deleted succesfully'})
  }
}

module.exports = BusinessController
