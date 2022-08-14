const request = require("supertest");

const app = require("../../app");

describe("GET /api/eventmsg ", () => {
  test("return response status is 200", async () => {
    const response = await request(app)
      .get("/api/eventmsg")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(typeof response.body).toBe("object");
  });
});
