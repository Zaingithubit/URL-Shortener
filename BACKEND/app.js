import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongosse.config.js";
dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", (req, res) => {
  const url = req.body;
  console.log(url);
  res.send(nanoid(7));
});

app.listen(3001, () => {
  console.log("Server running on 3001 port ,http://localhost:30001");
});
