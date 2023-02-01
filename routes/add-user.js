const express = require("express")
const router = express.Router()

router.get("/add",(req,res)=>{
   res.render("add-user-form",{title:"Add User"})
})


router.post('/add',(req,res)=>{
  const pg = require("pg")
  const pool = new pg.Pool({
    connectionString: "postgres://postgres:Liukangs240@localhost:5432/express_api"
  })

  let fetched_data = {}

  pool.connect((err,client,release)=>{
    if(err){
        console.log(err)
    }else{
        client.query('SELECT * FROM user_table WHERE email = $1;',['duah.marfochristian@gmail.com'],(err,result)=>{
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