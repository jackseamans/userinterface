let papaJohnsButton = document.getElementById("papaJohnsButton");
let dominosButton = document.getElementById("dominosButton");
papaJohnsButton.addEventListener("click", papaJohns);
dominosButton.addEventListener("click", dominos);

function setup() {
  noCanvas();
}

function papaJohns() {
  console.log("Button clicked!");
  location.href = "index14.html";
}

function dominos() {
  console.log("Button clicked!");
  location.href = "index15.html";
}

