const routes = module.exports = require('next-routes')()

//const project id??
 
 
 routes.add('root', '/', 'index')

routes
  .add('landing')
  .add('portfolio', '/portfolio/:slug')
