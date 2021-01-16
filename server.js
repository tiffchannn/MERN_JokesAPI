const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const routes = require("./server/routes/joke.routes");
routes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}!`));
