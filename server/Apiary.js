import mongoose from "mongoose";

const Apiary = new mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

export default mongoose.model("Apiary", Apiary);