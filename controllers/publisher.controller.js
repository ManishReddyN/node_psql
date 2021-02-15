const db = require("../models");
const Publisher = db.publishers;
const Op = db.Sequelize.Op;
const shortid = require("shortid");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.bio) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const publisher = {
    name: req.body.name,
    bio: req.body.bio,
    publisherID: req.body.publisherID
      ? req.body.publisherID
      : shortid.generate(),
  };

  // Save Tutorial in the database
  Publisher.create(publisher)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the Publisher.",
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Publisher.findByPk(id, { include: ["tutorials"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};
