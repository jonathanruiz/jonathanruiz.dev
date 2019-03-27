let fetchData = () => {
  fetch("../js/acme.json")
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
  // .then(data => {
  //   // buildPage(data);
  // });
};

let buildNav = (data, keys) => {
  const navList = document.getElementById("nav-list");

  for (const key of keys) {
    navList.innerHTML += `<li><a id=${key.toLowerCase()}>${key}</a></li>`;
    document.getElementById(key.toLowerCase()).addEventListener("click", () => {
      // buildPage(data, key);
      console.log("clicked!");
    });
  }

  console.log(navList);
};

let buildPage = (data, key) => {
  // const pageContent = document.getElementById("page-content");
  // pageContent.innerHTML = `
  //   <h2>${data.name.filter(key)}</h2>
  // `;
};

fetchData();
