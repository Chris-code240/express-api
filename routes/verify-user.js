const express = require("express")
const router = express.Router()

router.get("/verify",(req,res)=>{
   
   res.render("verifyForm",{title:"Verify"})
   console.log("Verify ROuter")

})

router.post("/verify",(req,res)=>{
    const email =  req.body['email']
    const password = req.body['password']
    const re = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(re.test(email)){
   //   res.send(JSON.stringify({"message":"E-mail verified","success":true}))
   res.render("index",{title:"Homepage"})
    }else{
     res.send(JSON.stringify({"message":"Try a valid email","success":false}))
    }
    console.log("Verify ROuter")
 
 })


module.exports = router