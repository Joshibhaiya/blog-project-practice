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
}






module.exports = CategoryController