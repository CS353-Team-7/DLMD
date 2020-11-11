const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url= "mongodb://127.0.0.1:27017";


MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
    if(err)
    {
        console.log("connect db erro"+err);
    }
    else
    {
        console.log("success");
        var dbase = db.db("DLMD");
        dbase.createCollection('users', function (err, res) {
            if (err) throw err;
            console.log("Collection success!");
            db.close();
        });
        
    }
})

