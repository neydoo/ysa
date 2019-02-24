'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/login', 'AuthController.login')
Route
  .group(() => {
    Route.get('/', 'BranchController.index')
    Route.post('/', 'BranchController.store')
    Route.get('/:id', 'BranchController.show')
    Route.get('/:id/products', 'BranchController.showProduct')
    Route.get('/:id/orders', 'BranchController.showOrder')
    Route.put('/:id', 'BranchController.update')
    Route.delete('/:id', 'BranchController.destroy')
  })
  .prefix('branch')
Route
  .group(() => {
    Route.get('/', 'CustomerController.index')
    Route.post('/', 'CustomerController.store')
    Route.get('/:id', 'CustomerController.show')
    Route.put('/:id', 'CustomerController.update')
    Route.delete('/:id', 'CustomerController.destroy')
  })
  .prefix('customer')
Route
  .group(() => {
    Route.get('/', 'ProductController.index')
    Route.post('/', 'ProductController.store')
    Route.get('/:id', 'ProductController.show')
    Route.put('/:id', 'ProductController.update')
    Route.delete('/:id', 'ProductController.destroy')
  })
  .prefix('product')
Route
  .group(() => {
    Route.get('/', 'OrderController.index')
    Route.post('/', 'OrderController.store')
    Route.get('/:id', 'OrderController.show')
    Route.put('/:id', 'OrderController.update')
    Route.delete('/:id', 'OrderController.destroy')
  })
  .prefix('order')
Route
  .group(() => {
    Route.get('/', 'BusinessController.index')
    Route.post('/', 'BusinessController.store')
    Route.get('/:id', 'BusinessController.show')
    Route.get('/:id/staff', 'BusinessController.showStaff')
    Route.get('/:id/order', 'BusinessController.showOrder')
    Route.get('/:id/product', 'BusinessController.showProduct')
    Route.put('/:id', 'BusinessController.update')
    Route.delete('/:id', 'BusinessController.destroy')
  })
  .prefix('business')
Route
  .group(() => {
    Route.get('/', 'StaffController.index')
    Route.post('/', 'StaffController.store')
    Route.get('/:id', 'StaffController.show')
    Route.put('/:id', 'StaffController.update')
    Route.delete('/:id', 'StaffController.destroy')
  })
  .prefix('staff')
Route
  .group(() => {
    Route.get('/', 'OrderitemController.index')
    Route.post('/', 'OrderitemController.store')
    Route.get('/:id', 'OrderitemController.show')
    Route.put('/:id', 'OrderitemController.update')
    Route.delete('/:id', 'OrderitemController.destroy')
  })
  .prefix('orderitem')
Route
  .group(() => {
    Route.get('/', 'ManufacturerhController.index')
    Route.post('/', 'ManufacturerController.store')
    Route.get('/:id', 'ManufacturerController.show')
    Route.put('/:id', 'ManufacturerController.update')
    Route.delete('/:id', 'ManufacturerController.destroy')
  })
  .prefix('manufacturer')
