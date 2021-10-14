const express = require('express')
const port = process.env.PORT || 4000
const connection = require('./model/db')
connection();
const user = require('./router/user')
const product = require('./router/product')
const cart = require('./router/cart')
const order = require('./router/order')
const payment = require('./router/stripe')
const cors = require('cors')
const app  = express()

app.use(express.json())
app.use(cors());
app.use('/',user)
app.use('/',product)
app.use('/',cart)
app.use('/',order)
app.use('/',payment)
app.listen(port,()=>{
    console.log(`server is running ${port}`)
})