import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import contactRouter from "./routes/contact.js";

//create an express app
const app = express();

//connect db
await mongoose.connect(process.env.MONGO_URI)

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle contact form submission
app.use(contactRouter);

//listen to incoming request on port:
const PORT = 4004;
app.listen(PORT, () => {
    console.log(`app is lsitening on port: ${PORT}`)
});
