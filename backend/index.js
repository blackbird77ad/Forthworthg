//Import packages
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
//import routers

//connect mongodb Database
await mongoose.connect(process.env.MONGO_URI)

//create an express app
const app = express();

//use middlesware
app.use(cors());

//Use the routes 

//listen to incoming request on port:
const PORT = 4004;
app.listen(PORT, ()=>{
    console.log(`app is lsitening on port: ${PORT}`)
});
