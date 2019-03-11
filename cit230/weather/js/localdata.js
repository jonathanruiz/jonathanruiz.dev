"use strict";

let pageNav = document.getElementById("page-nav");
let statusContainer = document.getElementById("status");
let contentContainer = document.getElementById("main-content");
let weatherURL = "js/weather.json";

let fetchData = weatherURL => {
  let cityName = "Greenville"; // The data we want from the weather.json file
  fetch(weatherURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR("Network response was not OK.");
    })
    .then(data => {
      // Check the data object that was retrieved
      console.log(data);
      // data is the full JavaScript object, but we only want the greenville part
      // shorten the variable and focus only on the data we want to reduce typing
      let g = data[cityName];

      // ************ Get the content ******************************

      // Get the location data
      let locName = g.City;
      let locState = g.State;
      // Put them together
      let fullName = `${locName}, ${locState} `;
      // See if it worked
      console.log(`fullName is: ${fullName}`);

      // Get the temperature data
      let temp = g.Temp;
      console.log(`Temp is ${temp}`);

      // Get the wind data
      let wind = g.Wind;
      console.log(`Wind is ${wind}`);

      // Get the current conditions
      let conditions = g.Summary;
      console.log(`conditions is ${conditions}`);

      // Get the hourly data
      let hourly = g.Hourly;
      console.log(`hourly are ${hourly}`);

      // Get the zip
      let zip = g.Zip;
      console.log(`zip is ${zip}`);

      // Get the wind direction
      let windDirect = g.Direction;
      console.log(`wind is ${windDirect}`);

      // Get the gusts
      let gusts = g.Gusts;
      console.log(`gusts is ${gusts}`);

      // Get the elevation
      let elevation = g.Elevation;
      console.log(`elevation is ${elevation}`);

      // Get the longitude
      let longitude = g.Longitude;
      console.log(`longitude is ${longitude}`);

      // Get the latitude
      let latitude = g.Latitude;
      console.log(`latitude is ${latitude}`);

      // ************ Display the content ******************************
      // Set the title with the location name at the first
      // Gets the title element so it can be worked with
      let pageTitle = document.getElementById("page-title");
      // Create a text node containing the full name
      let fullNameNode = document.createTextNode(fullName);
      // inserts the fullName value before any other content that might exist
      pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
      // When this is done the title should look something like this:
      // Greenville, SC | The Weather Site

      // Set the Location information
      // Get the h1 to display the city location
      let contentHeading = document.getElementById("contentHeading");
      contentHeading.innerHTML = fullName;
      // The h1 in main h1 should now say "Greenville, SC"

      // Set the temperature information
      let tempEl = document.getElementById("temp");
      tempEl.innerHTML = temp;

      // Set the wind information
      let windEl = document.getElementById("wind");
      windEl.innerHTML = wind;

      // Set the current conditions information
      let conditionsEl = document.getElementById("condition");
      conditionsEl.innerHTML = conditions;

      // Set the hourly temperature information
      let hourlyEl = document.getElementById("hourly-list");
      hourlyEl.innerHTML = "";
      for (let i = 0; i < hourly.length; i++) {
        let times = [
          "9 AM",
          "10 AM",
          "11 AM",
          "12 PM",
          "1 PM",
          "2 PM",
          "3 PM",
          "4 PM",
          "5 PM",
          "6 PM",
          "7 PM",
          "8 PM",
          "9 PM"
        ];
        hourlyEl.innerHTML += `<li>${times[i]}: ${
          hourly[i]
        }&deg;F |&nbsp;</li>`;
      }
      console.log(hourlyEl);

      // Set the zip
      let zipEl = document.getElementById("zip");
      zipEl.innerHTML = zip;

      // Set the wind direction
      let directionEl = document.getElementById("direction");
      directionEl.innerHTML = windDirect;

      // Get the gusts
      let gustsEl = document.getElementById("gusts");
      gustsEl.innerHTML = gusts;

      // Set the elevation
      let elevationEl = document.getElementById("elevation");
      elevationEl.innerHTML = elevation;

      // Get the longitude
      let longitudeEl = document.getElementById("longitude");
      longitudeEl.innerHTML = longitude;

      // Get the latitude
      let latitudeEl = document.getElementById("latitude");
      latitudeEl.innerHTML = latitude;

      // Change the status of the containers
      contentContainer.setAttribute("class", ""); // removes the hide class
      statusContainer.setAttribute("class", "hide"); // hides the status container
    })
    .catch(error => {
      console.log("There was a fetch problem: ", error.message);
      statusContainer.innerHTML = "Sorry, the data could not be processed.";
    });
};

// Calls the fetch API
fetchData(weatherURL);
