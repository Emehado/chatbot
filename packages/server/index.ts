import express from "express";
import type { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 3000;
const openaiKey = process.env.OPENAI_API_KEY;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
