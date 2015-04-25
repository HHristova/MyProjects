function Bubble(context, radius, canvas_width, canvas_height, x, y, opacity, moveSpeed, opacitySpeed) {

    //promenlifi
    this.context = context;
    this.radius = radius;
    this.canvas_width = canvas_width;
    this.canvas_height = canvas_height;
    this.x = x;
    this.y = y;
    this.opacity = opacity;
    this.moveSpeed = moveSpeed;
    this.opacitySpeed = opacitySpeed;

    this.diameter = this.radius * 2;

    //funkcii
    this.move = function () {
        //clear the rectangle around the bird
        //this.context.clearRect(this.x - this.radius - 1, this.y - this.radius, this.diameter + 2, this.diameter + 2);
        
        //this.context.clearRect(0, 0, this.canvas_width, this.canvas_height);
        
        this.y = this.y - this.moveSpeed;
        this.opacity = this.opacity - this.opacitySpeed;



        if (this.y < 0 - this.diameter || this.opacity <= 0) {
            this.y = this.canvas_height + randomNumber(10, 30);
            this.opacity = randomNumber(0.3, 0.9);
            this.opacitySpeed = randomNumber(0.0001, 0.002);
            this.moveSpeed = randomNumber(0.5, 1.5);
            this.x = randomNumber(0, this.canvas_width - this.diameter);
        }



        this.context.beginPath();
        this.context.lineWidth = 0.01;
        this.context.globalAlpha = this.opacity;
        this.context.fillStyle = "#9ea7b8";
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

        this.context.fill();
        this.context.stroke();

    };

}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}