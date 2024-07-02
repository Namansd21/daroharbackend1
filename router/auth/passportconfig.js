const passport = require('passport')
const googlestrategy = require('passport-google-oauth20')
const localstrategy = require('passport-local')
const cookies = require('cookie-session')

// googlestrategy config
passport.use(new googlestrategy({
    callbackURL:'/auth/google/callback',
    clientID:"389664460247-4jmd1i1tk9unu8mdrne0th0dbonrir7n.apps.googleusercontent.com",
    clientSecret:"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",
},async (acessToken,refreshToken,profile,done)=>{
//    profile_controller.findorcreateone({id:profile.id,provider:'google'},profile)
   done(null,profile)
   
}))


//local strategy
passport.use(new localstrategy({
    usernameField:"Email",
    passwordField:"Password",
    passReqToCallback: true
  },async (req,Email,Password,done)=>{
    //   if(req.body.Name)
    //     {
    //        let Email = req.body.Email;
    //        if(await profile_controller.isUser_already_Exist({Email:Email})){
    //           console.log('account already exist with same id')
    //           done(null,false)
    //        }
    //        else{
    //           let pass = await bcrypt.hash(req.body.Password,10)
    //          await profile_controller.enter_a_new_user(await profile_controller.create_user({Name:req.body.Name,Email:req.body.Email,password:pass}))
    //          let user = await profile_controller.filter({Email:req.body.Email})[0];
    //          done(null,user)
    //        }
    //     }
    //     else{
    //        let Email = req.body.Email;
    //        if(await profile_controller.isUser_already_Exist({Email:Email})){
    //           let user = (await profile_controller.filter({Email:Email}))[0];
    //           await bcrypt.compare(req.body.Password,user.password,(err,res)=>{
    //              if(err){
    //                 done(null,false)
    //              }
    //              if(res)
    //               {
    //                   done(null,user)
    //               }  
    //               else{
    //                 done(null,false)
    //               }
    //           })
    //        }
    //        else{
    //           done(null,false)
    //        }
    //     }

    done(null,"")

  }))