const express = require('express')
const routes = express.Router()
const ProductController = require('./app/controllers/ProductController')


//rota para imprimir layout
routes.get('/', function (req, res) {
    return res.render("layout.njk")
})

//rota para criar produto

routes.get('/products/create', ProductController.create);
routes.get('/products/:id/edit', ProductController.edit);

routes.post('/products', ProductController.post);
routes.put('/products', ProductController.put);


//mascara para redirecionar p create -ALIAS-

routes.get('/ads/create', function (req, res) {
    return res.redirect("/products/create")
})



module.exports = routes 