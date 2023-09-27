const express = require('express')
const app =express() //call the method
const port=2000
const web =require('./routes/web')






//routing:2000(/==url)

app.set('view engine', 'ejs')


// html css link
app.use(express.static('public'))


// routing load
app.use('/',web)






// sever is creating for the runing the website
app.listen(port, () => {
    console.log(`server start localhost: ${port}`)
  })





