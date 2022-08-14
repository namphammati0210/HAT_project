const swaggerJSDoc = require("swagger-jsdoc");

/* Setup Swagger docs*/
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for HAT project",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from HAT api.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Contact me",
      url: "https://www.facebook.com/trungnampham12",
    },
  },
  servers: [
    {
      url: "http://localhost:3001",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/api/*.route.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
