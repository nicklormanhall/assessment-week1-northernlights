console.log("Hello world");

const pinkButton = document.getElementById("pinkButton");
const whiteButton = document.getElementById("whiteButton");
const elements = document.querySelectorAll("*");

pinkButton.addEventListener("click", function () {
  elements.forEach(function (element) {
    element.style.color = "deeppink";
  });
});

whiteButton.addEventListener("click", function () {
  elements.forEach(function (element) {
    element.style.color = "white";
  });
});
