const express = require("express");
const router = express.Router();

const {
  getVehicles,
  getVehicle,
} = require("../../controllers/vehicle.controller");

/**
 * @swagger
 * /vehicle:
 *   get:
 *     tags:
 *       - Vehicle
 *     description: >
 *       get all vehicle id
 *       [[Object Id  : "1ee09315-a37f-4e44-b943-1e3daea73cb9", Update time: "2022-02-15T18:18:04.483Z"],
 *       [Object Id  : "1ee09315-0000-4e44-b943-1e3daea73cb9", Update time: "2022-02-15T18:18:04.483Z"]]
 *     operationId: getAllVehicle
 *     security:
 *       - authKey: [ ]
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             examples:
 *               AllVehicle:
 *                 summary: All Vehicle
 *                 value: [ [ "1ee09315-a37f-4e44-b943-1e3daea73cb9", "2022-02-15T18:18:04.483Z",  2 ],
 *                         [ "1ee09315-0000-4e44-b943-1e3daea73cb9", "2022-02-15T18:18:04.483Z", 44 ] ]
 *               NoVehicle:
 *                 summary: No Vehicle
 *                 value: [ ]
 *             schema:
 *               type: array
 *       "400":
 *         description: Client Error
 *
 *       "500":
 *         description: Server Error
 */
router.get("/", getVehicles);

/**
 * @swagger
 * /Vehicle/{vehicleId}:
 *   get:
 *     description: get vehicle date
 *     operationId: getVehicle
 *     tags:
 *       - Vehicle
 *     security:
 *       - authKey: [ ]
 *     responses:
 *       '200':
 *         description: OK
 *       "400":
 *         description: Client Error
 *
 *       "500":
 *         description: Server Error
 */
router.get("/:vehicleId", getVehicle);

module.exports = router;
