const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/api-routes");
const routes = require("./routes/html-routes");


const PORT = process.env.PORT | 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout-tracker";

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false });

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});