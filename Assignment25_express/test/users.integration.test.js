const request = require("supertest");
const app = require("../server");
const expect = require("chai").expect;

describe("Users API - Integration Tests", () => {

    it("GET /api/users should return list of users", async () => {
        const res = await request(app).get("/api/users");
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an("array");
    });

    it("POST /api/users should create a new user", async () => {
        const res = await request(app)
            .post("/api/users")
            .send({ username: "hemanth", email: "hemanth@test.com" });

        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property("username");
    });
});










































































































