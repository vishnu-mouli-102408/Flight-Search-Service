const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival Time cannot be less tha Departure Time." };
      }
      const airplane = await this.airplaneRepository.get(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }

  async getAllFlights(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const response = await this.flightRepository.getFlight(flightId);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlight(flightId, data);
      return response;
    } catch (error) {
      console.log("Error in Service Layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
