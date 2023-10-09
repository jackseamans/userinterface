let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('11.20', '1x Med Hook and Ladder');
    radio.option('17.15', '1x Large Firehouse Meatball w/ Extra Cheese');
    radio.option('11.95', '1x Med Club on a Sub');
    radio.style('width', '300px');
    radio.selected('2');
    textAlign(CENTER);

    button = createButton ('Continue to Route');
    button.hide();
    button.mousePressed(firehouseSubsRoute);
  }
  
  function draw() {
    background(200);
    let val = radio.value();
    if (val) {
      text('Order cost is $' + val, width / 2, height / 2);
      button.show();
    }
  }

  function firehouseSubsRoute() {
    console.log("Button clicked!");
    location.href = "index21.html";
  }