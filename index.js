const express = require("express");

const app = express();

const adminRouter = require("./routes/admin");
const rootRouter = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static("public"));

//routes/index.js
app.use("/", rootRouter);
app.use("/admin", adminRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}!`));

module.exports = app;
