let schoolFood1Button = document.getElementById("schoolFood1Button");
let schoolFood2Button = document.getElementById("schoolFood2Button");
schoolFood1Button.addEventListener("click", schoolFood1);
schoolFood2Button.addEventListener("click", schoolFood2);

function setup() {
  noCanvas();
}

function schoolFood1() {
  console.log("Button clicked!");
  location.href = "index3.html";
}

function schoolFood2() {
  console.log("Button clicked!");
  location.href = "index4.html";
}

