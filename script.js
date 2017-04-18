(function() {
  // DOM elements / Canvas set up
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  // "global" variables
  var blue = "#5A9BD5",
      yellow = "#FFFF01",
      unit = 60,
      blueFactor = 5,
      yellowFactor = blueFactor/2;

  // rectangle maker!
  function rectangle(ctx, x, y, w, h, color) {
    context = ctx;
    context.fillStyle = color;
    context.beginPath();
    context.rect(x,y,w,h);
    context.closePath();
    context.fill();
  }

  // square makers! because squares are rectangles!
  rectangle(context, 0, 0, blueFactor*unit, blueFactor*unit, blue);
  rectangle(context, yellowFactor/2*unit, yellowFactor/2*unit, yellowFactor*unit, yellowFactor*unit, yellow);

})();
