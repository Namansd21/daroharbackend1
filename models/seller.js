const mongoose = require('mongoose');

let seller = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mailverified:{
        type:Boolean,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    upiid:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    addedproducts:{
       type:Array[String],
       default:[]
    },
    balance:{
        type:String,
        Default:'0'
    },
    sales:{
        type:Object,
        default:{}  
    }

})

module.exports = mongoose.Model('seller',seller);