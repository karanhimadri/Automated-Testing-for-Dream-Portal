import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function classifyDream(dreamName) {
  const prompt = `Classify the dream "${dreamName}" as either "Good" or "Bad". Respond with just one word: Good or Bad.`;
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text
}

export { classifyDream };