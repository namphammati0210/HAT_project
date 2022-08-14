const express = require("express");
const router = express.Router();

const { getAllEventMsg } = require("../../controllers/eventMsg.controller");

/**
 * @swagger
 * /eventmsg:
 *   get:
 *     tags:
 *       - Event Message (EventMsg)
 *     description: >
 *       get all Event Msg
 *     operationId: getAllEventMsg
 *     security:
 *       - authKey: [ ]
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       "401":
 *         description: Client Error
 *       "500":
 *         description: Server Error
 */
router.get("/", getAllEventMsg);

module.exports = router;
