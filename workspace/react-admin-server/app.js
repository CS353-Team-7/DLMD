const express = require('express');
const app = express();
app.use(express.json());
app.listen(5001,()=>{
    console.log('running server')
});
//MongoDB




//load router
const router = require("./router");

app.use(router);
app.use(express.static('public'));