import express from 'express';
import mongoose from 'mongoose';
import {Student} from './StudentModel.js';


const api=express();

api.get('/studentlist',async(request,response)=>{
     
    try{
        const students=await Student.find();
        response.send({students:students});
        
    }catch(error)
        {
            response.send("Something went wrong"); 
        }
})
api.use(express.json());

const connectDB = async() =>{
    try{
         await  mongoose.connect('mongodb://127.0.0.1:27017/placementportal');
        console.log("Database connected to placementportal");
    }catch(error)
        {
            console.log(error);
        }
   
}





api.post('/register',async(request,response)=>{
    try{
    var  reqdata= request.body;
    const studentdata= new Student(reqdata);
        await studentdata.save();
        console.log(reqdata);
    response.send("Welcome to post resgister");
        
    }catch(error)
        {
            console.log(error);
        }
})
api.listen(1649,()=>{
    console.log("server started on port:1649");
    connectDB();
})