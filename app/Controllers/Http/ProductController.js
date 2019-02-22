'use strict'

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
    return response.json(products)
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
    const name = request.input.name
    const batch = request.input.batch
    const productType = request.input.productType
    const description = request.input.description
    const otherDesc = request.input.otherDesc
    const barcode = request.input.barcode
    const costPrice = request.input.costPrice
    const sellingPrice = request.input.sellingPrice
    const quantity = request.input.quantity
    const variants = request.input.variants
    const expDate = request.input.expDate

    const product = new Products()

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
    return response.json(product) 
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
    const product = Poduct.find(params.id)
    return response.json(product)
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
    const name = request.input.name
    const batch = request.input.batch
    const productType = request.input.productType
    const description = request.input.description
    const otherDesc = request.input.otherDesc
    const barcode = request.input.barcode
    const costPrice = request.input.costPrice
    const sellingPrice = request.input.sellingPrice
    const quantity = request.input.quantity
    const expDate = request.input.expDate
    const variants = request.input.variants

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
    return response.json(product)  
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
    await ProductController.find(params.id).delete()
    return response.json({"message":"succesfully deleted!"})
  }
}

module.exports = ProductController
