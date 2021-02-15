const publishers = require("../controllers/publisher.controller");
const express = require("express");
const router = express.Router();

router.post("/create", publishers.create);
router.get("/get/:id", publishers.findPublisherByID);
router.delete("/delete/:id", publishers.deletePublisher);
module.exports = router;
