const express = require('express')
const app =express() //call the method
const port=2000






//route
app.get('/', (req, res) => {
    res.send('Hello 123World!')
  })





// sever is creating for the runing the website
app.listen(port, () => {
    console.log(`server start localhost: ${port}`)
  })





