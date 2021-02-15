const express = require("express");
const router = express.Router();
const tutorials = require("../controllers/tutorial.controller");

router.get("/", (req, res) => {
  res.json({ message: "Up and Running" });
});

// router.post("/api/tutorials/create/", tutorials.create);

// router.post("/api/publishers/create/", publishers.create);

// router.get("/api/publishers/:id", publishers.findOne);

// router.get("/published", tutorials.findAllPublished);

// router.get("/:id", tutorials.findOne);

// router.put("/:id", tutorials.update);

// router.delete("/:id", tutorials.delete);

// router.delete("/", tutorials.deleteAll);

// app.use("/api/tutorials", router);
module.exports = router;
