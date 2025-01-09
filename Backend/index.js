import express from "express";
import cors from "cors";
import { getResultFromAI } from "./api/Langflow.api.js";
import { getAnalyticsDataFromDB } from "./api/Database.api.js";

const app = express();

app.use(cors());

import 'dotenv/config'



app.get("/analyze-post", async (req, res) => {
  const prompt = req.query.prompt;
  try {
    const response = await getResultFromAI(prompt);
    res.status(200).json(response)
  } catch (error) {
    res.status(402).json({error: error.message})
  }
});

app.get("/post-stats", async (req, res) => {
  try {
    const dbResponse = await getAnalyticsDataFromDB()
    res.status(200).json(dbResponse);
  } catch (error) {
    res.status(402).json({ error: error.message });
  }
});



export default app