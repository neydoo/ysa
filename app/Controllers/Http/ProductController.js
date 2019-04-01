'use strict'

const Subcategory = use('App/Models/Subcategory')
const Products = use('App/Models/Product')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const products = await Products.all()
    return response.json({products})
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const name = request.body.name
    const batch = request.body.batch
    const description = request.body.description
    const otherDesc = request.body.otherDesc
    const barcode = request.body.barcode
    const label = request.body.label
    const costPrice = request.body.costPrice
    const sellingPrice = request.body.sellingPrice
    const quantity = request.body.quantity
    const variants = request.body.variants
    const expDate = request.body.expDate
    const category_id = request.body.categoryId
    const subcategory_name = request.body.subcategory


    const subcategory = new Subcategory()
    subcategory.subcategory_name = subcategory_name
    subcategory.category_id = category.id

    await subcategory.save()

    const product = new Products()

    product.name = name
    product.batch = batch
    product.description = description
    product.otherDesc = otherDesc
    product.barcode = barcode
    product.costPrice = costPrice
    product.sellingPrice = sellingPrice
    product.quantity = quantity
    product.label = label
    product.variants = variants
    product.expDate = expDate
    product.category_id = category_id

    await product.save()
    return response.json({product}) 
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const product = Products.find(params.id)
    return response.json({product})
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const name = request.body.name
    const batch = request.body.batch
    const productType = request.body.productType
    const description = request.body.description
    const otherDesc = request.body.otherDesc
    const barcode = request.body.barcode
    const costPrice = request.body.costPrice
    const sellingPrice = request.body.sellingPrice
    const quantity = request.body.quantity
    const expDate = request.body.expDate
    const variants = request.body.variants

    const product = Products.find(params.id)

    product.name = name
    product.batch = batch
    product.productType = productType
    product.description = description
    product.otherDesc = otherDesc
    product.barcode = barcode
    product.costPrice = costPrice
    product.sellingPrice = sellingPrice
    product.quantity = quantity
    product.variants = variants
    product.expDate = expDate

    await product.save()
    return response.json({product})  
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const product = await Products.find(params.id)
    await product.delete()
    return response.json({"message":"succesfully deleted!"})
  }
}

module.exports = ProductController
