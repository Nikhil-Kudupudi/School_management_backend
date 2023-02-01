const mongoose=require('mongoose')
const { randomUUID}=require('crypto')
const Login= new mongoose.Schema({
    _id:
    {
        default: randomUUID,
        type: String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
},{collection:'Login'})

module.exports=mongoose.model('Login',Login);
