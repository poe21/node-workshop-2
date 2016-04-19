var prompt = require("prompt");
var request = require("request");
var colors = require('colors');
var emoji = require('node-emoji');
var Table = require('cli-table');

// How's the weather?

// Go to Forecast.io API and read the documentation
// Get yourself a free API key
// Remember the Google Geocoding API from yesterday's workshop
// Using both APIs, complete the following workflow:
// Ask the user for their location
// Retrieve the weather for the user's location
// Display the current weather as well as the next 5 days weather in a nice way
// Hint: to display the results in a nice way, a few NPM modules could be useful, 
// including but not limited to:
//      colors
//      cli-table
//      node-emoji
// Add/commit/push



// function howIsTheWeather() {
    
    // get the location of the user with a prompt
    prompt.start();
    prompt.get(["location"], function(err, result) {
        console.log("You are located in: " + result.location);

        // Find the coordinates of the user's location
        var request = require("request");
        var address = "https://maps.googleapis.com/maps/api/geocode/json?address="+result.location;
        request(address, function(err, result) {
            var resultObject = JSON.parse(result.body);
            var userLat = resultObject.results[0].geometry.location.lat;
            var userLng = resultObject.results[0].geometry.location.lng;
            console.log("Your coordinates are: latitude: " + userLat.toFixed(2) + " and longitude: " + userLng.toFixed(2));
        
            // Find out the current weather using the coordinates of the user's location
            var request = require("request");
            var address = "https://api.forecast.io/forecast/7e83f0e072da7af3244206545bc26f5b/"+userLat+","+userLng+"?units=ca";
            request(address, function(err, result) {
                var resultObject = JSON.parse(result.body);
                var userLocalTemp = resultObject.currently.temperature.toFixed(0);
                var nextFiveDays = [
                    resultObject.daily.data[0].temperatureMax.toFixed(0),
                    resultObject.daily.data[1].temperatureMax.toFixed(0),
                    resultObject.daily.data[2].temperatureMax.toFixed(0),
                    resultObject.daily.data[3].temperatureMax.toFixed(0),
                    resultObject.daily.data[4].temperatureMax.toFixed(0)];
                console.log("It's " + userLocalTemp + "°C outside right now! It will be " + nextFiveDays[0] +  "°C tomorrow.");
                
                // table work in progress
                // // initialize table 
                // var table = new Table({
                //     head: ['TH 1 label', 'TH 2 label']
                //   , colWidths: [100, 200]
                // });
                 
                // // table is an Array, so you can `push`, `unshift`, `splice` and friends 
                // table.push(
                //     nextFiveDays
                //   , ['First value', 'Second value']
                // );
                 
                // console.log(table.toString());
            });
        });
    });
//}