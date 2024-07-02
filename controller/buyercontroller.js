const buyer = require('../models/buyer')

let checkifbuyerexist = async (emailid)=>{
   try{
      let response = await buyer.find({email:emailid})
      if(response.length ===0)
      {
         return false;
      }
      else{
        return true;
      }
   }
   catch(error){
    console.log(error);
    return new Error('an error occured ',error)
   }
}

let createbuyeremail = async (data)=>{

}
let createbuyergoogle = async (data)=>{

}

module.exports = {
    checkifbuyerexist,
    createbuyergoogle,
    createbuyeremail

}