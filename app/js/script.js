const hamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadeEl = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeEl.forEach(function (el) {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeEl.forEach(function (el) {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});
