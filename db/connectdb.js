const mongoose =  require('mongoose')

localurl = "mongodb://127.0.0.1:27017/blogproject"

const connectDB =()=>{
    return mongoose.connect(localurl)
    .then(()=>{
        console.log('connected successfully')
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports=connectDB