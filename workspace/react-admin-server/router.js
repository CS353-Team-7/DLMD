//router

const express = require('express');
const router = express.Router();


console.log('HiR');

//All
router.post('/',(req,res)=>{
    console.log('Hi');
})

//Login
router.post('/Login',(req,res)=>{
    console.log('Login');
})

module.exports = router;