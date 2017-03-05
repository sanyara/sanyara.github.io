
$(document).ready(function() {
  $("#carousel-1, #carousel-2").swiperight(function() {
    $(this).carousel('prev');
  });
  $("#carousel-1, #carousel-2").swipeleft(function() {
    $(this).carousel('next');
  });
});
/*
  $(document).ready(function() {
    //Enable swiping...
    $(".carousel-inner").swipe( {
    //Generic swipe handler for all directions
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
        $(this).parent().carousel('prev');
      },
      swipeRight: function() {
        $(this).parent().carousel('next');
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold:0
    });
  });
 */


//stackblur
//StackBlur.image("myImg", "canvas", blur);
$(window).load(function() {
  var blur = 15;


  var serviceList = document.querySelector('.services__list');
  var serviceItem = serviceList.querySelectorAll('.services__list-item');
  var serviceImgs = serviceList.querySelectorAll('img');

  //var serviceCanvas = serviceList.querySelectorAll('canvas');

  for(var i = 0; i < serviceImgs.length; i++) {
    try {
      var serviceCanvas = document.createElement('canvas');
      serviceCanvas.classList.add('blured');
      serviceItem[i].appendChild(serviceCanvas);
      serviceCanvas.setAttribute('data-object-fit','cover');
      StackBlur.image(serviceImgs[i], serviceCanvas, blur);
      serviceCanvas.style.cssText = '';
    }
    catch(err) {
      continue;
    }
  }
});
