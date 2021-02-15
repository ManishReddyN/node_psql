module.exports = {
  HOST: "localhost",
  USER: "nmreddy",
  PASSWORD: "Manish@7075&",
  DB: "node_sql",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
