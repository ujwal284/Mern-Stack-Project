import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});

const Car = mongoose.model("Car", carSchema);

export default Car;