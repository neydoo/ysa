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

Route
.group(() => {
  
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.post('/forgotPassword', 'AuthController.forgotPassword')
  Route.post('/resetPassword', 'AuthController.resetPassword')
  })
  .prefix('auth')

Route
  .group(() => {
    Route.get('/', 'BranchController.index'.middleware('auth','role'))
    Route.post('/', 'BranchController.store').middleware('auth','role')
    Route.get('/:id', 'BranchController.show').middleware('auth','role')
    Route.get('/:id/products', 'BranchController.showProduct').middleware('auth','role')
    Route.get('/:id/orders', 'BranchController.showOrder').middleware('auth','role')
    Route.put('/:id', 'BranchController.update').middleware('auth','role')
    Route.delete('/:id', 'BranchController.destroy').middleware('auth','admin')
  })
  .prefix('branch')
Route
  .group(() => {
    Route.get('/', 'CustomerController.index').middleware('auth','role')
    Route.post('/', 'CustomerController.store').middleware('auth','role')
    Route.get('/:id', 'CustomerController.show').middleware('auth','role')
    Route.put('/:id', 'CustomerController.update').middleware('auth','role')
    Route.delete('/:id', 'CustomerController.destroy')
  })
  .prefix('customer')
Route
  .group(() => {
    Route.get('/', 'ProductController.index').middleware('auth')
    Route.post('/', 'ProductController.store').middleware('auth','role')
    Route.get('/:id', 'ProductController.show').middleware('auth')
    Route.put('/:id', 'ProductController.update').middleware('auth')
    Route.delete('/:id', 'ProductController.destroy').middleware('auth','role')
  })
  .prefix('product')
Route
  .group(() => {
    Route.get('/', 'OrderController.index').middleware('auth','role')
    Route.post('/', 'OrderController.store').middleware('auth','role')
    Route.get('/:id', 'OrderController.show').middleware('auth','role')
    Route.put('/:id', 'OrderController.update').middleware('auth','role')
    Route.delete('/:id', 'OrderController.destroy')
  })
  .prefix('order')
Route
  .group(() => {
    Route.get('/', 'BusinessController.index').middleware('auth','admin')
    Route.post('/', 'BusinessController.store').middleware('auth','admin')
    Route.get('/:id', 'BusinessController.show').middleware('auth','admin')
    Route.get('/:id/staff', 'BusinessController.showStaff').middleware('auth','admin')
    Route.get('/:id/order', 'BusinessController.showOrder').middleware('auth','admin')
    Route.get('/:id/product', 'BusinessController.showProduct').middleware('auth','admin')
    Route.put('/:id', 'BusinessController.update').middleware('auth','admin')
    Route.delete('/:id', 'BusinessController.destroy').middleware('auth','admin')
  })
  .prefix('business')
Route
  .group(() => {
    Route.get('/', 'StaffController.index').middleware('auth','admin')
    Route.post('/', 'StaffController.store')
    Route.get('/:id', 'StaffController.show').middleware('auth','admin')
    Route.put('/:id', 'StaffController.update').middleware('auth','admin')
    Route.delete('/:id', 'StaffController.destroy').middleware('auth','admin')
  })
  .prefix('staff')
Route
  .group(() => {
    Route.get('/', 'OrderitemController.index').middleware('auth')
    Route.post('/', 'OrderitemController.store').middleware('auth')
    Route.get('/:id', 'OrderitemController.show').middleware('auth')
    Route.put('/:id', 'OrderitemController.update').middleware('auth','role')
    Route.delete('/:id', 'OrderitemController.destroy')
  })
  .prefix('orderitem')
Route
  .group(() => {
    Route.get('/', 'ManufacturerhController.index').middleware('auth','role')
    Route.post('/', 'ManufacturerController.store').middleware('auth','role')
    Route.get('/:id', 'ManufacturerController.show').middleware('auth','role')
    Route.put('/:id', 'ManufacturerController.update').middleware('auth','role')
    Route.delete('/:id', 'ManufacturerController.destroy').middleware('auth','role')
  })
  .prefix('manufacturer')
