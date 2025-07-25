const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const input = req.body.input;
    console.log("Received input:", input);

    // Mock API response
    const responseText = `The API '${input}' can be used by sending a GET request to https://api.example.com/${input}`;

    res.json({ output: responseText });
});

app.get('/', (req, res) => res.send("API Webhook is running"));
app.listen(8080, () => console.log("Server started on port 8080"));
