app.post('/webhook', (req, res) => {
  const userQuery = req.body.input?.text?.toLowerCase() || "";

  let responseText = "Sorry, I couldn't find the API you're asking for.";

  if (userQuery.includes("/users")) {
    responseText = "The API `GET /users` retrieves all registered users from the system. It requires admin privileges.";
  } else if (userQuery.includes("createuser")) {
    responseText = "The `POST /createUser` API creates a new user. Required fields: name, email, and password.";
  }

  return res.json({
    output: {
      generic: [
        {
          response_type: "text",
          text: responseText,
        }
      ]
    }
  });
});
