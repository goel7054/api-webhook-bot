const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const intent = req.body.intent?.name;

  let responseText = "Sorry, I didn’t understand that.";

  if (intent === "Get_API_Details") {
    responseText = "This API supports GET, POST, and DELETE operations.";
  }

  const watsonResponse = {
    output: {
      generic: [
        {
          response_type: "text",
          text: responseText,
        },
      ],
    },
  };

  res.status(200).json(watsonResponse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Webhook server is running on port ${port}`);
});
