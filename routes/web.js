const express = require('express')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const BlogControoler = require('../controllers/admin/BlogController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const AboutController = require('../controllers/admin/AboutController')
const ContactController = require('../controllers/admin/ContactController')
const route = express.Router()



// rouute (url)

route.get('/',FrontController.index)//static method
route.get('/about',FrontController.about)//static method
route.get('/contact',FrontController.contact)//static method
route.get('/blog',FrontController.blog)//static method
route.get('/cyb',FrontController.cyb)//static method
route.get('/detail/:id',FrontController.Detail)//static method
route.get('/bloglist/:name',FrontController.bloglist)
route.get('/registration',FrontController.registration)
route.post('/admininsert',FrontController.admininsert)
route.post('/verifylogin',FrontController.verifylogin)
route.get('/logout',FrontController.logout)




// admin controller
route.get('/admin/dashboard',AdminController.dashboard)

// admin blog controoler

route.get('/admin/blog/display',BlogController.display)
route.post('/bloginsert',BlogController.bloginsert)
route.get('/blogview/:id',BlogController.blogview)
route.get('/blogEdit/:id',BlogController.blogedit)
route.post('/blogupdate/:id',BlogController.blogUpdate)
route.get('/blogDelete/:id',BlogController.blogdelete)


// category controller
route.get('/admin/category/display',CategoryController.display)
route.post('/categoryinsert',CategoryController.categoryinsert)
route.get('/categoryview/:id',CategoryController.categoryview)
route.get('/categoryEdit/:id',CategoryController.categoryedit)
route.post('/categoryupdate/:id',CategoryController.categoryupdate)
route.get('/categorydelete/:id',CategoryController.categorydelete)


// about controller
route.get('/admin/about/display',AboutController.display)
route.post('/aboutinsert',AboutController.aboutinsert)
route.get('/aboutedit/:id',AboutController.aboutedit)
route.post('/aboutupdate/:id',AboutController.aboutupdate)
route.get('/aboutdelete/:id',AboutController.aboutdelete)

// Contact controller 
route.post('/contactinsert',ContactController.contactinsert)
route.get('/admin/contact/display',ContactController.contactdisplay)







module.exports =route









