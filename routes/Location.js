const express=require("express");
const LocationController = require("../controllers/LocationController");
const router=express.Router();


router.post("/", LocationController.post)

module.exports=router;