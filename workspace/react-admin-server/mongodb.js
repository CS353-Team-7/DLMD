//load mongodb
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url= "mongodb://127.0.0.1:27017";

MongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err)
    {
        console.log("connect db erro"+err);
    }
    else
    {
        var users = client.db("DLMD");
        console.log("success");
        var data = [{"username":"usernameTest",
        "password":"passwordTest",
        "email":"email@Test.com"}]; 
        MongodbInsert(users,"users",data);
    }
})



function MongodbInsert(dbase,collectionName,data)
{
   
    dbase.collection(collectionName).insertMany(data,(err,result)=>{
        if(err)
        {
            console.log("insert erro"+err);
        }else{
            console.log("insert success");
            console.log(data)
        }
    })
}


