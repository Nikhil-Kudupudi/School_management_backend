const express=require('express')
const router=express.Router()
const app=express()
const PORT=9011
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.listen(PORT,()=>{
    console.log("connected to port 9011");
    
});

const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Nikhil:Nikhil%4001@springproductapi.zg4gxl0.mongodb.net/School?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
   
  });
  

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
  
  const data=require('./routes');
  
  app.use('/',data);
  