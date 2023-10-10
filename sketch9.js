let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('4.75', '1x Caffé Latte');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.option('5.15', '1x Iced Caffé Latte');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.option('4.55', '1x Iced Shaken Espresso ');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.style('width', '300px');
    radio.selected('2');
    textAlign(CENTER);

    button = createButton ('Continue to Route');
    button.hide();
    button.mousePressed(starbucksRoute);
  }
  
  function draw() {
    background(200);
    let val = radio.value();
    if (val) {
      text('Order cost is $' + val, width / 2, height / 2);
      button.show();
    }
  }

  function starbucksRoute() {
    console.log("Button clicked!");
    location.href = "index17.html";
  }