const express = require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const BlogControoler = require('../controllers/admin/BlogController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const AboutController = require('../controllers/admin/AboutController')
const route = express.Router()



// rouute (url)

route.get('/',FrontController.index)//static method
route.get('/about',FrontController.about)//static method
route.get('/contact',FrontController.contact)//static method
route.get('/blog',FrontController.blog)//static method
route.get('/cyb',FrontController.cyb)//static method



// admin controller
route.get('/admin/dashboard',AdminController.dashboard)

// admin blog controoler

route.get('/admin/blog/display',BlogController.display)


// category controller


route.get('/admin/category/display',CategoryController.display)
route.post('/categoryinsert',CategoryController.categoryinsert)



// about controller
route.get('/admin/about/display',AboutController.display)




module.exports =route









