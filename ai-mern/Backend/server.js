import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Knowledge Base
const documents = [
  "Acme Corp refund policy: Full refund within 30 days for unused hardware. Digital downloads non-refundable after 48 hours.",
  "Acme Corp tech support hours: Monday through Friday from 8:00 AM to 6:00 PM EST.",
  "Acme Widget Pro specs: 5000mAh battery, IP68 water resistance, 256GB storage."
];

let vectorStore = [];

function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0, normA = 0, normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Generate embeddings for documents at startup
async function initStore() {
  try {
    vectorStore = []; // Reset store
    for (const text of documents) {
      const res = await ai.models.embedContent({
        model: "text-embedding-004",
        contents: text,
      });
      
      // Extract values dynamically
      const values = res.embedding?.values || res.embeddings?.[0]?.values;
      if (!values) throw new Error("Could not extract embedding values");

      vectorStore.push({ text, embedding: values });
    }
    console.log("✅ Vector store indexed successfully!");
  } catch (error) {
    console.error("❌ Vector store initialization failed:", error.message);
  }
}

app.post("/api/query", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Missing 'question' in request body" });
    }

    // 1. Embed user query
    const queryEmbedRes = await ai.models.embedContent({
      model: "text-embedding-004",
      contents: question,
    });
    
    const queryVector = queryEmbedRes.embedding?.values || queryEmbedRes.embeddings?.[0]?.values;

    // 2. Calculate similarity
    const scoredDocs = vectorStore.map(doc => ({
      text: doc.text,
      score: cosineSimilarity(queryVector, doc.embedding)
    }));

    scoredDocs.sort((a, b) => b.score - a.score);
    const topContext = scoredDocs[0].text;

    // 3. Generate answer
    const prompt = `Answer the question based ONLY on the context provided below. If you cannot answer it from the context, state "I do not have enough information."\n\nContext:\n${topContext}\n\nQuestion: ${question}`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      question,
      answer: response.text,
      matchedContext: topContext
    });
  } catch (err) {
    console.error("Query error:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  await initStore();
});