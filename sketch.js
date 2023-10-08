let schoolRoutesButton = document.getElementById("schoolButton");
let workRoutesButton = document.getElementById("workButton");
schoolRoutesButton.addEventListener("click", schoolRoutes);
workRoutesButton.addEventListener("click", workRoutes);

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
