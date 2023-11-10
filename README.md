# Flight Search Service

## Overview

The Flight Search Service is a microservice in the Airline Management system designed for flight management. It enables users to search and retrieve flight details based on various criteria such as city, airport, airplane names, and flight names. Admins have the ability to create, delete, and update flight information.

## Features

- **Flight Search**: Users can search for flights based on destination city, airport, airplane names, and flight names.
- **Flight Details Retrieval**: Retrieve detailed information about a specific flight using its unique identifier.
- **Flight Creation (Admin)**: Admins can create new flights with details such as airplane type, departure and destination cities, airports, departure and arrival times, and available seats.
- **Flight Update (Admin)**: Admins can update flight details, including fields like departure city and airport.
- **Flight Deletion (Admin)**: Admins have the ability to delete flights from the system.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **PostgreSQL**: Relational database for data storage.
- **Sequelize**: Promise-based ORM for Node.js and PostgreSQL.
- **Sequelize CLI**: Command-line interface for Sequelize.

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/Flight-Search-Service.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the project root.
    - Set the following variables in the `.env` file:
        ```env
        PORT=your_preferred_port
        SYNC_DB=true
        ```
4. **Run Sequelize Init**
   ```bash
   npx sequelize init
   ```
5. **Inside the config/config.json file make sure to add your local DB username and Password and appropriate DB name.**
6. **Run Sequelize Create**
   ```bash
   npx sequelize db:create
   ``` 

7. **Run Sequelize Migrations:**
    ```bash
    npx sequelize db:migrate
    ```

8. **Run the Flight Search Service:**
    ```bash
    npm start
    ```

9. **Access the Flight Search Service:**
    - The service will be running on the specified port (default is 3001).

10. **Explore the Flight Search Service!**

## Configuration

Ensure to set the appropriate environment variables in your `.env` file for configuring the Flight Search Service:

- `PORT`: Port on which the service will run.
- `SYNC_DB`:  While starting the server ensure to make it true and after that either comment it out or make it false. Since DB Sync has to be done once.

## License

This project is licensed under the [MIT License](LICENSE).
