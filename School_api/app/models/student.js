const mongoose=require('mongoose')

const Student=new mongoose.Schema({
    id:{
        type:String
    },
    classname :{
        type:String
    },
    studentname:{
        type:String
    },
    phone:{
        type:String
    },
    medium:{
        type:String
    },
    parentname:{
        type:String
    }


},{collection:'Student'})

module.exports=mongoose.model('Student',Student);