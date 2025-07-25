
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const userInput = req.body.input || "No input received";
  const response = {
    response: `You said: ${userInput}`
  };
  res.json(response);
});

app.get("/", (req, res) => {
  res.send("API Webhook Bot is running.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
