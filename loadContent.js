// loadContent.js

function loadHTML(target, url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.querySelector(target).innerHTML = data;
      })
      .catch((error) => console.error("Error loading HTML:", error));
  }
  
  // İçerikleri yüklemek
  document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#header", "./partials/header.html");
    loadHTML("#mobilemenu", "./partials/mobilemenu.html");
    loadHTML("#hero", "./partials/hero.html");
    loadHTML("#howitworks", "./partials/howitworks.html");
    loadHTML("#advertisement", "./partials/advertisement.html");
    loadHTML("#vegetables", "./partials/vegetables.html");
    loadHTML("#reviews", "./partials/reviews.html");
    loadHTML("#yourorder", "./partials/yourorder.html");
    loadHTML("#footer", "./partials/footer.html");
  });