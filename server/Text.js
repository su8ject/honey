import mongoose from "mongoose";

const Text = new mongoose.Schema({
    type: { type: String, required: true },
    text: { type: String, required: true },
    header: { type: String, required: true },
});

export default mongoose.model("Text", Text);