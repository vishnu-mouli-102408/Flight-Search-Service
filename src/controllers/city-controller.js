const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const response = await cityService.createCity(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfullt created a City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Create City",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfullt Deleted a City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Delete a City",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfullt Updated a City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Update a City",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfullt Fetched a City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Fetch a City",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
