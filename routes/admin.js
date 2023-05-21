var express = require("express");

const router = express.Router();

router.get("/admin", (req, res) => {
  res.sendFile("admin.html", { root: path.join(__dirname, "public") });
});

module.exports = router;