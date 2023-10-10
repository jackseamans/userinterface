let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('20.00', '1x Family Bundle');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.option('16.99', '1x Double Whopper Meal');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.option('7.98', '2x Onion Rings');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.style('width', '300px');
    radio.selected('2');
    textAlign(CENTER);

    button = createButton ('Continue to Route');
    button.hide();
    button.mousePressed(burgerKingRoute);
  }
  
  function draw() {
    background(200);
    let val = radio.value();
    if (val) {
      text('Order cost is $' + val, width / 2, height / 2);
      button.show();
    }
  }

  function burgerKingRoute() {
    console.log("Button clicked!");
    location.href = "index18.html";
  }