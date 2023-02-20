import express from "express";
import cors from "cors";
import pkg from "body-parser";

import parseXml from "./utils/xmlParser.js";
import readCSVFile from "./utils/mpData.js";

const { json } = pkg;
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// This endpoint returns an object that includes an array of objects with MP data as its single value.
app.get("/xml", async (req, res) => {
  // mpData is an array of objects containing MP data parsed from the fetched TheyWorkForYou scraped XML
  let mpData = await parseXml();

  // mpPartyData is an array of objects containing MP party affiliation information
  let mpPartyData = readCSVFile("./data/mps.csv");

  // Function that combines the mpData objects with the party affiliation into the mpData array

  res.json({ data: mpData });
});

app.get("/mpdata", (req, res) => {
  let mpData = readCSVFile("./data/mps.csv");
  res.json({ data: mpData });
});

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server running on port ${port}`));
