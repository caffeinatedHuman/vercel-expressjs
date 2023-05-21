const express = require("express");
const path = require("path");

const app = express();

const rootRouter = require("./routes/index");

app.use(express.static("public"));

app.listen(process.env.PORT || 3000);

//routes/index.js
app.use("/", rootRouter);

// index.js
module.exports = app;
