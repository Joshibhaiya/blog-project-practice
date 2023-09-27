const express = require('express')
const FrontController = require('../controllers/FrontController')
const route = express.Router()



// rouute (url)

route.get('/',FrontController.index)//static method
route.get('/about',FrontController.about)//static method
route.get('/contact',FrontController.contact)//static method
route.get('/blog',FrontController.blog)//static method
route.get('/cyb',FrontController.cyb)//static method







module.exports =route









