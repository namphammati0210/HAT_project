const request = require("supertest");

const app = require("../../app");

const mockingVehicleId = "1ee09315-a37f-4e44-b943-1e3daea73cb9";

describe("GET /api/vehicle ", () => {
  test("return response status is 200", async () => {
    const response = await request(app)
      .get("/api/vehicle")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(typeof response.body).toBe("object");
  });
});

describe("GET /api/vehicle/:vehicleId ", () => {
  test("return response status is 200", async () => {
    const response = await request(app)
      .get(`/api/vehicle/${mockingVehicleId}`)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(typeof response.body).toBe("object");
    expect(response.body.ID).toBe(mockingVehicleId);
  });
});
