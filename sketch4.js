let burgerKingButton = document.getElementById("burgerKingButton");
let dunkinButton = document.getElementById("dunkinButton");
burgerKingButton.addEventListener("click", burgerKing);
dunkinButton.addEventListener("click", dunkin);

function setup() {
  noCanvas();
}

function burgerKing() {
  console.log("Button clicked!");
  location.href = "index10.html";
}

function dunkin() {
  console.log("Button clicked!");
  location.href = "index11.html";
}

