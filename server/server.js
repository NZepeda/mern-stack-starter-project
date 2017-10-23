const fs = require("fs");
const path = require("path");
const express = require("express");
const router = require("./config/routes");

// Creat App //
const app = express();

app.use(express.static(path.join(__dirname, "../client")));
app.use(router);

module.exports = app;
