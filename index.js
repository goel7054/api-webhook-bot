const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  // 🔍 Log the full incoming webhook request from Watson Assistant
  console.log("Received webhook call:", JSON.stringify(req.body, null, 2));

  const intent = req.body.intent?.name || "";

  let responseText = "Sorry, I didn’t understand that.";

  if (intent === "Get_API_Details") {
    responseText = "This API supports GET, POST, and DELETE operations.";
  }

  // ✅ Return response in Watson's expected format
  res.json({
    output: {
      generic: [
        {
          response_type: "text",
          text: responseText
        }
      ]
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
