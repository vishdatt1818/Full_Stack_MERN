import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const audioFolder = path.join(
  __dirname,
  "public",
  "audio"
);

if (!fs.existsSync(audioFolder)) {
  fs.mkdirSync(audioFolder, {
    recursive: true,
  });
}

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    console.log("Saving to:", audioFolder);
    cb(null, audioFolder);
  },

  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() + "-" + file.originalname;

    console.log("File name:", uniqueName);

    cb(null, uniqueName);
  },

});

const upload = multer({
  storage,
});


// Upload song
router.post(
  "/upload",
  upload.single("song"),
  (req, res) => {

    console.log("UPLOAD REQUEST RECEIVED");

    console.log("Title:", req.body.title);
    console.log("File:", req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "Please select a song",
      });
    }

    res.json({
      message: "Song uploaded successfully",
      title: req.body.title,
      fileName: req.file.filename,
      url:
        `http://192.168.29.46:5000/audio/` +
        encodeURIComponent(req.file.filename),
    });
  }
);


// Get songs
router.get("/", (req, res) => {

  console.log("GET /api/songs");

  fs.readdir(audioFolder, (err, files) => {

    if (err) {

      console.error(
        "Directory error:",
        err
      );

      return res.status(500).json({
        message: "Unable to scan directory",
        error: err.message,
      });
    }

    const validExtensions = [
      ".mp3",
      ".wav",
      ".ogg",
      ".m4a",
    ];

    const audioFiles = files.filter((file) =>
      validExtensions.includes(
        path.extname(file).toLowerCase()
      )
    );

    const playlist = audioFiles.map(
      (file, index) => {

        const nameWithoutExt =
          path.parse(file).name;

        return {
          id: index + 1,

          title:
            nameWithoutExt,

          artist:
            "Unknown Artist",

          src:
            `http://192.168.29.46:5000/audio/` +
            encodeURIComponent(file),

          art:
            "http://192.168.29.46:5000/images/default-art.jpg",
        };
      }
    );

    res.json(playlist);
  });
});


export default router;