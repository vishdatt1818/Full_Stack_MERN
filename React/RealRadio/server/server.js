import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());


// -----------------------------------
// AUDIO FOLDER
// -----------------------------------

const audioFolder = path.join(
  process.cwd(),
  "public",
  "audio"
);


// Create folder if it doesn't exist

if (!fs.existsSync(audioFolder)) {
  fs.mkdirSync(audioFolder, {
    recursive: true
  });
}


// -----------------------------------
// MULTER STORAGE
// -----------------------------------

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, audioFolder);

  },

  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);

  }

});


const upload = multer({
  storage: storage
});


// -----------------------------------
// UPLOAD SONG
// -----------------------------------

app.post(
  "/api/songs/upload",
  upload.single("song"),

  (req, res) => {

    console.log("Song:", req.file);
    console.log("Title:", req.body.title);


    if (!req.file) {

      return res.status(400).json({
        message: "Please select a song"
      });

    }


    res.json({

      message: "Song uploaded successfully",

      title: req.body.title,

      fileName: req.file.filename,

      url: `/audio/${req.file.filename}`

    });

  }
);


// -----------------------------------
// SERVE AUDIO
// -----------------------------------

app.use(
  "/audio",
  express.static(audioFolder)
);


// -----------------------------------
// SERVER
// -----------------------------------

app.listen(5000, () => {

  console.log(
    "Server running on http://localhost:5000"
  );

});