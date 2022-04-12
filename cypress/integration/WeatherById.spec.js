/// <reference types="Cypress" />

import { formatCityName } from "../helpers/formatCityName"

describe("Open Weather API - By ID suite tests", () => {
    let cities = require("../fixtures/citiesData");

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
                expect(response.body.name).to.eql(formatCityName(cities[i].name));
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
