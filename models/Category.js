const mongoose = require('mongoose')

//schema define
const CategorySchema = new mongoose.Schema({
    cname:{
        type:String,
        required:true
    },
    

},{timestamps:true})

const BlogModel = mongoose.model('blog',BlogSchema)
module.exports = BlogModel