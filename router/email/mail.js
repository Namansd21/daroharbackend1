const router = require('express').Router();
const sendEmail = require('./mailfunction')
const otpstorage = require('./otpstorage')
const crypto = require('crypto');


function generateOTP() {
    return crypto.randomInt(100000,999999);
}

router.post('/otpcreation',(req,res)=>{
    console.log('sending email',req.body.email)
   const otp = generateOTP();
   otpstorage.set(req.body.email,otp);
   sendEmail('guptanamandream21sd@gmail.com',req.body.email,"Dear User Your One Time Password is " + otp,"otp-verification");
   res.send("email sent")
    
})

router.post('/verify-otp',(req,res)=>{
    console.log(req.body.email,req.body.otp)
   if(otpstorage.verify(req.body.email,req.body.otp))
    {
        console.log('verified');
        res.send(JSON.stringify({verified:true}))
    }
    else{  
        res.send(JSON.stringify({verified:false}))
    }
})

router.post('/sendmail', (req,res)=>{
    try{
       res.send(sendEmail(req.body.fromMail,req.body.toMail,req.body.content,req.body.subject))
    }
    catch(error){
        console.log(error,'error occured')
        res.send(error)
    }
})
module.exports = router;