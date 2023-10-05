let schoolButton = document.getElementById("schoolButton");
let workButton = document.getElementById("workButton");
let route1Button = document.getElementById("route1Button");
schoolButton.addEventListener("click", goToSchool);
workButton.addEventListener("click", goToWork);
route1Button.addEventListener("click", goToRoute1);

function setup() {
  noCanvas();
}

function goToSchool() {
  console.log("Button clicked!");
  location.href = "index2.html";
}

function goToWork() {
  console.log("Button clicked!");
  location.href = "index3.html";
}

function goToRoute1() {
  console.log("Button clicked!");
  location.href = "https://google.com";
}

