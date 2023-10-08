let workFood1Button = document.getElementById("workFood1Button");
let workFood2Button = document.getElementById("workFood2Button");
workFood1Button.addEventListener("click", workFood1);
workFood2Button.addEventListener("click", workFood2);

function setup() {
  noCanvas();
}

function workFood1() {
  console.log("Button clicked!");
  location.href = "index6.html";
}

function workFood2() {
  console.log("Button clicked!");
  location.href = "index7.html";
}

