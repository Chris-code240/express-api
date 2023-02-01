 const express = require("express")
 const router = express.Router()

 router.get("/delete",(req,res)=>{
    res.send("Delete User")
 })


 router.post('/delete/:user_id',(req,res)=>{
    res.send(JSON.stringify({"message":`User with ID ${req.params.user_id} has been deleted!`,"sucess":true}))
 })

 module.exports = router