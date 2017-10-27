function Tube (width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
}

Tube.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

Tube.prototype.resetIfPassed = function () {
    if (this.x <= -this.width) {
        this.x = canvas.width;
    }
};

Tube.prototype.crashWith = function (obj) {
    return getBottom(this) >= getTop(obj)    &&
           getTop(this)    <= getBottom(obj) &&
           getRight(this)  >= getLeft(obj)   &&
           getLeft(this)   <= getRight(obj);
};

function getTop(obj) {
  return obj.y;
}

function getBottom(obj) {
  return obj.y + obj.height;
}

function getLeft(obj) {
  return obj.x;
}

function getRight(obj) {
  return obj.x + obj.width;
}


var canvas = document.querySelector('.my-game');
canvas.width = window.innerWidth - 30;

var ctx = canvas.getContext('2d');


var flappyBox = {
    x: 0,
    y: 225,
    width: 50,
    height: 50,
    draw: function () {
        ctx.fillStyle = 'indigo';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

var myTubes = [
  new Tube(10, 100, 'green', 30, 0),
  new Tube(15, 85, 'green', 60, 0),
  new Tube(10, 50, 'green', 80, 450),
  new Tube(10, 100, 'tomato', 100, 400),
  new Tube(30, 200, 'green', 150, 0),
  new Tube(30, 200, 'green', 150, 300),
  new Tube(50, 300, 'tomato', 300, 200),
];


function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flappyBox.draw();

    // assume first that the game isn't over
    var isGameOver = false;

    // loop over all the tubes to update and draw each one
    myTubes.forEach(function (oneTube) {
        oneTube.draw();
        oneTube.x -= 0.5;
        oneTube.resetIfPassed();

        // if any tube crashes with flappy box, GAME OVER!
        if (oneTube.crashWith(flappyBox)) {
            isGameOver = true;
        }
    });

    // only continue to draw things if game isn't over
    if (!isGameOver) {
        requestAnimationFrame(draw);
    }
}

requestAnimationFrame(draw);



// ---------------------------------------------------------------------



$(document).ready(function () {
    $(document).keydown(function () {
        switch (event.keyCode) {
            case 37: // left arrow
                flappyBox.x -= 20;
                break;

            case 38: // up arrow
                flappyBox.y -= 20;
                break;

            case 39: // right arrow
                flappyBox.x += 20;
                break;

            case 40: // down arrow
                flappyBox.y += 20;
                break;
        } // switch
    }); // keydown
}); // document ready
