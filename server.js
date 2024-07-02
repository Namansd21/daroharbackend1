const express = require('express')
const fs = require('fs')
const path = require('path')
const helmet = require('helmet')
const app = express();
const https = require('https')
const cors = require('cors')
const auth = require('./router/auth/auth')
const email = require('./router/email/mail')
const mongoose = require('mongoose')
const product = require('./router/product')

// builtin middlewares
app.use(helmet())
app.use(cors("*"))
// app.use(express.static(path.join(__dirname,'..','public')))      // add path accordingly 
app.use(express.json())
app.use(express.urlencoded({extended:false}))




//cookies



app.use('/product',product)
app.use('/email',email)
app.use('/auth',auth)
app.get('/',(req,res)=>{
    console.log('request recieved')
    res.send('hello')
})

// starting server and makind database connection
async function serverstart(){
    await mongoose.connect("mongodb+srv://user1:dummy@cluster0.yxrhmgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log('database connected...')
    https.createServer({
        key:fs.readFileSync('./key.pem'),
        cert:fs.readFileSync('./cert.pem')
    },app).listen(3000,()=>{
        console.log('server is listening....')
    })
    
}

serverstart();
  