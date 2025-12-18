import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./Product.js";

const PORT = 5000;
const DB_URL = "mongodb+srv://krivizyukandrei_db_user:uKmN1XVjDTwqaFv1@cluster0.932gsdh.mongodb.net/?appName=Cluster0";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
 /*
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});
*/

app.post("/", async (req, res) => { 
  const {name, description, prise, imageIrl, availability} = req.body;
  const product = await Product.create({name, description, prise, imageIrl, availability});
  res.status(200).json(product);
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (e) {
    console.log(e);
  }
};

startApp();