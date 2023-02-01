const express = require('express');

const app = express();
const PORT = 9012;
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);

const mongodb=require('mongoose')
mongodb.connect("mongodb+srv://Nikhil:Nikhil%4001@springproductapi.zg4gxl0.mongodb.net/School?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
   
  });
  
const db = mongodb.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const data=require('./routes');

app.use('/',data);


