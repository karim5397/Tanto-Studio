let moonIcon = document.querySelector(".moon-icon");
let sunIcon = document.querySelector(".sun-icon");
let cssStyleSheet = document.querySelector("#skin-color");

moonIcon.addEventListener("click", () => {
  cssStyleSheet.setAttribute("href", "css/style-dark.css");
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
  window.localStorage.setItem("darkStyle", "css/style-dark.css");
});

if (window.localStorage.getItem("darkStyle") == "css/style-dark.css") {
  cssStyleSheet.setAttribute("href", window.localStorage.getItem("darkStyle"));
} else {
  cssStyleSheet.setAttribute("href", "css/style.css");
}

sunIcon.addEventListener("click", () => {
  cssStyleSheet.setAttribute("href", "css/style.css");
  moonIcon.style.display = "block";
  sunIcon.style.display = "none";
  window.localStorage.removeItem("darkStyle");
});

let ancor = document.querySelectorAll(".ancor");
ancor.forEach(function (ele) {
  ele.onclick = function () {
    ancor.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});

let downNav = document.querySelector(".down-nav");
let dropDown = document.querySelector(".dropdown-menu");

downNav.addEventListener("click", () => {
  if (dropDown.style.display === "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
});

let arrowUp = document.querySelector(".arrw-up");
let arrowDown = document.querySelector(".arrw-down");
let bodyScroll = document.querySelector("html , body");

window.onscroll = function () {
  if (bodyScroll.scrollTop >= 500) {
    arrowUp.style.display = "block";
    arrowUp.onclick = function () {
      bodyScroll.scrollTo(0, 0);
      arrowDown.style.display = "block";
    };
  } else {
    arrowUp.style.display = "none";
  }
};

arrowDown.onclick = function () {
  bodyScroll.scrollTo(0, 10000);
  arrowDown.style.display = "none";
};
