const axios = require("axios");

const instance = axios.create({
  // baseUrl: "https://hats-api-server-v2.herokuapp.com",
  headers: {
    Authorization: `62cc7735114ed86b4cd5b9ca`,
  },
});

module.exports = instance;
