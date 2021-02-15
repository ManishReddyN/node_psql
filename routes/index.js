const express = require("express");
const router = express.Router();
const tutorials = require("../controllers/tutorial.controller");
const publishers = require("../controllers/publisher.controller");

router.get("/", (req, res) => {
  res.json({ message: "Up and Running" });
});

// Create a new Tutorial
router.post("/api/tutorials/create/", tutorials.create);

router.post("/api/publishers/create/", publishers.create);

// // Retrieve all Tutorials
router.get("/api/publishers/:id", publishers.findOne);

// // Retrieve all published Tutorials
// router.get("/published", tutorials.findAllPublished);

// // Retrieve a single Tutorial with id
// router.get("/:id", tutorials.findOne);

// // Update a Tutorial with id
// router.put("/:id", tutorials.update);

// // Delete a Tutorial with id
// router.delete("/:id", tutorials.delete);

// // Create a new Tutorial
// router.delete("/", tutorials.deleteAll);

// app.use("/api/tutorials", router);
module.exports = router;
