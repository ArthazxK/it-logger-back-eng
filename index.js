const express = require("express");
const connectDB = require("./config/db");
const Joi = require("joi");

const logs = require("./routes/logs");
const techs = require("./routes/techs");

const app = express();

connectDB();

app.use(express.json());
Joi.objectId = require("joi-objectid")(Joi);

app.use("/api/logs", logs);
app.use("/api/techs", techs);

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));
