// let butt1, butt2, butt3;

// function setup() {
//     noCanvas();
//     createButton("butt1");
//     butt1.mouseClicked( click1 );
//     createButton("butt2");
//     butt2.mouseClicked( click2 );
//     createButton("butt3");
//     butt3.mouseClicked( click3 );
// }

// let myButton;

// schoolButton = document.getElementById("schoolButton");

// myButton = createButton("Button")
// myButton.mouseClicked(clickedButton);

// function clickedButton() {
//     select(Map1.png).style("width", "100%")
// }

// function setup() {
// createCanvas(300, 300)

// }

// function setup() {
//     noCanvas();
//     let button = createButton('School');
//     button.position(200, 200)
//     button.mouseClicked( clicked)
// }

// function clicked() {
//     let img = createImage(600, 450)

// }

let transparency = 1;
let p

function setup() {
  noCanvas();
  p =createP("TEXT");
  p.position(displayWidth/2, displayHeight/2)
  p.mouseClicked( clicked );
}

function clicked() {
  transparency = transparency - .1;
  p.style("opacity", transparency);
  if (transparency <= 0) {
    location.href = "index2.html"
  }
}

