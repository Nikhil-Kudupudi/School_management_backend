const express=require('express')
const router=express.Router();
const ObjectId=require('mongodb').ObjectId;
const login=require('./models/Login')

router.post('/addteacher',async (req,res)=>{
    const teacher=new  login(req.body);
    const result=await teacher.save();
    res.status(201).json(result);
    res.status(404).json("fail");
    res.send(`<h2> ${result} post successful</h2>`)
});


router.get('/login',async (req,res)=>{
    const result=await login.findOne({username: req.body.username,password:req.body.password});
    res.status(201).json("true");
    res.status(404).json(`<h2> Not Found</h2>`)
    res.status(500).json(`<center> <h1> Internal Server Error</h1></center>`)
   
});

module.exports=router;