const express = require("express");
const router = express.Router();

const { getAllEventMsg } = require("../../controllers/eventMsg.controller");

router.get("/", getAllEventMsg);

module.exports = router;
