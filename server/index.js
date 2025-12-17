import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).send("Data received");
});

app.listen(PORT, () => console.log("Server started on port " + PORT));
