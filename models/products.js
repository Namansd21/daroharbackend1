const mongoose = require('mongoose')

let product = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    images:{
       type:Array[String],
       default :[]
    },
    price:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    sellerid:{
        type:String,
        required:true,
    },
    selleraddress:{
        type:String,
        required:true,
    },

})

module.exports = mongoose.Model('product',product)