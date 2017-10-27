var canvas = document.querySelector('.my-game');
canvas.width = window.innerWidth - 30;

var ctx = canvas.getContext('2d');

var ghostImage = new Image();
ghostImage.src = './images/ghost.gif';
ghostImage.onload = function () {
    myGhost.isLoaded = true;
};

var myGhost = {
  x: 0,
  y: 0,
  isLoaded: false,
  image: ghostImage,
  draw: function () {
      if (this.isLoaded) {
          ctx.drawImage(this.image, this.x, this.y, 50, 50);
      }
  }
};

var myCircle = {
  x: 200,
  hue: 0,
  speed: 1,
  update: function () {
      // change the variables to change the scene
      this.hue = (this.hue + 1) % 360;
      this.x += this.speed;

      if (this.speed < 25) {
        this.speed += 0.1;
      }

      // reset it back the left if its off screen
      if (this.x > canvas.width + 200) {
          this.x = -200;
      }
  }
};

function draw () {
  // clear the entire canvas to remove the old shapes
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  myCircle.update();

  // redraw the scene with the updated variables
  ctx.beginPath();
  ctx.arc(myCircle.x, 200, 100, 0, Math.PI * 2);
  ctx.fillStyle = 'hsl(' + myCircle.hue + ', 100%, 50%)';
  ctx.fill();
  ctx.stroke();

  myGhost.draw();

  // continue the animation loop
  requestAnimationFrame(draw);
}

// start the animation loop
requestAnimationFrame(draw);


$(document).ready(function () {
    $(document).keydown(function () {
        switch (event.keyCode) {
            case 37: // left arrow
                myGhost.x -= 20;
                break;

            case 38: // up arrow
                myGhost.y -= 20;
                break;

            case 39: // right arrow
                myGhost.x += 20;
                break;

            case 40: // down arrow
                myGhost.y += 20;
                break;
        } // switch
    }); // keydown
}); // document ready

// 30 frames per second
// setInterval(draw, 1000 / 30);
