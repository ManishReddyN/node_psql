module.exports = (sequelize, Sequelize) => {
  const Publisher = sequelize.define("publisher", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    publisherID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
  });

  return Publisher;
};
