const express = require('express')
const app =express() //call the method
const port=2000
const web =require('./routes/web')
const connectDB = require('./db/connectdb')
// image upload code for uploading
const fileUpload = require("express-fileupload");
app.use(fileUpload({useTempFiles:true}));

// message show karanai kai lea
let session = require('express-session');
let flash = require('connect-flash');
app.use(session({
  secret:'secret',
  cookie:{maxAge:600000},
  resave:false,
  saveUninitialized:false,
}));
app.use(flash());









// data base connection

connectDB()



//routing:2000(/==url)

app.set('view engine', 'ejs')
// data ko get karnai kai lea
app.use(express.urlencoded({extended:false}))


// html css link
app.use(express.static('public'))


// routing load
app.use('/',web)






// sever is creating for the runing the website
app.listen(port, () => {
    console.log(`server start localhost: ${port}`)
  })





