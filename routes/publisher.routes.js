const publishers = require("../controllers/publisher.controller");
const express = require("express");
const router = express.Router();

router.post("/create", publishers.create);

router.get("/get/:id", publishers.findOne);
module.exports = router;
