const express = require('express')
const app = express()
const mongoose = require('mongoose')


// set your username & password:-  'mongodb+srv://<username>:<password>@<cluster_name>.jqzujwt.mongodb.net/<dbname(optional)>?retryWrites=true&w=majority

mongoose.set('strictQuery', true);
mongoose.connect('#').then(() => console.log("MongoDB is connected")).catch((error) => console.log(error));


const cors = require('cors')
const bodyParser = require("body-parser");

// importing routes
const users = require('./routes/user')
const products = require('./routes/products')
// const categories = require('./routes/categories')

// defining cross origin access port 3000 and 5000
app.use(cors())
app.options('*',cors())


// MiddleWare
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({limit:'30mb'}))


// for images the url is : http://localhost:5000/images/1678294524811.jpeg
app.use('/images', express.static(__dirname + '/public/Products'));
console.log(__dirname + '/public/Products');


// using routes to make clear code
app.use(`/users`,users)
app.use(`/products`,products)



// checking app is responding or not
app.get('/',(req,res)=>{
    res.send("Hello from backend")
})


// app running at port 5000
app.listen((5000),()=>{
    console.log("listening at port 5000")
})