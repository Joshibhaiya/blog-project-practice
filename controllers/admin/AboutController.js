const AboutModel = require('../../models/about')
const AdminModel=require('../../models/about')
class AboutController{
    static display = async(req,res) =>{
        try {
            const result = await AboutModel.findOne()

            res.render('admin/about/display',{a:result})
        } catch (error) {
            console.log(error)
        }
    }
    static aboutEdit = async(req,res) =>{
        try {
            const result = await AboutModel.findById(req.params.id)


            res.render('admin/about/display',{e:edit})
        } catch (error) {
            console.log(error)
        }
    }
}




module.exports = AboutController