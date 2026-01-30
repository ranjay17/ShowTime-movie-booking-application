import { GoogleGenAI } from "@google/genai";
import { Api_key } from "./constant";

const geminiAi = new GoogleGenAI({
  apiKey: Api_key,
});

export default geminiAi;
