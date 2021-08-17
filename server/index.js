const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const greetings = require("./routers/greetings");
const pizzas = require("./routers/pizzas");

dotenv.config();

// Import can be here up ^^^^^
//  Instantiation
const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', console.log.bind(console, 'Successfully opened connection to Mongo!'));

// define middleware functions
const logging = (request, response, next) => {
  console.log(` ${request.method} ${request.url} ${Date.now()} `);
  next();
};

// using the middleware
app.use(express.json());
app.use(logging);

app.use(greetings);
app.use(pizzas);



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



// executing the express (this must be last)
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}`));

