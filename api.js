
const express = require("express")
const api = express()
const ejsLyaoutt = require("express-ejs-layouts")

const indexRouter = require("./routes/index-router")
const bodyParser = require("body-parser")
const verifyRouter = require("./routes/verify-user")
const deleteRouter = require("./routes/delete-router")
const addRouter = require("./routes/add-user")

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended:true}))
api.use(ejsLyaoutt)
api.use(express.static('public'))
api.set('layout','layouts/layout')
api.set('view engine','ejs')
api.set('views',__dirname + '/views')
// dotenv.config({path:'./.env'})

api.listen(process.env.PORT || 3000,()=>{console.log("API is running..")})

api.get("/",indexRouter)
api.get("/verify",verifyRouter)
api.post('/verify',verifyRouter)
api.get("/delete",deleteRouter)
api.post('/delete/:user_id',deleteRouter)
api.get("/add",addRouter)
api.post("/add",addRouter)

module.exports =  api