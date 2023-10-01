let button;

function setup() {
    createCanvas(800, 550);
    button = createButton('School');
    button.position(300, 500)
    button.mousePressed(goToSchool)
}

