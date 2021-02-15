const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./routes/index");
const db = require("./models/index");
const publisherRoutes = require("./routes/publisher.routes");
const tutorialRoutes = require("./routes/tutorial.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use("/api/publisher", publisherRoutes);
app.use("/api/tutorial", tutorialRoutes);

db.sequelize.sync();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
