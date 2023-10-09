let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('18.11', '1x Dozen Donuts');
    radio.option('6.75', '1x Original Blend Iced Coffee, 1x Classic Donut');
    radio.option('6.92', '3x Classic Donut');
    radio.style('width', '300px');
    radio.selected('2');
    textAlign(CENTER);

    button = createButton ('Continue to Route');
    button.hide();
  }
  
  function draw() {
    background(200);
    let val = radio.value();
    if (val) {
      text('Order cost is $' + val, width / 2, height / 2);
      button.show();
    }
  }