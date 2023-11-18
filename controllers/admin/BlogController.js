const CategoryModel = require('../../models/Category')
const BlogModel = require('../../models/Blog')
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dhe2ezvkn',
    api_key: '829226325625528',
    api_secret: 'U9m3_3Z0wRv4Lm3NJ5cnrZ1ibOA'
});
class BlogController {
    static display = async (req, res) => {
        try {
            const blogs = await BlogModel.find()
            const category = await CategoryModel.find()
            res.render('admin/blog/display', { c: category, b: blogs })
        } catch (error) {

            console.log(error)
        }
    }

    // blog ko insert karnai kai lea
    static bloginsert = async (req, res) => {
        try {
            // console.log(req.body)
            // console.log('hello insert')
            // console.log(req.files.image)
            const file = req.files.image
            // image upload cloudinary
            const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: "blog practice image"
            })
            // console.log(imageupload)
            const result = new BlogModel({
                cname: req.body.category,
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: imageupload.public_id,
                    url: imageupload.secure_url
                }
            })
            await result.save()
            res.redirect('admin/blog/display')

        } catch (error) {
            console.log(error)
        }
    }
    // for View the blog in project
    static blogview = async (req, res) => {
        try {
            const data = await BlogModel.findById(req.params.id)
            // console.log(data)
            // console.log(req.params.id)
            res.render('admin/blog/view', { d: data })
        } catch (error) {
            console.log(error)
        }
    }

    // for delete the blog we use the delete method
    static blogedit = async (req, res) => {
        try {
            const data = await BlogModel.findById(req.params.id)
            // console.log(data)
            // console.log(req.params.id)
            res.render('admin/blog/edit', { d: data })
        } catch (error) {
            console.log(error)
        }
    }
    // for update the blog in blog project
    static blogUpdate = async (req, res) => {
        try {
            // console.log(req.body)
            // console.log(req.params.id)
            // console.log(req.files.image)
            if (req.files) {
                const blog = await BlogModel.findById(req.params.id)
                const imageid = blog.image.public_id
                // console.log(imageid)
                await cloudinary.uploader.destroy(imageid) //image delete code hai
                const file = req.files.image
                // image upload cloudinary
                const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
                    folder: "blog practice image"
                })
                var data = {
                    cname: req.body.category,
                    title: req.body.title,
                    description: req.body.description,
                    image: {
                        public_id: imageupload.public_id,
                        url: imageupload.secure_url
                    }
                }

            }
            else {
                var data = {
                    cname: req.body.category,
                    title: req.body.title,
                    description: req.body.description,
                }
            }
            const update = await BlogModel.findByIdAndUpdate(req.params.id, data)
            // await update.save()
            res.redirect('/admin/blog/display')

        } catch (error) {
            console.log(error)
        }
    }
    // delete karnai kai lea

    static blogdelete = async (req, res) => {
        try {
            const blog = await BlogModel.findById(req.params.id)
            const imageid = blog.image.public_id
            // console.log(imageid)
            await cloudinary.uploader.destroy(imageid) //image delete code hai
            const data = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/blog/display')
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = BlogController