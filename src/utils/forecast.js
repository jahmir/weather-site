const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?query=' + lat + "," + long + '&access_key=f880abbc057af36c60b52700b8c4502a&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            temp = body.current.temperature
            feelsLike = body.current.feelslike

            callback(undefined, body.current.weather_descriptions + '. Temperature is ' + temp + ' but feels like ' + feelsLike)
        }
    })
}

module.exports = forecast