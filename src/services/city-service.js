const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const response = await this.cityRepository.createCity(data);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const response = await this.cityRepository.updateCity(cityId, data);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const response = await this.cityRepository.getCity(cityId);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }
}
