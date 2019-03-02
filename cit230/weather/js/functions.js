/* *************************************
 *  Weather Site JavaScript Functions
 ************************************* */

console.log("My javascript is being read.");

const temp = 31;
const speed = 5;
const direction = document.getElementById("direction").innerHTML;
const summaryImage = document.getElementById("summaryImage");
const condition = document.getElementById("condition").innerHTML;
const curWeather = document.getElementById("curWeather");
const elevation = document.getElementById("elevation");

// Calculate the Windchill
let buildWC = (speed, temp) => {
  const feelTemp = document.getElementById("feelTemp");

  // Compute the windchill
  let wc =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
  // console.log(wc);

  // Round the answer down to integer
  wc = Math.floor(wc);

  // If chill is greater than temp, return the temp
  wc = wc > temp ? temp : wc;

  // Display the windchill
  // console.log(wc);
  // wc = 'Feels like '+wc+'°F';
  feelTemp.innerHTML = wc;
};

// Wind Dial Function
let windDial = direction => {
  // Get the container
  const dial = document.getElementById("dial");
  // console.log(direction);

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

let getCondition = condition => {
  switch (condition.toLowerCase()) {
    case "clear":
      // console.log("The condition is clear");
      return "clear";
    case "rain":
    case "rainy":
    case "wet":
    case "wet weather":
      // console.log("The condition is rain");
      return "rain";
    case "snow":
    case "snowy":
      // console.log("The condition is snowy");
      return "snow";
    case "cloud":
    case "clody":
    case "partly cloudy":
      // console.log("The condition is cloudy");
      return "clouds";
    case "fog":
    case "foggy":
      // console.log("The condition is foggy");
      return "fog";
  }
};

// It will change the summary image and background image
let changeSummaryImage = () => {
  let weatherCondition = getCondition(condition);
  switch (weatherCondition) {
    case "clear":
      curWeather.setAttribute("class", "background-clear");
      summaryImage.setAttribute("class", weatherCondition);
      summaryImage.setAttribute("alt", weatherCondition);
      // console.log(`Set the image and alts to ${weatherCondition}`);
      break;
    case "rain":
      curWeather.setAttribute("class", "background-rain");
      summaryImage.setAttribute("class", weatherCondition);
      summaryImage.setAttribute("alt", weatherCondition);
      // console.log(`Set the image and alts to ${weatherCondition}`);
      break;
    case "snow":
      curWeather.setAttribute("class", "background-snow");
      summaryImage.setAttribute("class", weatherCondition);
      summaryImage.setAttribute("alt", weatherCondition);
      // console.log(`Set the image and alts to ${weatherCondition}`);
      break;
    case "cloud":
      curWeather.setAttribute("class", "background-cloud");
      summaryImage.setAttribute("class", weatherCondition);
      summaryImage.setAttribute("alt", weatherCondition);
      // console.log(`Set the image and alts to ${weatherCondition}`);
      break;
    case "fog":
      curWeather.setAttribute("class", "background-fog");
      summaryImage.setAttribute("class", weatherCondition);
      summaryImage.setAttribute("alt", weatherCondition);
      // console.log(`Set the image and alts to ${weatherCondition}`);
      break;
  }
};

// Convert meters to feet
let convertMeters = meters => {
  // Math Ceil rounds up to the nearest integer
  return Math.ceil(meters * 3.28084);
};

buildWC(speed, temp);
windDial(direction);
changeSummaryImage();
elevation.innerHTML = convertMeters(elevation.innerHTML);
