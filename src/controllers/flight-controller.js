const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a Flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Create Flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(201).json({
      data: flights,
      success: true,
      message: "Successfully Fetched Flights",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Fetch Flights",
      err: error,
    });
  }
};

module.exports = { create, getAll };
