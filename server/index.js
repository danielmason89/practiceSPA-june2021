const express = require("express");


// Import can be here up ^^^^^
//  Instantiation
const app = express();

// Configuring express instance
app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.route("/")
   .get((request, response) => {
response.send(JSON.stringify({ message: "No GET routes on route URI" }), 404);
   })
   .post((request, response) => {
    response.send(JSON.stringify({ message: "No POST routes on route URI" }), 404);
       })
   ;

   app
  .route("/greet/:name")
  .get((request, response) => {
    const name = request.params.name;
    response.status(418).json({ message: `Hello ${name}` });
  });

// executing the express (this must be last)
app.listen(4040, () => console.log("Listening on port 4040"));
