/// <reference types="Cypress" />

describe("Open Weather API - By city Name suite tests", () => {
    it("Should return Code 200 with valid city name", () => {
        cy.request({
            url: "https://api.openweathermap.org/data/2.5/weather",
            qs: {
                q: "Paris",
                units: "metric",
                appid: Cypress.env('API_KEY')
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
        })
    })

    it("Should return valid schema", () => {
        cy.RequestByCityName("Paris")
        .then((response) => {
            expect(response.body).have.property("coord").to.be.an('object');
            expect(response.body).have.property("weather").to.be.an('array');
            expect(response.body).have.property("wind").to.be.an('object');
            expect(response.body).have.property("clouds").to.be.an('object');
            expect(response.body).have.property("name").to.be.an('string');
        })
    })
})