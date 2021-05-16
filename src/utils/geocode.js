const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiYWx0YWlyam9obmZiYWNjIiwiYSI6ImNrb21qMDYydjBkemcydmw2MDlsaGdzMjgifQ.q0e0nHVbQizCU-9elF9fYA'

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to location services')
        } else if (body.message === 'Not Found') {
            callback('Unable to geocode location. Try gain')
        } else {

            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode