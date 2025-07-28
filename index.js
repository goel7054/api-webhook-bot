const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Webhook server is running!');
});

app.post('/webhook', async (req, res) => {
  console.log("✅ Incoming webhook request body:", JSON.stringify(req.body, null, 2));

  try {
    const intent = req.body.intent?.displayName;

    if (intent === 'Get_API_Details') {
      const response = {
        output: {
          generic: [
            {
              response_type: "text",
              text: "Here are the details of your API:\n- Name: Weather API\n- Version: v1.0\n- Status: Active"
            }
          ]
        }
      };
      console.log("✅ Responding with API details");
      return res.json(response);
    } else {
      const fallback = {
        output: {
          generic: [
            {
              response_type: "text",
              text: "❗ Sorry, I couldn't understand your intent."
            }
          ]
        }
      };
      console.log("⚠️ Unknown intent:", intent);
      return res.json(fallback);
    }
  } catch (error) {
    console.error("❌ Error processing webhook:", error);
    return res.status(500).json({
      output: {
        generic: [
          {
            response_type: "text",
            text: "⚠️ An error occurred while processing your request."
          }
        ]
      }
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Webhook server is listening on port ${port}`);
});
