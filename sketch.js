let schoolRoutesButton = document.getElementById("schoolButton");
let workRoutesButton = document.getElementById("workButton");
schoolRoutesButton.addEventListener("click", schoolRoutes);
workRoutesButton.addEventListener("click", workRoutes);

function setup() {
  createCanvas(120,50);
  radio = createRadio();
  radio.option('1', 'apple');
  radio.option('2', 'bread');
  radio.option('3', 'juice');
  radio.style('width', '30px');
  radio.selected('2');
  textAlign(CENTER);
}

function draw() {
  background(200);
  let val = radio.value();
  if (val) {
    text('item cost is $' + val, width / 2, height / 2);
  }
}

// function setup() {
//   createCanvas(600, 600);
//   background(0);
//   workRoutesButton.position(600, 600);
// }

function schoolRoutes() {
  console.log("Button clicked!");
  location.href = "index2.html";
}

function workRoutes() {
  console.log("Button clicked!");
  location.href = "index5.html";
}
