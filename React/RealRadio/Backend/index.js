import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import songRoutes from "./routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicFolder = path.join(__dirname, "public");
const audioFolder = path.join(publicFolder, "audio");
const imageFolder = path.join(publicFolder, "images");

if (!fs.existsSync(audioFolder)) {
  fs.mkdirSync(audioFolder, { recursive: true });
}

if (!fs.existsSync(imageFolder)) {
  fs.mkdirSync(imageFolder, { recursive: true });
}

app.use(cors());
app.use(express.json());

app.use("/audio", express.static(audioFolder));
app.use("/images", express.static(imageFolder));



app.get("/", (req, res) => {
  res.send("Backend server is running!");
});


app.use("/api/songs", songRoutes);

app.listen(5000,"0.0.0.0", () => {
  console.log("Server running on http://192.168.29.46:5000");
});