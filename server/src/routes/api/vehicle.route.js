const express = require("express");
const router = express.Router();

const {
  getVehicles,
  getVehicle,
} = require("../../controllers/vehicle.controller");

router.get("/", getVehicles);

router.get("/:vehicleId", getVehicle);

module.exports = router;
