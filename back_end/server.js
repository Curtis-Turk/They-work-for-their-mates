import express from "express";
import cors from "cors";
import pkg from "body-parser";

import parseXml from "./utils/xmlParser.js";

const { json } = pkg;
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/xml", async (req, res) => {
  let mpData = await parseXml();
  res.json({ data: mpData });
});

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server running on port ${port}`));
