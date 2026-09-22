const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.json({
        message: "AI MERN Backend is running"
    });
});

app.post("/api/ask", async (req, res) => {

    try {

        const userMessage = req.body.message;

        if (!userMessage) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.6-luna",
            input: userMessage
        });
        
        res.json({
            reply: response.output_text
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Something went wrong"
        });
    }
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});