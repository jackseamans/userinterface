let schoolRoutesButton = document.getElementById("schoolButton");
let workRoutesButton = document.getElementById("workButton");
let route1Button = document.getElementById("route1Button");
schoolRoutesButton.addEventListener("click", schoolRoutes);
workButton.addEventListener("click", workRoutes);
route1Button.addEventListener("click", goToRoute1);

function setup() {
  noCanvas();
}

function schoolRoutes() {
  console.log("Button clicked!");
  location.href = "index2.html";
}

function workRoutes() {
  console.log("Button clicked!");
  location.href = "index5.html";
}

function goToRoute1() {
  console.log("Button clicked!");
  location.href = "https://google.com";
}

