//x = ancho de la imagen /2 y y = largo/2
var map = $('img');
var x = map.width() / 2;
var y = map.height() / 2;
var endColor = "000255";

var img = document.getElementById("map");
var cnvs = document.getElementById("myCanvas");

cnvs.style.position = "absolute";
cnvs.style.left = img.offsetLeft + "px";
cnvs.style.top = img.offsetTop + "px";

var ctx = cnvs.getContext("2d");
ctx.fillStyle = "#DC2137";
ctx.fillRect(x, y, 10, 10);
var pixelData = ctx.getImageData(x, y, 1, 1).data;

function draw(x, y) {
    ctx.fillStyle = "#DC2137";
    ctx.fillRect(x, y, 10, 10);
}

function erase() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, 10, 10);
}

function updatePixelData(x, y) {
    pixelData = ctx.getImageData(x, y, 1, 1);
}

function checkStep(x, y) {
    var nextStepColor = "#" + pixelData[0] + pixelData[1] + pixelData[2] + pixelData[3];
    alert(nextStepColor);
//    if (nextStepColor == endColor) {
//        alert("GAME OVER");
//    }
}

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 39) {
        moveRight();
    }

    if (e.keyCode == 37) {
        moveLeft();
    }

    if (e.keyCode == 38) {
        moveUp();
    }

    if (e.keyCode == 40) {
        moveDown();
    }
})

function moveUp() {
    erase();
    y = y - 1;
    checkStep();
    draw(x, y);
}

function moveDown() {
    erase();
    y = y + 1;
    draw(x, y);
}

function moveRight() {
    erase();
    x = x + 1;
    draw(x, y);
}

function moveLeft() {
    erase();
    x = x - 1;
    draw(x, y);
}





$(function() {

    $('img').mousemove(function(e) {

        if (!this.canvas) {
            this.canvas = $('<canvas />')[0];
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
        }

        var pixelData = this.canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
        $('#output').html('R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3]);
    });
});