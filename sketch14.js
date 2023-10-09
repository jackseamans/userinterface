let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('12.75', '1x 12 Inch Original Pepperoni Pizza');
    radio.option('14.00', '1x 10 Inch Super Hawaiian Pizza');
    radio.option('16.00', '2x 6 Piece Buffalo Wings');
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
    location.href = "index22.html";
  }