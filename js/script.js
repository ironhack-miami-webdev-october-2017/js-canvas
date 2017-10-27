// use normal DOM to get the canvas since we need some plain DOM methods
var canvas = document.querySelector('.my-game');
// -30 for border and margin
canvas.width = window.innerWidth - 30;


// get the context object (has methods to draw things)
var ctx = canvas.getContext('2d');

ctx.globalAlpha = 0.5;

          // x   y  width height
          // |   |    |    |
ctx.fillRect(20, 20, 100, 100);


ctx.globalAlpha = 0.90;

ctx.strokeRect(140, 40, 60, 60);

ctx.clearRect(40, 40, 60, 60);



// Paths - Draw specific lines

ctx.strokeStyle = 'orange';
ctx.fillStyle = 'indigo';


// start drawing lines
ctx.beginPath();

// move the pencil without drawing anything
ctx.moveTo(25, 75);
// draw a line straight down (x doesn't change)
ctx.lineTo(25, 90);
// draw a line straight right (y doesn't change)
ctx.lineTo(50, 90);

// diagonal line to the top right (x increases, y decreases)
ctx.lineTo(75, 65);

// close the shape
ctx.closePath();

ctx.stroke();




function deg (degreeNumber) {
    return (Math.PI / 180) * degreeNumber;
}


ctx.beginPath();

     // x   y radius        counter-clockwise
     // |   |   |                  |
ctx.arc(80, 30, 25, 0, deg(180), true);
       //           |       |
       //         start    end
       //             angles

ctx.stroke();


// WiFi Symbol exercise -------------------------------------------------------
// ----------------------------------------------------------------------------

// BOX OUTLINE
ctx.beginPath();
ctx.arc(500, 100, 50, deg(180), deg(270));  // top left corner
ctx.lineTo(700, 50);                        // top border
ctx.arc(700, 100, 50, deg(270), deg(360));  // top right corner
ctx.lineTo(750, 300);                       // right border
ctx.arc(700, 300, 50, 0, deg(90));          // bottom right corner
ctx.lineTo(500, 350);                       // bottom border
ctx.arc(500, 300, 50, deg(90), deg(180));   // bottom left corner
ctx.closePath();                            // right border
ctx.stroke();

// CIRCLE
ctx.beginPath();
ctx.arc(520, 275, 25, 0, deg(360));
ctx.fill();

// SMALL WAVE
ctx.beginPath();
ctx.arc(500, 300, 100, deg(270), deg(360));
ctx.lineTo(650, 300);
ctx.arc(500, 300, 150, deg(270), deg(360));
ctx.fill();





ctx.beginPath();
// LINE WIDTH - fatness of stroke lines
ctx.lineWidth = 30;
ctx.arc(800, 400, 40, deg(90), deg(270), true);
ctx.stroke();



// Gradient colors
// coordinates specify length and direction
                                // start coordinates
                                //         |    |
var myGradient = ctx.createLinearGradient(800, 300, 800, 700);
                                                //   |    |
                                                // end coordinates
// start with "#662D8C" (0)
myGradient.addColorStop(0, '#662D8C');
// end with "#662D8C" (1)
myGradient.addColorStop(1, '#ED1E79');

ctx.strokeStyle = myGradient;
ctx.fillStyle = myGradient;

ctx.fillRect(800, 300, 300, 300);

ctx.lineWidth = 30;
ctx.beginPath();
ctx.arc(800, 500, 40, 0, deg(45), true);
ctx.stroke();


// Text --------------------------------------------
// -------------------------------------------------
// Use "font" to specify size and font family
ctx.font = '40px "Comic Sans MS"';
// "fillText()" for solid texts
ctx.fillText('Hello, world!', 200, 300);

ctx.lineWidth = 10;
// "strokeText()" for outlined letters
ctx.strokeText('Horrible?', 200, 400);
// like all strokes, "strokeText()" is affected by "lineWidth"



// Images -------------------------------------
// --------------------------------------------

// create image object
var myDino = new Image();
// set its source URL
myDino.src = './images/dino.gif';

// only draw the image after it's finished loading
myDino.onload = function () {
                     // optional width and height to scale image
                     //              |     |
    ctx.drawImage(myDino, 200, 100, 100,  54);
};
