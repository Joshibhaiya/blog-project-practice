const mongoose = require('mongoose')

//schema define
const AboutSchema = new mongoose.Schema({
    about:{
        type:String,
        required:true
    },
    

},{timestamps:true})

const AboutModel = mongoose.model('about',AboutSchema)
module.exports = AboutModel