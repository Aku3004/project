import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js';

dotenv.config()

connectDB()
.then(()=>{

    app.on("error",(err)=>{
    console.log("ERROR :",err);
    throw err
    
 })
 
    app.listen(process.env.PORT,()=>{
            console.log(`server is running at port : ${process.env.PORT}`);
            
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!! ",err);
    
})




/*import express from 'express';
const app=express();

(async ()=>{
try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

 app.on("error",(err)=>{
    console.log("ERROR :",err);
    throw err
    
 })

 app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
    
 })
}
catch(err){
    console.log("ERROR: ",err);
    throw err
}
})(); */