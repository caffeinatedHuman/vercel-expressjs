const express = require("express");
const path = require('path');

const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT || 3000);

console.log("Log: path:", path);
//index.js
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

// index.js
module.exports = app;
