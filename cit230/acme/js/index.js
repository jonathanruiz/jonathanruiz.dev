const pageContent = document.getElementById("page-content");
const original = pageContent.innerHTML;

// Fetch the data from the API
let fetchData = () => {
  fetch("./js/acme.json")
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new ERROR("Network response was not OK.");
    })
    .then(data => {
      console.log(data);

      // Get the keys of the object
      let keys = Object.keys(data);
      console.log(keys);

      // Build the navbar
      buildNav(data, keys);
    });
};

// Build the navigation
let buildNav = (data, keys) => {
  const navList = document.getElementById("nav-list");

  //  Create a nav list item for every key
  for (const key of keys) {
    navList.innerHTML += `<li><a href="#" id=${key.toLowerCase()}>${key}</a></li>`;
  }

  // Create an event listener for the home page
  document.getElementById("home").addEventListener("click", () => {
    buildHome(original);
  });

  // Create an event listener for every nav list item
  keys.forEach(key => {
    document.getElementById(key.toLowerCase()).addEventListener("click", () => {
      // If clicked, build the page with the object info
      buildPage(data[key]);
    });
  });
};

// Build the home page
let buildHome = () => {
  pageContent.innerHTML = original;
};

// Build the nav pages
let buildPage = data => {
  console.log(data);

  // Populate the HTML with the object info
  pageContent.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.path}" alt="${data.name}"></img>
    <p>${data.description}</p>
    <p><strong>Made by:</strong> ${data.manufacturer}</p>
    <p><strong>Reviews:</strong> ${data.reviews}/5 stars</p>
    <h3>$${data.price}</h3>
  `;
};

fetchData();
