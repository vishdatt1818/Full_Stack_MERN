import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GENAI_API_KEY});

// const interaction = await ai.interactions.create({
//   model: "gemini-3.6-flash",
//   input: "Explain how AI works in a few words",
// });

// console.log(interaction.output_text);

async function generateAIResponse(prompt) {
  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      input: prompt,
    });
    return interaction.output_text;
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw error;
  }
}

module.exports = {
  generateAIResponse,
};