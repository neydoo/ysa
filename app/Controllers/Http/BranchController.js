'use strict'
const Branches = use('App/Models/Branch')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with branches
 */
class BranchController {
  /**
   * Show a list of all branches.
   * GET branches
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let branches = Branches.all()
    return response.json(branches)
  }

  /**
   * Render a form to be used for creating a new branch.
   * GET branches/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new branch.
   * POST branches
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const address = request.body.address
    const tel = request.body.tel
    const email = request.body.email
    // const staff_id = request.body.staff_id

    const branch = new Branches()

    branch.address = address
    branch.tel = tel
    branch.email = email
    // branch.staff_id = staff_id

    await branch.save()
    return response.json(branch)
  }

  /**
   * Display a single branch.
   * GET branches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    // let branch = await Branches.find(params.id)
    let branch = await Branches.query()
    .where('id','=',params.id)
    .with('staff')
    .fetch()

    response.json(branch)
  }

  /**
   * Display a single branch with its products.
   * GET branches/:id/products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showProduct ({ params, request, response, view }) {
    let branch = await Branches.query()
    .where('id','=',params.id)
    .with('products')
    .fetch()

    response.json(branch)
  }

  /**
   * Display a single branch with orders.
   * GET branches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showOrder ({ params, request, response, view }) {
    let branch = await Branches.query()
    .where('id','=',params.id)
    .with('orders')
    .fetch()

    response.json(branch)
  }

  /**
   * Render a form to update an existing branch.
   * GET branches/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update branch details.
   * PUT or PATCH branches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const address = request.body.address
    const tel = request.body.tel
    const email = request.body.email

    const branch = await Branches.find(params.id)
    
    branch.address = address
    branch.tel = tel
    branch.email = email

    await branch.save()
    return response.json(branch)
  }

  /**
   * Delete a branch with id.
   * DELETE branches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const branch = await Branches.find(params.id)
    await branch.delete()
    return response.json({"message": "Succesfully deleted!"})
  }
}

module.exports = BranchController
