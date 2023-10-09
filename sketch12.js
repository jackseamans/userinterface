let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('12.70', '1x Reg #17 Mikes Famous Philly');
    radio.option('19.95', '1x Giant #26 Bacon Ranch Chicken Cheese Steak');
    radio.option('12.95', '1x Bowl #56 Big Kahuna Cheese Steak');
    radio.style('width', '300px');
    radio.selected('2');
    textAlign(CENTER);

    button = createButton ('Continue to Route');
    button.hide();
    button.mousePressed(jerseyMikesRoute);
  }
  
  function draw() {
    background(200);
    let val = radio.value();
    if (val) {
      text('Order cost is $' + val, width / 2, height / 2);
      button.show();
    }
  }

  function jerseyMikesRoute() {
    console.log("Button clicked!");
    location.href = "index20.html";
  }