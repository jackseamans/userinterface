let mcdonaldsButton = document.getElementById("mcdonaldsButton");
let starbucksButton = document.getElementById("starbucksButton");
mcdonaldsButton.addEventListener("click", mcdonalds);
starbucksButton.addEventListener("click", starbucks);

function createCanvas() {
  noCanvas();
}

function mcdonalds() {
  console.log("Button clicked!");
  location.href = "index8.html";
}

function starbucks() {
  console.log("Button clicked!");
  location.href = "index9.html";
}

