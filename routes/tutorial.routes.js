const tutorials = require("../controllers/tutorial.controller");
const express = require("express");
const router = express.Router();

router.post("/create", tutorials.create);

router.get("/get/:id", tutorials.findTutorialById);
module.exports = router;
