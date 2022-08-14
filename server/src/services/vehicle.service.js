const HAT_API = require("../axios/HAT.api");

const baseURL = "https://hats-api-server-v2.herokuapp.com";

const getAllVehicles = () => HAT_API.get(`${baseURL}/vehicle`);

const getVehicleById = (id) => HAT_API.get(`${baseURL}/vehicle/${id}`);

module.exports = {
  getAllVehicles,
  getVehicleById,
};
