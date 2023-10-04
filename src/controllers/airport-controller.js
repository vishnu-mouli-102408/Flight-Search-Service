const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Create Airport",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted an Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't delete an Airport",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airportService.updateAirport(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Updated an Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't update Airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched Airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't fetch Airport",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await airportService.getAllAirports(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Fetched Airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Fetch Airports",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
};
