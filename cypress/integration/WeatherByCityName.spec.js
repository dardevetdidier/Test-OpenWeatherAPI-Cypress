/// <reference types="Cypress" />

describe("Open Weather API - By city Name suite tests", () => {
    let cities = require("../fixtures/citiesData");

    function formatCityName(index) {
        if (cities[index].name.includes(",")) {
            return cities[index].name.split(", ")[0];
        } else {
            return cities[index].name;
        }
    }

    it("Should return Code 200 with valid city name", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestByCityName(cities[i].name).then((response) => {
                expect(response.status).to.eq(200);
            });
        }
    });

    it("Should return the right city name", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestByCityName(cities[i].name).then((response) => {
                expect(response.body.name).to.eql(formatCityName(i));
            });
        }
    });

    it("Should return a valid schema", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestByCityName(cities[i].name).then((response) => {
                expect(response.body).have.property("coord").to.be.an("object");
                expect(response.body)
                    .have.property("weather")
                    .to.be.an("array");
                expect(response.body).have.property("wind").to.be.an("object");
                expect(response.body)
                    .have.property("clouds")
                    .to.be.an("object");
                expect(response.body).have.property("name").to.be.a("string");
            });
        }
    });
});
