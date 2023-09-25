const express = require("express");

const { PORT } = require("./config/serverConfig");

const setUpAndStartServer = () => {
  const app = express(); // created the new express object
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setUpAndStartServer();