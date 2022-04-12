Cypress.Commands.add("RequestByCityName", (query) => {
    cy.request({
        url: "https://api.openweathermap.org/data/2.5/weather",
        qs: {
            q: query,
            units: "metric",
            appid: Cypress.env('API_KEY')
        }
    })
})

Cypress.Commands.add("RequestByLonLat", (latitude, longitude) => {
    cy.request({
        url: "https://api.openweathermap.org/data/2.5/weather",
        qs: {
            lat: latitude,
            lon: longitude,
            units: "metric",
            appid: Cypress.env('API_KEY')
        }
    })
})

Cypress.Commands.add("RequestById", (id) => {
    cy.request({
        url: "https://api.openweathermap.org/data/2.5/weather",
        qs: {
            id: id,
            units: "metric",
            appid: Cypress.env('API_KEY')
        }
    })
})

