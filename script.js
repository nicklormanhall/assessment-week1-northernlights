console.log("Hello world");

const button = document.getElementById("myButton");
const elements = document.querySelectorAll("*");

button.addEventListener("click", function () {
  elements.forEach(function (element) {
    element.style.color = "deeppink";
  });
});
