const tutorials = require("../controllers/tutorial.controller");
const express = require("express");
const router = express.Router();

router.post("/create", tutorials.create);
router.get("/get/all", tutorials.findAllTutorials);
router.get("/get/published", tutorials.findAllPublished);
router.get("/get/:id", tutorials.findTutorialById);
router.put("/publish/:id", tutorials.markPublished);
router.delete("/delete/:id", tutorials.deleteTutorial);

module.exports = router;
