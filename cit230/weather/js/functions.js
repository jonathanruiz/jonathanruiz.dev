/* *************************************
 *  Weather Site JavaScript Functions
 ************************************* */

console.log("My javascript is being read.");

const temperature = document.getElementById("temp").innerHTML;
const speed = document.getElementById("wind").innerHTML;
const direction = document.getElementById("direction").innerHTML;
const summaryImage = document.getElementById("summaryImage");
const condition = document.getElementById("condition").innerHTML;
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
    case "cloud":
      curWeather.setAttribute("class", "background-cloud");
      break;
    case "fog":
      curWeather.setAttribute("class", "background-fog");
      break;
  }

  summaryImage.setAttribute("class", weatherCondition);
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
