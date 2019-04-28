'use strict'
const Subcategory = use('App/Models/Subcategory')
const {validate} = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with subcategories
 */
class SubcategoryController {

  /**
   * Show a list of all subcategories.
   * GET subcategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const subcategories = await Subcategory.all()
    return response.json({subcategories})
  }

  /**
   * Render a form to be used for creating a new subcategory.
   * GET subcategories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new subcategory.
   * POST subcategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    // const rules ={
    //     subcategory_name: 'required|subcategory_name|unique:subcategories,subcategory_name'
    // }
  
    // const messages = {
    //     'subcategory_name.unique' : 'This',
    //     'email.unique' : 'Email already exists',
    //     'tel.unique' : 'Telephone already exists',
    //     'password.min' : 'Password length should be at least 6',
    // }
  
  //   const validation = await validate(request.all(), rules, messages)
  
  // if (validation.fails()) {
  
  //   // console.log(validation.messages())
  // return response.status(409).json({message: validation.messages()})
  // }
    
    const subcategory_name = request.body.subcategory_name
    const category_id = request.body.category_id

    const subcategory = new Subcategory()
    subcategory.subcategory_name = subcategory_name
    subcategory.category_id = category_id

    await subcategory.save()
    return response.json(subcategory)
  }

  /**
   * Display a single subcategory.
   * GET subcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const subcategory = Subcategory.query().where('category_id', params.id).fetch()
    return response.json({subcategory})
  }

  /**
   * Render a form to update an existing subcategory.
   * GET subcategories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update subcategory details.
   * PUT or PATCH subcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a subcategory with id.
   * DELETE subcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const subcategory = await Subcategory.find(params.id)
    await subcategory.delete()
    return response.json({"message": "Succesfully deleted!"})
  }
}

module.exports = SubcategoryController
