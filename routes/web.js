const express = require('express')
const FrontController = require('../controllers/FrontController')
const route = express.Router()



// rouute (url)

route.get('/',FrontController.home)//static method




module.exports =route









