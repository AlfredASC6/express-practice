
function setup () {
    createCanvas(400,400)
    background(51);

    socket.on('mouse', newDrawing);
}

function draw() {
    mouseDragged();
}

function newDrawing(data) {
    
    // if (mouseIsPressed) {
        noStroke();
        fill(255, 0, 100);
        ellipse(data.x, data.y, 16, 16)
        
    // }
}
function mouseDragged() {
    if (mouseIsPressed) {
        console.log('Sending:' +  mouseX +',' + mouseY);
        noStroke();
        fill(255);
        ellipse(mouseX, mouseY, 10, 10);
        let data = {
            x: mouseX,
            y: mouseY
        }
        socket.emit('mouse', data);
        
    }

}