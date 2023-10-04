const express = require("express");
const bodyParser = require("body-parser");

const ApiRoutes = require("./routes/index");

const { PORT } = require("./config/serverConfig");

const db = require("./models/index");

const setUpAndStartServer = async () => {
  const app = express(); // created the new express object

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }

    console.log(`Server started at ${PORT}`);
  });
};

setUpAndStartServer();
