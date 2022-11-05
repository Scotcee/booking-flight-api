import express from 'express';
import bodyParser from 'body-parser';
// const { json } = require("express");
// const flights = require("./controllers/flightController");
// const models = require("./models/Flight");
// const routes = require("./routes/flightRoute.js");
import flightRoutes from "./routes/flightRoute.js"
const app = express();

app.use(bodyParser.json());
app.use('/flights', flightRoutes);

app.get("/", (req, res)=> res.send('Hello to homePage')
);
 
const port = process.env.PORT || 3000;

app.listen(port, () =>  console.log(`Server is running on port ${port}`));
