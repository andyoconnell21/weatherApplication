const axios = require('axios');
const api = "https://api.weather.gov/points/";
const zipcodes = require('zipcodes');
var prompt = require('prompt');
prompt.start();
function weather(){	
    prompt.get(['zipcode'], function (err, result) {
    getWeather(zipcodes.lookup(result.zipcode).latitude, zipcodes.lookup(result.zipcode).longitude).then(function(response){
        console.log(response)
    })
    })

}
	async function getWeather(lat, long){
		var URLRequest = api + lat + "," + long;
		let x = await axios.get(URLRequest)
		let tempLink = x.data.properties.forecast
		let y = await axios.get(tempLink)
        var temperature = y.data.properties.periods[0].temperature
        return "The current temperature is " + temperature + "°"
	}
