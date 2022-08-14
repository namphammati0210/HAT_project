const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./src/routes/index");
const vehicleRouter = require("./src/routes/api/vehicle.route");
const eventMsgRouter = require("./src/routes/api/eventMsg.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/vehicle", vehicleRouter);
app.use("/api/eventmsg", eventMsgRouter);

module.exports = app;
