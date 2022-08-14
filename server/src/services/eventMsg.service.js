const HAT_API = require("../axios/HAT.api");

const baseURL = "https://hats-api-server-v2.herokuapp.com";

const getEventMsg = () => HAT_API.get(`${baseURL}/eventmsg`);

module.exports = {
  getEventMsg,
};
