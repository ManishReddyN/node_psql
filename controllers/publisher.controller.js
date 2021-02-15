const db = require("../models");
const Publisher = db.publishers;
const Op = db.Sequelize.Op;
const shortid = require("shortid");
exports.create = (req, res) => {
  if (!req.body.name || !req.body.bio) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const publisher = {
    name: req.body.name,
    bio: req.body.bio,
    publisherID: req.body.publisherID
      ? req.body.publisherID
      : shortid.generate(),
  };

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
exports.findPublisherByID = (req, res) => {
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
exports.deletePublisher = (req, res) => {
  const id = req.params.id;
  Publisher.destroy({ where: { publisherID: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Publisher was deleted successfully",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete publisher with ${id}. Publisher was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting the publisher",
      });
    });
};
