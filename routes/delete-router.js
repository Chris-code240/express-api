 const express = require("express")
 const router = express.Router()

 router.get("/delete",(req,res)=>{
    res.send("Delete User\nList of all users")
 })


 router.post('/delete/',(req,res)=>{

   const pg = require("pg")
   const pool = require("../database")

   pool.connect((err,client,release)=>{
      if(err){
         res.render("errors/500")
      }else{
         client.query('DELETE FROM user_table WHERE id = $1',[req.body['id']],(error,result)=>{
            if(error){
               res.render("errors/500")
            }else{
               res.send(JSON.stringify({"message":`User with ID ${req.params.user_id} has been deleted!`,"sucess":true}))
            }
         })
      }
   })

    
 })

 module.exports = router