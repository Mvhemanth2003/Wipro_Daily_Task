const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Courses API - Unit Tests", () => {

    it("GET /api/courses → should return all courses", (done) => {
        chai.request(server)
            .get("/api/courses")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });
    });

    it("POST /api/courses → should create a course", (done) => {
        chai.request(server)
            .post("/api/courses")
            .send({ name: "NodeJS", duration: "4 weeks" })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property("name");
                done();
            });
    });

});