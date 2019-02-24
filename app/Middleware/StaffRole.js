'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class StaffRole {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    // call next to advance the requestconst staff_id = request.body.staff_id
    const staff = Staff.query()
    .where('id','=',staff_id)
    .fetch()
    if(staff.role == 'manager' || staff.role == 'admin'){

      await next()
    }
  }
}

module.exports = StaffRole
