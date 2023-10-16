const express = require("express");

const router = express.Router();

const { FlightMiddlewares } = require("../../middlewares/index");

const {
  CityController,
  AirportController,
  FlightController,
  AirplaneController,
} = require("../../controllers/index");

router.post("/cities", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/cities", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post("/airports", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);

router.post("/airplanes", AirplaneController.create);

module.exports = router;
