import mongoose from "mongoose";

const Product = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    imageUrl: {type: String, require: true},
    availability: {type: Boolean, require: true},
});

export default mongoose.model("Product", Product);