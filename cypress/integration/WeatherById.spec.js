/// <reference types="Cypress" />

describe("Open Weather API - By ID suite tests", () => {
    let cities = require("../fixtures/citiesData");

    function formatCityName(index) {
        if (cities[index].name.includes(",")) {
            return cities[index].name.split(", ")[0];
        } else {
            return cities[index].name;
        }
    }

    it("Should return Status Code 200", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestById(cities[i].id).then((response) => {
                expect(response.status).to.eq(200);
            });
        }
    });

    it("Should return right id and right city name", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestById(cities[i].id).then((response) => {
                expect(response.body.id).to.eql(cities[i].id);
                expect(response.body.name).to.eql(formatCityName(i));
            });
        }
    });

    it("Should return a valid schema", () => {
        for (let i = 0; i < cities.length; i++) {
            cy.RequestById(cities[i].id).then((response) => {
                expect(response.body).have.property("coord").to.be.an("object");
                expect(response.body)
                    .have.property("weather")
                    .to.be.an("array");
                expect(response.body).have.property("wind").to.be.an("object");
                expect(response.body)
                    .have.property("clouds")
                    .to.be.an("object");
                expect(response.body).have.property("name").to.be.a("string");
                expect(response.body).have.property("id").to.be.a("number");
            });
        }
    });
});
