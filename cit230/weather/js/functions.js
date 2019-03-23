/* *************************************
 *  Weather Site JavaScript Functions
 ************************************* */

console.log("My javascript is being read.");

var storage = window.localStorage;

// Set global variable for custom header required by NWS API
var idHeader = {
  headers: {
    "User-Agent": "Student Learning Project - rui17008@byui.edu"
  }
};

const pageNav = document.getElementById("page-nav");
const statusContainer = document.getElementById("status");
const contentContainer = document.getElementById("main-content");
const temperature = document.getElementById("temp").innerHTML;
const speed = document.getElementById("wind").innerHTML;
const direction = document.getElementById("direction").innerHTML;
const summaryImage = document.getElementById("summaryImage");
let condition = document.getElementById("condition").innerHTML;
const curWeather = document.getElementById("curWeather");
const elevation = document.getElementById("elevation");
const longitude = document.getElementById("longitude");
const latitude = document.getElementById("latitude");
const longitudeDirection = document.getElementById("longitude-direction");
const latitudeDirection = document.getElementById("latitude-direction");
const hourly = document.getElementById("hourly-list");

let date = new Date();
let nextHour = date.getHours() + 1;

// Calculate the Windchill
let buildWC = (speed, temp) => {
  const feelTemp = document.getElementById("feelTemp");

  // Compute the windchill
  let wc =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);

  // Round the answer down to integer
  wc = Math.floor(wc);

  // If chill is greater than temp, return the temp
  wc = wc > temp ? temp : wc;

  // Display the windchill
  console.log(wc);
  feelTemp.innerHTML = wc;
};

// Wind Dial Function
let windDial = direction => {
  // Get the container
  const dial = document.getElementById("dial");
  console.log(direction);

  // Determine the dial class
  switch (direction) {
    case "North":
    case "N":
      dial.setAttribute("class", "n"); //"n" is the CSS rule selector
      break;
    case "NE":
    case "NNE":
    case "ENE":
      dial.setAttribute("class", "ne");
      break;
    case "NW":
    case "NNW":
    case "WNW":
      dial.setAttribute("class", "nw");
      break;
    case "South":
    case "S":
      dial.setAttribute("class", "s");
      break;
    case "SE":
    case "SSE":
    case "ESE":
      dial.setAttribute("class", "se");
      break;
    case "SW":
    case "SSW":
    case "WSW":
      dial.setAttribute("class", "sw");
      break;
    case "East":
    case "E":
      dial.setAttribute("class", "e");
      break;
    case "West":
    case "W":
      dial.setAttribute("class", "w");
      break;
  }
};

// Gets the weather condition
let getCondition = condition => {
  condition = document.getElementById("condition").innerHTML;
  switch (condition.toLowerCase()) {
    case "clear":
      console.log("The condition is clear");
      return "clear";
    case "rain":
    case "rainy":
    case "wet":
    case "wet weather":
    case "thunderstorms":
    case "storms":
      console.log("The condition is rain");
      return "rain";
    case "snow":
    case "snowy":
      console.log("The condition is snowy");
      return "snow";
    case "cloud":
    case "cloudy":
    case "partly cloudy":
      console.log("The condition is cloudy");
      return "clouds";
    case "fog":
    case "foggy":
      console.log("The condition is foggy");
      return "fog";
  }
};

// It will change the summary image and background image
let changeSummaryImage = () => {
  let weatherCondition = getCondition(condition);
  switch (weatherCondition) {
    case "clear":
      curWeather.setAttribute("class", "background-clear");
      break;
    case "rain":
      curWeather.setAttribute("class", "background-rain");
      break;
    case "snow":
      curWeather.setAttribute("class", "background-snow");
      break;
    case "clouds":
      curWeather.setAttribute("class", "background-clouds");
      break;
    case "fog":
      curWeather.setAttribute("class", "background-fog");
      break;
  }

  summaryImage.setAttribute("src", storage.getItem("locIcon"));
  summaryImage.setAttribute("alt", weatherCondition);
  console.log(`Set the image and alts to ${weatherCondition}`);
};

// Convert meters to feet
let convertMeters = meters => {
  // Math floor rounds down to the nearest integer
  return Math.floor(meters * 3.28084);
};

// Get longitude direction
let getLongitudeDirection = longitude => {
  if (longitude <= 0) {
    return "W";
  } else {
    return "E";
  }
};

// Get latitude direction
let getLatitudeDirection = latitude => {
  if (latitude <= 0) {
    return "S";
  } else {
    return "N";
  }
};

// Convert, Format time to 12 hour format
let formatTime = hour => {
  if (hour > 23) {
    hour -= 24;
  }
  let amPM = hour > 11 ? "pm" : "am";
  if (hour > 12) {
    hour -= 12;
  }
  if (hour == 0) {
    hour = "12";
  }
  return hour + amPM;
};

let buildHourlyData = (nextHour, hourlyTemps) => {
  // Data comes from a JavaScript object of hourly temp name - value pairs
  // Next hour should have a value between 0-23
  // The hourlyTemps variable holds an array of temperatures
  // Line 8 builds a list item showing the time for the next hour
  // and then the first element (value in index 0) from the hourly temps array
  let hourlyListItems = `<li>${formatTime(nextHour)}: 
  ${hourlyTemps[0]}&deg;F |&nbsp;</li>`;
  // Build the remaining list items using a for loop
  for (let i = 1, x = hourlyTemps.length; i < x; i++) {
    hourlyListItems += `<li>${formatTime(nextHour + i)}: 
    ${hourlyTemps[i]}&deg;F |&nbsp;</li>`;
  }
  console.log(`HourlyList is: ${hourlyListItems}`);
  return hourlyListItems;
};

/* ***************************************
 * Geolocation
 **************************************** */

// Gets current weather information for a specific weather station from the NWS API
let getWeather = stationId => {
  // This is the URL for current observation data
  const URL = `https://api.weather.gov/stations/${stationId}/observations/latest`;
  // NWS User-Agent header (built above) will be the second parameter
  fetch(URL, idHeader)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR("Response not OK.");
    })
    .then(data => {
      // Let's see what we got back
      console.log("From getWeather function:");
      console.log(data);

      // Store weather information to localStorage
      // Description
      storage.setItem("locDescription", data.properties.textDescription);
    })
    .then(() => {
      // Build the page for viewing
      buildPage();
    })
    .catch(error => console.log("There was a getWeather error: ", error))
    .then(() => {
      changeSummaryImage();
      elevation.innerHTML = convertMeters(elevation.innerHTML);
      longitudeDirection.innerHTML = getLongitudeDirection(longitude.innerHTML);
      latitudeDirection.innerHTML = getLatitudeDirection(latitude.innerHTML);
    });
}; // end getWeather function

// Gets weather station list and the nearest weather station ID from the NWS API
let getStationId = stationsURL => {
  // NWS User-Agent header (built above) will be the second parameter
  fetch(stationsURL, idHeader)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR("Response not OK.");
    })
    .then(data => {
      // Let's see what we got back
      console.log("From getStationId function:");
      console.log(data);

      // Store station ID and elevation (in meters - will need to be converted to feet)
      let stationId = data.features[0].properties.stationIdentifier;
      let stationElevation = data.features[0].properties.elevation.value;
      console.log(`Station and Elevation are: ${stationId}`, stationElevation);

      // Store data to localstorage
      storage.setItem("stationId", stationId);
      storage.setItem("stationElevation", stationElevation);

      // Request the Current Weather for this station
      getWeather(stationId);
    })
    .catch(error => console.log("There was a getStationId error: ", error));
}; // end getStationId function

// Gets location information from the NWS API
let getLocation = locale => {
  const URL = `https://api.weather.gov/points/${locale}`;
  // NWS User-Agent header (built above) will be the second parameter
  fetch(URL, idHeader)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR("Response not OK.");
    })
    .then(data => {
      // Let's see what we got back
      console.log("Json object from getLocation function:");
      console.log(data);
      // Store data to localstorage

      // City
      storage.setItem(
        "locName",
        data.properties.relativeLocation.properties.city
      );

      // State
      storage.setItem(
        "locState",
        data.properties.relativeLocation.properties.state
      );

      // Get Forecast
      getForecast(data.properties.forecast);

      // Get Hourly Forecast
      getHourly(data.properties.forecastHourly);

      // Next, get the weather station ID before requesting current conditions
      // URL for station list is in the data object
      let stationsURL = data.properties.observationStations;
      // Call the function to get the list of weather stations
      getStationId(stationsURL);
    })
    .catch(error => console.log("There was a getLocation error: ", error));
}; // end getLocation function

// Gets longitude and latitude of current location
let getGeoLocation = () => {
  const status = document.getElementById("status");
  status.innerHTML = "Getting Location...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      // Combine the values
      const locale = `${lat},${long}`;
      console.log(`Lat and Long are: ${locale}.`);

      // Call getLocation function, send locale
      getLocation(locale);

      storage.setItem("locLat", lat.toFixed(2));
      storage.setItem("locLong", long.toFixed(2));
    });
  } else {
    status.innerHTML =
      "Your browser doesn't support Geolocation or it is not enabled!";
  } // end else
}; // end getGeoLocation

// Gets the hourly forcast
let getHourly = URL => {
  fetch(URL, idHeader)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR("Response not OK.");
    })
    .then(data => {
      console.log("HOURLY DATA", data);

      // Temp
      storage.setItem("locTemp", data.properties.periods[0].temperature);

      // Store Hourly Information
      let hourlyTime = [];

      for (let i = 0; i < 13; i++) {
        hourlyTime[i] = data.properties.periods[i].temperature;
      }

      storage.setItem("hourly", hourlyTime);

      // Wind
      storage.setItem(
        "locWindDirect",
        data.properties.periods[0].windDirection
      );
      storage.setItem(
        "locWindSpeed",
        data.properties.periods[0].windSpeed.split(" ")[0]
      );

      // Temperature
      storage.setItem("locTemp", data.properties.periods[0].temperature);
    });
};

// Get the forecast
let getForecast = URL => {
  fetch(URL, idHeader)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR("Response not OK.");
    })
    .then(data => {
      console.log("FORECAST DATA", data);

      // Icon
      storage.setItem("locIcon", data.properties.periods[0].icon);

      // Gusts
      storage.setItem("locGusts", data.properties.periods[0].windSpeed);

      // High Temp
      storage.setItem("tempHigh", data.properties.periods[0].temperature);

      // Low Temp
      storage.setItem("tempLow", data.properties.periods[1].temperature);

      // Summary conditions
      storage.setItem("summaryShort", data.properties.periods[0].shortForecast);
      storage.setItem(
        "summaryDetail",
        data.properties.periods[0].detailedForecast
      );
    });
};

let buildPage = () => {
  console.log("Building page....");

  let pageTitle = document.getElementById("page-title");
  let fullName = `${storage.getItem("locName")}, ${storage.getItem(
    "locState"
  )}`;
  let fullNameNode = document.createTextNode(fullName);
  pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);

  // Set the Location information
  // Get the h1 to display the city location
  let contentHeading = document.getElementById("contentHeading");
  contentHeading.innerHTML = fullName;

  // Set the temperature information
  let tempEl = document.getElementById("temp");
  tempEl.innerHTML = storage.getItem("locTemp");

  // Set the high
  let highEl = document.getElementById("high");
  highEl.innerHTML = storage.getItem("tempHigh");

  // Set the low
  let lowEl = document.getElementById("low");
  lowEl.innerHTML = storage.getItem("tempLow");

  // Set the wind information
  let windEl = document.getElementById("wind");
  windEl.innerHTML = storage.getItem("locWindSpeed");

  // Set the wind chill
  buildWC(windEl.innerHTML, tempEl.innerHTML);

  // Set the current conditions information
  let conditionsEl = document.getElementById("condition");
  conditionsEl.innerHTML = storage.getItem("locDescription");

  // Set the hourly temperature information
  let date = new Date();
  let nextHour = date.getHours() + 1;
  let hourlyStorage = storage.getItem("hourly");
  let hourlyData = hourlyStorage.split(",");
  let hourlyEl = document.getElementById("hourly-list");
  let hourlyList = buildHourlyData(nextHour, hourlyData);
  hourlyEl.innerHTML = hourlyList;

  // Set the zip
  let zipEl = document.getElementById("zip");
  zipEl.innerHTML = "none";

  // Set the wind direction
  let directionEl = document.getElementById("direction");
  directionEl.innerHTML = storage.getItem("locWindDirect");
  windDial(directionEl.innerHTML);

  // Get the gusts
  let gustsEl = document.getElementById("gusts");
  gustsEl.innerHTML = storage.getItem("locGusts");

  // Set the elevation
  let elevationEl = document.getElementById("elevation");
  elevationEl.innerHTML = storage.getItem("stationElevation");

  // Get the longitude
  let longitudeEl = document.getElementById("longitude");
  longitudeEl.innerHTML = storage.getItem("locLong");

  // Get the latitude
  let latitudeEl = document.getElementById("latitude");
  latitudeEl.innerHTML = storage.getItem("locLat");

  // Change the status of the containers
  contentContainer.setAttribute("class", ""); // removes the hide class
  statusContainer.setAttribute("class", "hide"); // hides the status container

  console.log("Page built!");
};
