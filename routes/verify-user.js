const express = require("express")
const router = express.Router()
const pool = require("../database")
router.get("/verify",(req,res)=>{
   
   res.render("verifyForm",{title:"Verify"})
   console.log("Verify ROuter")

})

router.post("/verify",(req,res)=>{
    const email =  req.body['email']
    const password = req.body['password']
    const re = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(re.test(email)){
      pool.connect((err,client,release)=>{
         if(err){
            res.render("errors/500",{title:"500"})
         }else{
            client.query("SELECT * FROM user_table WHERE email = $1 AND password = $2;",[email,password],(error,result)=>{
               if(error){
                  res.render("errors/500",{title:"500"})
               }else{
                  if(result.rows.length < 1){
                     res.render('errors/404',{title:"404"})
                  }else{
                     res.render("index",{title:"Homepage"})
                  }
               }
            })
         }
      })
   // res.render("index",{title:"Homepage"})


    }else{
     res.render('errors/500',{title:"500"})
    }
    console.log("Verify ROuter")
 
 })


module.exports = router