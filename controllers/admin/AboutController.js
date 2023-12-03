const AboutModel = require('../../models/about')
const AdminModel=require('../../models/about')
class AboutController{
    static display = async (req,res) => {
        try {
            const data= await AboutModel.find()
            // console.log(data)
            res.render('admin/about/display',{d:data})
        } catch (error) {
            console.log(error)
        }
    }


    static aboutinsert = async (req,res) => {
        try {
            // console.log('hrlo insert')
            // console.log(req.body)
            const result = new AboutModel({
                about:req.body.about
            })
            await result.save()
            res.redirect('/admin/about/display') 
        } catch (error) {
            console.log(error)
        }
    }

    // about edit kai lea
    static aboutedit = async (req,res) => {
        try {
            const data = await AboutModel.findById(req.params.id)
            // console.log(req.params.id)
            // console.log(data) 
            res.render('admin/about/edit',{d:data})
        } catch (error) {
            console.log(error)
        }
    }
    // about ko update karnai kai lea ishka use kareger
    static aboutupdate = async (req,res) => {
        try {
            // console.log(req.body)
            const result = await AboutModel.findByIdAndUpdate(req.params.id,{
                about:req.body.about
            })
            res.redirect('/admin/about/display')
        } catch (error) {
            console.log(error)
        }
    }
    static aboutdelete = async (req,res) => {
        try {
            const data = await AboutModel.findByIdAndDelete(req.params.id)

            // console.log(req.body)
            res.redirect('/admin/about/display')
            
        } catch (error) {
            console.log(error)
        }
    }
}




module.exports = AboutController