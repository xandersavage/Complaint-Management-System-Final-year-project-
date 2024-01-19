const Path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express(); //UNPACK EXPRESS

require("./db/mongoose"); //CONNECT TO DB
app.use(cookieParser()); //READ COOKIES FROM CLIENT
const userRouter = require("./router/user");
const complaintRouter = require("./router/complaint");
const viewRouter = require("./router/view");

app.set("view engine", "pug"); //SPECIFY VIEW ENGINE
app.set("views", Path.join(__dirname, "views")); //SET PATH FOR VIEWS

app.use(cors());
app.use(express.json()); //PARSE INCOMING JSON DATA TO JS OBJECTS

app.use(express.static(Path.join(__dirname, "public"))); //SET PUBLIC PATH

app.use(viewRouter);
app.use(userRouter);
app.use(complaintRouter);

module.exports = app;
