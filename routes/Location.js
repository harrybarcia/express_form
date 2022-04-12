const express=require("express");
const LocationController = require("../controllers/LocationController");
const router=express.Router();



// router.get("/", (req, res)=>{
//     res.send("User:Harry")
// })

router.post("/", LocationController.post)

module.exports=router;