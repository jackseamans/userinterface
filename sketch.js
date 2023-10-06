let schoolRoutesButton = document.getElementById("schoolButton");
let workRoutesButton = document.getElementById("workButton");
let schoolFood1Button = document.getElementById("schoolFood1Button");
let schoolFood2Button = document.getElementById("schoolFood2Button");
schoolRoutesButton.addEventListener("click", schoolRoutes);
workRoutesButton.addEventListener("click", workRoutes);
schoolFood1Button.addEventListener("click", schoolFood1);
schoolFood2Button.addEventListener("click", schoolFood2);

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

function schoolFood1() {
  console.log("Button clicked!");
  location.href = "index3.html";
}

function schoolFood2() {
  console.log("Button clicked!");
  location.href = "index4.html";
}

