let jerseyMikesButton = document.getElementById("jerseyMikesButton");
let firehouseSubsButton = document.getElementById("firehouseSubsButton");
jerseyMikesButton.addEventListener("click", jerseyMikes);
firehouseSubsButton.addEventListener("click", firehouseSubs);

function setup() {
  noCanvas();
}

function jerseyMikes() {
  console.log("Button clicked!");
  location.href = "index12.html";
}

function firehouseSubs() {
  console.log("Button clicked!");
  location.href = "index13.html";
}

