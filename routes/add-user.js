const express = require("express")
const router = express.Router()
const pool = require("../database")
router.get("/add",(req,res)=>{
   res.render("add-user-form",{title:"Add User"})
})


router.post('/add',(req,res)=>{
  
  let fetched_data = {}

  pool.connect((err,client,release)=>{
    if(err){
        console.log(err)
    }else{
        client.query('SELECT * FROM user_table WHERE email = $1 AND password = $2 AND user_name = $3;',[req.body['email'],req.body['password'],req.body['user_name']],(err,result)=>{
            if(err){
                console.log(err)
            }else{
                if( !result.rows[0]){
                    client.query('insert into user_table (email,password,user_name) values ($1,$2,$3); ',[req.body.email,req.body.password,req.body.user_name],(err,result)=>{
                        if(err){
                            console.log(err)
                        }else{
                            res.send(JSON.stringify({"message":"User Added","success":true}))
                        }
                    })
                }else{
                    res.send(JSON.stringify({"message":"User Already Exists.","success":false}))
                }
            }
        })
    }
  })
})

module.exports = router