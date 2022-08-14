const { getEventMsg } = require("../services/eventMsg.service");

const getAllEventMsg = async (req, res) => {
  try {
    const result = await getEventMsg();

    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllEventMsg,
};
