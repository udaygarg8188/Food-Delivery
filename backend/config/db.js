import mongoose from "mongoose"

// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
//   }

export const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connected"));
} 
