var w = window.innerWidth;
var h = window.innerHeight;

$("#main-canvas").attr("width", w);
$("#main-canvas").attr("height", h);


var main_canvas = document.getElementById("main-canvas");

var main_context = main_canvas.getContext("2d");


var canvas_height = main_canvas.height;
var canvas_width = main_canvas.width;

var bubbles = Array();

for (var i = 0; i < 50; i++) {
    bubbles.push(new Bubble(main_context, randomNumber(6, 20), canvas_width, canvas_height, randomNumber(0, canvas_width - 30), randomNumber(canvas_height, canvas_height + 30), randomNumber(0.5, 0.9), randomNumber(0.5, 1.5), randomNumber(0.0001, 0.002)));
}

var bubble = new Bubble(main_context, 20, canvas_width, canvas_height, 500, 500, 0.5, 1, 0.001);

function animate() {
    requestAnimFrame(animate);
    main_context.clearRect(0, 0, canvas_width, canvas_height);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
    }

}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();



animate();