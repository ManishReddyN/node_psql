const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.publishers = require("./publisher.model.js")(sequelize, Sequelize);
db.publishers.hasMany(db.tutorials, {
  as: "tutorials",
  foreignKey: "publisherID",
});
db.tutorials.belongsTo(db.publishers, {
  foreignKey: {
    name: "publisherID",
    allowNull: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  as: "publisher",
});
module.exports = db;
