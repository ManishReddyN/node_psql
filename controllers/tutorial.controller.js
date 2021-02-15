const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    publisherID: req.body.publisherID,
  };

  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findTutorialById = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id, { include: ["publisher"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

exports.findAllTutorials = (req, res) => {
  Tutorial.findAll({ include: ["publisher"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error while fetching resources",
      });
    });
};

exports.markPublished = (req, res) => {
  const id = req.params.id;
  const body = {
    published: true,
  };
  Tutorial.update(body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Tutorial was successfully published",
        });
      } else {
        res.status(404).send({
          message: `Cannot publish tutorial with ${id}. Tutorial was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error publishing the tutorial",
      });
    });
};

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.deleteTutorial = (req, res) => {
  const id = req.params.id;
  Tutorial.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Tutorial was deleted successfully",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete tutorial with ${id}. Tutorial was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting the tutorial",
      });
    });
};
