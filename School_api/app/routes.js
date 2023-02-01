const express = require('express')
const router = express.Router();
const Student = require('./models/student');
const studentmarks = require('./models/studentmarks');
const Studentmarks = require('./models/studentmarks');

router.get('/', async (req, res) => {
    const result = await Student.find();
    return res.json(result);
})

router.post('/addStudent', async (req, res) => {
    const student = new Student(req.body);
    const newstudent = await student.save();

    res.status(201).json(newstudent);
})

//get students id,name,class
router.get('/classinfo/:classname', async (req, res) => {
    const classdetails = await Student.find({ classname: req.params.classname })
    res.status(201).json(classdetails);
    classdetails.forEach((detail) => {
        console.log(detail.studentname, detail._id, detail.classname);
    })
})

router.get('/checkstudent/:_id', async (req, res) => {
    const check = await studentmarks.findOne({ _id: req.params._id });
    return res.status(201).json(check);
})
//Marks
router.post('/addmarks', async (req, res) => {
    studentmarks.findOne({ _id: req.body._id }).then(val => {
        if (val) {
            //if the student exist,update the student
            studentmarks.findOneAndUpdate(
                { _id: req.body._id },
                { $set: req.body },
                { new: true }
            ).then(val => res.json(val));
        }
        else {
             new studentmarks(req.body).save().then(student => res.json(student));
        }

    });
    
   })


    


//get list of students with marks
router.get('/classmarks/:classname', async (req, res) => {
    const reslt = await Studentmarks.find({ classname: req.params.classname });
    return res.json(reslt);
})
module.exports = router;