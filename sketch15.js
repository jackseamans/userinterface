let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('13.75', '1x Med Pizza w/ Sausage, Mushrooms');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.option('16.98', '1x Lg Hawaiian Pizza');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.option('42.27', '50x Marinara Dipping Sauce');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
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
    location.href = "index23.html";
  }