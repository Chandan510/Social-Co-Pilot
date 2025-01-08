import express from "express";
import cors from "cors";
import { getResultFromAI } from "./api/Langflow.api.js";
import { getAnalyticsDataFromDB } from "./api/Database.api.js";

const app = express();

app.use(cors());

import 'dotenv/config'

const PORT = process.env.VITE_PORT || 3000;

app.get("/analyze-post", async (req, res) => {
  const prompt = req.query.prompt;
  try {
    const response = await getResultFromAI(prompt);
    console.log(response);
    res.status(200).json(response)
  } catch (error) {
    console.log("Error on try of api fetching ", error.message);
    // res.status(402).json({ error: error.message });
  }
});

app.get("/post-stats", async (req, res) => {
  try {
    const dbResponse = await getAnalyticsDataFromDB()
    console.log("From post-stats ", dbResponse)
    res.status(200).json(dbResponse);
  } catch (error) {
    console.log(error.message);
    res.status(402).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("Server running at ", PORT);
});

export default app