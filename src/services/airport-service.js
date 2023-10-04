const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const response = await this.airportRepository.createAirport(data);
      return response;
    } catch (error) {
      console.log("Error Occured in Service layer");
      throw { error };
    }
  }

  async deleteAirport(AirportId) {
    try {
      const response = await this.airportRepository.deleteAirport(AirportId);
    } catch (error) {
      console.log("Error Occured in Service layer");
      throw { error };
    }
  }

  async updateAirport(AirportId, data) {
    try {
      const response = await this.airportRepository.updateAirport(
        AirportId,
        data
      );
      return response;
    } catch (error) {
      console.log("Error Occured in Service layer");
      throw { error };
    }
  }

  async getAirport(AirportId) {
    try {
      const response = await this.airportRepository.getAirport(AirportId);
      return response;
    } catch (error) {
      console.log("Error Occured in Service layer");
      throw { error };
    }
  }

  async getAllAirports(filter) {
    try {
      const response = await this.airportRepository.getAllAirports(filter);
      return response;
    } catch (error) {
      console.log("Error Occured in Service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
