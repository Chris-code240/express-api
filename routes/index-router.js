const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    console.log("Home Page")
     res.render("verifyForm")
})

module.exports = router