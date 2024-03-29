const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2433e5d1ec612cfbb79bb2683f2ca4d6/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service', undefined)
        } else if (body.error) {
            callback('Poorly formatted request, please try again.', undefined)
        } else {
            callback(undefined, 
                `${body.daily.data[0].summary} It is currently ${body.currently.temperature}°F. 
                There is a ${body.currently.precipProbability}% chance of rain.  The daily high will be ${body.daily.data[0].temperatureHigh}°F with
                a humidity of ${body.currently.humidity}g/m^3.`
            )
        }
    })
}

module.exports = forecast