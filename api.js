const { application } = require("express")
const express = require("express")
const api = express()


application.listen(process.env.PORT || 3000,()=>{console.log("API is running..")})