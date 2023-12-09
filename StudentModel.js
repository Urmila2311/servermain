import {Schema} from 'mongoose';
import mongoose from 'mongoose';



const studentschema=new Schema({
    name:String,
    prn:String,
    email:String,
    password:String,
    year:String,
    centre:String,
    cgpa:Number,
    
    
});

export const Student = mongoose.model("student",studentschema); 