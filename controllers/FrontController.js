const BlogModel = require('../models/Blog')
const CategotyModel = require('../models/Category')
const AdminModel = require('../models/Admin')


const bcrypt = require('bcrypt')
class FrontController {

    static index = async (req, res) => {
        try {
            const blog = await BlogModel.find().sort({ _id: -1 }).limit(6)

            res.render('index', { b: blog })
        } catch (error) {
            console.log(error)
        }
    }

    static about = async (req, res) => {
        try {
            const about = await AdminModel.findOne()
            res.render('about',{a:about})
        } catch (error) {
            console.log(error)
        }
    }

    static blog = async (req, res) => {
        try {
            const blog = await BlogModel.find().sort({ _id: -1 })
            res.render('blog', { b: blog })
        } catch (error) {
            console.log(error)
        }
    }

    static bloglist = async (req, res) => {
        try {
            const n = req.params.name
            const bloglist = await BlogModel.find({ cname: n })
            res.render('bloglist', { d: bloglist })
        } catch (error) {
            console.log(error)
        }
    }

    static contact = async (req, res) => {
        try {
            res.render('contact')
        } catch (error) {
            console.log(error)
        }
    }

    static cyb = async (req, res) => {
        try {
            res.render('cyb',{message:req.flash('error')})
        } catch (error) {
            console.log(error)
        }
    }

    static Detail = async (req, res) => {
        try {
            const detail = await BlogModel.findById(req.params.id)
            const resentblog = await BlogModel.find().sort({ _id: -1 }).limit(6)
            const category = await CategotyModel.find().sort({ _id: -1 })
            res.render('detail', { d: detail, r: resentblog, c: category })
        } catch (error) {
            console.log(error)
        }
    }
    // static Login = async (req, res) => {
    //     try {
    //         res.render('login')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    static Contact = async (req, res) => {
        try {
            res.render('contact')
        } catch (error) {
            console.log(error)
        }
    }
    static registration = async (req, res) => {
        try {
            res.render('registration')
        } catch (error) {
            console.log(error)
        }
    }
    static admininsert = async (req, res) => {
        try {
            // console.log(req.body)
            const hashpassword = await bcrypt.hash(req.body.password,10)
            const result = await AdminModel({
                name: req.body.username,
                email: req.body.email,
                password:hashpassword
            })
            await result.save()
            res.redirect('/cyb')


        } catch (error) {
            console.log(error)
        }
    }
    static verifylogin = async (req, res) => {
        try {
            // console.log(req.body)
            const {email,password}=req.body
            if(email && password){
                const admin = await AdminModel.findOne({email:email})
                if(admin != null){
                    const ismatch = await bcrypt.compare(password,admin.password)
                    if(ismatch){
                        res.redirect("/admin/dashboard")
                    }else{
                        req.flash('error','Email or password is incorrect ')
                        res.redirect('/cyb')
                    }
                }
            }else{
                req.flash('error','all field are required')
                res.redirect('/cyb')
            }
        } catch (error) {
            console.log(error)
        }
    }
    static logout = async (req, res) => {
        try {
            res.redirect('/cyb')
        } catch (error) {
            console.log(error)
        }
    }






}

module.exports = FrontController