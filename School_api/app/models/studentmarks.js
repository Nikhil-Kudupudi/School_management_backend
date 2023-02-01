const mongoose = require('mongoose');
const {randomUUID}=require('crypto');
const Studentmarks = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        
    },
    Studentname: {
        type: String
    },
    classname: {
        type:String,
        required:true
    },
    telugu: {
        type: String,
        default: 0
    },
    english: {
        type: String,
        default: 0
    },
    maths: {
        type: String,
        default: 0
    }


},
{collection:'studentmarks'}
);

module.exports=mongoose.model('studentmarks',Studentmarks);