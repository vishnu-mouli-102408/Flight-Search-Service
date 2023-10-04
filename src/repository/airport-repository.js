const { Airport } = require("../models/index");
const { Op } = require("sequelize");

class AirportRepository {
  async createAirport(data) {
    try {
      const response = await Airport.create({
        name: data.name,
        address: data.address ? data.address : null,
        cityId: data.cityId,
      });
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw { error };
    }
  }

  async deleteAirport(AirportId) {
    try {
      await Airport.destroy({
        where: {
          id: AirportId,
        },
      });
      return true;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw { error };
    }
  }

  async updateAirport(AirportId, data) {
    try {
      const response = await Airport.update(data, {
        where: {
          id: AirportId,
        },
        returning: true,
      });
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw { error };
    }
  }

  async getAirport(AirportId) {
    try {
      const response = await Airport.findByPk(AirportId);
      return response;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw { error };
    }
  }

  async getAllAirports(filter) {
    try {
      if (filter.name) {
        const response = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return response;
      }
      const cities = await Airport.findAll();
      return cities;
    } catch (error) {
      console.log("Error occured in Repository Layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
