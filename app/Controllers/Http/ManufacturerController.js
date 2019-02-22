'use strict'

const Manufacturers = use('App/Models/Manufacturer')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with manufacturers
 */
class ManufacturerController {
  /**
   * Show a list of all manufacturers.
   * GET manufacturers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let page = 1
    let manufacturers = await Manufacturers.query().paginate(page)
    return response.json(manufacturers.toJSON())
  }

  /**
   * Render a form to be used for creating a new manufacturer.
   * GET manufacturers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new manufacturer.
   * POST manufacturers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const name = request.input.name
    const tel = request.input.tel
    const address = request.input.address
    const email = request.input.email
    const website = request.input.website

    const manufacturer = new Manufacturers()

    manufacturer.name = name
    manufacturer.address = address
    manufacturer.tel = tel
    manufacturer.email = email
    manufacturer.website = website

    await manufacturer.save()
    return response.json(manufacturer)
  }

  /**
   * Display a single manufacturer.
   * GET manufacturers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let manufacturer = await ManufacturerController.find(params.id).query().with('products').fetch()
    return response.json(manufacturer)
  }

  /**
   * Render a form to update an existing manufacturer.
   * GET manufacturers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update manufacturer details.
   * PUT or PATCH manufacturers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const name = request.input.name
    const tel = request.input.tel
    const address = request.input.address
    const email = request.input.email
    const website = request.input.website

    const manufacturer = await Manufacturers.find(params.id)

    manufacturer.name = name
    manufacturer.address = address
    manufacturer.tel = tel
    manufacturer.email = email
    manufacturer.website = website

    await manufacturer.save()
    return response.json(manufacturer)
  }

  /**
   * Delete a manufacturer with id.
   * DELETE manufacturers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    await Manufacturers.find(params.id).delete()
    return response.json({"message":"successfully deleted!"})
  }
}

module.exports = ManufacturerController
