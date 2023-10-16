const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const response = await airplaneService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created Airplane",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't Create Airplane",
      err: error,
    });
  }
};

module.exports = {
  create,
};
