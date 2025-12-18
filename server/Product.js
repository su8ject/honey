import mongoose from "mongoose";

const Product = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, require: true},
    prise: {type: Number, require: true},
    imageUrl: {type: String, require: true},
    availability: {type: Boolean, require: true},
});

export default mongoose.model("Product", Product);