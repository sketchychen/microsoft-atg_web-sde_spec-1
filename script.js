(function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  function rect(x, y, w, h) {
    context.beginPath();
    context.rect(x,y,w,h);
    context.closePath();
    context.fill();
  }

})();
