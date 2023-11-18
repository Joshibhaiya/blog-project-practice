const CategoryModel = require('../../models/Category')
class CategoryController{
    static display = async (req,res) => {
        try {
            const data= await CategoryModel.find()
            // console.log(data)
            res.render('admin/category/display',{d:data})
        } catch (error) {
            console.log(error)
        }
    }
// category ko insert karnai kai lea ishka use kiya jaa hai
    static categoryinsert = async (req,res) => {
        try {
            // console.log('hrlo insert')
            // console.log(req.body)
            const result = new CategoryModel({
                cname:req.body.categoryname
            })
            await result.save()
            res.redirect('/admin/category/display') 
        } catch (error) {
            console.log(error)
        }
    }
    // category ko view karnai wala method
    static categoryview = async (req,res) => {
        try {
            const data = await CategoryModel.findById(req.params.id)
            // console.log(data)
            // console.log(req.params.id)
            res.render('admin/category/view',{d:data})
        } catch (error) {
            console.log(error)
        }
    }
    // category ko edit karnai kai lea
    static categoryedit = async (req,res) => {
        try {
            const data = await CategoryModel.findById(req.params.id)
            // console.log(req.params.id)
            // console.log(data) 
            res.render('admin/category/edit',{d:data})
        } catch (error) {
            console.log(error)
        }
    }
    // category ko update karnai kai lea ishka use kareger
    static categoryupdate = async (req,res) => {
        try {
            // console.log(req.body)
            const result = await CategoryModel.findByIdAndUpdate(req.params.id,{
                cname:req.body.categoryname
            })
            res.redirect('/admin/category/display')
        } catch (error) {
            console.log(error)
        }
    }

    // catefory ko deletee karnaikai laea ishka use kiya jat hai
    static categorydelete = async (req,res) => {
        try {
            const data = await CategoryModel.findByIdAndDelete(req.params.id)

            // console.log(req.body)
            res.redirect('/admin/category/display')
            
        } catch (error) {
            console.log(error)
        }
    }
}






module.exports = CategoryController