const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const intent = req.body.intents?.[0]?.intent || "unknown";

  let reply = "Sorry, I didn’t understand that.";
  if (intent === "Get_API_Details") {
    reply = "This API supports GET, POST, and DELETE operations.";
  }

  res.json({
    output: {
      generic: [
        {
          response_type: "text",
          text: reply
        }
      ]
    }
  });
});

app.get("/", (req, res) => {
  res.send("Webhook server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
