import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import carRoute from './route/car.route.js';
import userRoute from "./route/user.route.js";




const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
    .connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

//defining routes
app.use("/car", carRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
