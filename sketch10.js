let button;

function setup() {
    createCanvas(200, 50);

    radio = createRadio();
    radio.option('20.00', '1x Family Bundle');
    radio.option('16.99', '1x Double Whopper Meal');
    radio.option('7.98', '2x Onion Rings');
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