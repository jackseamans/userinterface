let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('6.99', '2x McDouble, 1x Lg Fry');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.option('9.49', '1x M Big Mac Meal w/ Coca-Cola');
    var div = createDiv();
    div.style('margin-bottom', '10px'); 
    div.parent(radio);
    radio.option('4.29', '1x L Sprite, 1x Lg Fry');
    var div = createDiv();
    div.style('margin-bottom', '10px');
    div.parent(radio);
    radio.style('width', '300px');
    radio.selected('2');
    textAlign(CENTER);
    
    button = createButton ('Continue to Route');
    button.hide();
    button.mousePressed(mcdonaldsRoute);
  }
  
  function draw() {
    background(200);
    let val = radio.value();
    if (val) {
      text('Order cost is $' + val, width / 2, height / 2);
      button.show();
    }
}

function mcdonaldsRoute() {
    console.log("Button clicked!");
    location.href = "index16.html";
  }