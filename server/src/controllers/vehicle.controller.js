const {
  getAllVehicles,
  getVehicleById,
} = require("../services/vehicle.service");

const { MISSING_VEHICLE_ID } = require("../httpMessages/vehicle.message");

const getVehicles = async (req, res) => {
  try {
    const result = await getAllVehicles();

    res.status(200).send({ data: result.data });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getVehicle = async (req, res) => {
  try {
    if (!req.params.vehicleId) return res.status(400).send(MISSING_VEHICLE_ID);

    const { vehicleId } = req.params;

    const result = await getVehicleById(vehicleId);

    res.status(200).send({ data: result.data });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getVehicles,
  getVehicle,
};
