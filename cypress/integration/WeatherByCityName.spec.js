/// <reference types="Cypress" />

describe("Open Weather API - By city Name suite tests", () => {

    let cities = require("../fixtures/citiesData");

    it("Should return Code 200 with valid city name", () => {
        cy.RequestByCityName(cities[0].name).then((response) => {
            expect(response.status).to.eql(200);
        })
    })

    it("Should return the right city name", () => {
        cy.RequestByCityName(cities[1].name)
        .then((response) => {
            expect(response.body.name).to.eql(cities[1].name);
        })
    })

    it("Should return valid schema", () => {
        cy.RequestByCityName(cities[1].name)
        .then((response) => {
            expect(response.body).have.property("coord").to.be.an('object');
            expect(response.body).have.property("weather").to.be.an('array');
            expect(response.body).have.property("wind").to.be.an('object');
            expect(response.body).have.property("clouds").to.be.an('object');
            expect(response.body).have.property("name").to.be.an('string');
        })
    })
})