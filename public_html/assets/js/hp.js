 function run() {
    var image = document.getElementById('background');
  //  var canvas = document.getElementById('canvas');
  //      canvas.height = window.height;
  //      canvas.width  = window.width;
    image.onload = function() {
    var engine = new RainyDay({ image: this });
    engine.rain([ [1, 2, 8000] ]); //adds 8000 drops of size 1
    engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100); //add drops of various sizes every 1 second
    };
     image.crossOrigin = 'anonymous';
     image.src = 'media/back.jpg';
 }
