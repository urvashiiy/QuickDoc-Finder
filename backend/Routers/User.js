const express = require('express');
const router = express.Router();
const Model = require('../Models/User')

router.post('/add',(req,res) =>{
    console.log(req.body);
    //storing data to mongodb
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)  //statuscode:500 show internal err
    });

})
router.post('/authenticate', (req,res)=> {
    Model.findOne(req.body)
    .then((result)=> {
        if(result)res.json(result);
        else res.status(400).json({message: 'login failed'});
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});
router.post('/getall', (req,res)=> {
    Model.find({})
    .then((result)=> {
       res.json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});


module.exports = router