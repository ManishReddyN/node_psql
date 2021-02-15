const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Up and Running" });
});

module.exports = router;
