/// <reference types="Cypress" />

describe("Open Weather API - By Latitude Longitude suite tests", () => {
    let cities = require("../fixtures/citiesData");

    it("Should return Status Code 200", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestByLonLat(cities[i].lat, cities[i].lon).then(
                (response) => {
                    expect(response.status).to.eq(200);
                }
            );
        }
    });

    it("Should return right coordonates", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestByLonLat(cities[i].lat, cities[i].lon).then(
                (response) => {
                    expect(response.body.coord).to.have.property("lon");
                    expect(response.body.coord).to.have.property("lat");
                }
            );
        }
    });

    it("Should return a valid schema", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestByLonLat(cities[i].lat, cities[i].lon).then(
                (response) => {
                    expect(response.body)
                        .have.property("coord")
                        .to.be.an("object");
                    expect(response.body)
                        .have.property("weather")
                        .to.be.an("array");
                    expect(response.body)
                        .have.property("wind")
                        .to.be.an("object");
                    expect(response.body)
                        .have.property("clouds")
                        .to.be.an("object");
                    expect(response.body)
                        .have.property("name")
                        .to.be.a("string");
                    expect(response.body.coord)
                        .have.property("lon")
                        .to.be.a("number");
                    expect(response.body.coord)
                        .have.property("lat")
                        .to.be.a("number");
                }
            );
        }
    });
});
