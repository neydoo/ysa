'use strict'

const Staff =  use('App/Models/Staff')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AdminRole {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    const staff_id = request.body.staff_id
    const staff = Staff.query()
    .where('id','=',staff_id)
    .fetch()
    if(staff.role == 'admin'){

      await next()
    }
    // call next to advance the request
  }
}

module.exports = AdminRole
