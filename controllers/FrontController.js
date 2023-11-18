const BlogModel = require('../models/Blog')
const CategotyModel = require('../models/Category')

class FrontController{

    static index =async(req,res) =>{
        try{
            const blog = await BlogModel.find().sort({_id:-1}).limit(6)
            
            res.render('index',{b:blog})
        } catch (error){
            console.log(error)
        }
    }

    static about =async(req,res) =>{
        try{
            res.render('about')
        } catch (error){
            console.log(error)
        }
    }

    static blog =async(req,res) =>{
        try{
            res.render('blog')
        } catch (error){
            console.log(error)
        }
    }

    static contact =async(req,res) =>{
        try{
            res.render('contact')
        } catch (error){
            console.log(error)
        }
    }

    static cyb =async(req,res) =>{
        try{
            res.render('cyb')
        } catch (error){
            console.log(error)
        }
    }

    static Detail =async(req,res) =>{
        try{
            const detail = await BlogModel.findById(req.params.id)
            res.render('detail',{d:detail})
        } catch (error){
            console.log(error)
        }
    }
    static Login =async(req,res) =>{
        try{
            res.render('login')
        } catch (error){
            console.log(error)
        }
    }
    static Contact =async(req,res) =>{
        try{
            res.render('contact')
        } catch (error){
            console.log(error)
        }
    }





}

module.exports =FrontController