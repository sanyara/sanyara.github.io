// Загрузка видео из превью
// function loadVideo(el_id) {
//   $.post("/ajax/load_video.php", {ID: el_id},
//          function(data) {
//            $('.video-gallery .detailed .content').html(data);
//            console.log('loaded');
//            $('.video-gallery .detailed .content').fitVids();
//          }
//         );
// }

$(document).ready(function() {
  // Видеогалерея
  var videoSliderItems = $('.video-gallery .slider .item');

  if (videoSliderItems.length > 4) {
    $('.video-gallery .slider').append('<div class="controls clearfix"><div class="left"></div><div class="right"></div></div>');

    videoSliderItems.epSlider({
      leftControl  : '.video-gallery .slider .controls .left',
      rightControl : '.video-gallery .slider .controls .right',
      displayCount : 4,
      wrapperID    : 'ep-slider',
      slideSize    : 220
    });
  }

  $('.video-gallery .item').click(function() {
    loadVideo($(this).attr("data-id"));
    $('.video-gallery .item.selected').removeClass('selected');
    $(this).addClass('selected');
  }).eq(0).click();

  // Фотогалерея
  //




  var photoSliderItems = $('.photo-album .slider .item');
   if (photoSliderItems.length > 5) {
     $('.photo-album .slider').append('<div class="controls clearfix"><div class="left"></div><div class="right"></div></div>');

     photoSliderItems.epSlider({
       leftControl  : '.photo-album .slider .controls .left',
       rightControl : '.photo-album .slider .controls .right',
       displayCount : 5,
       wrapperID    : 'ep-slider',
       slideSize    : 160
     });
   }

   $('.photo-album .detailed .content img').load(function() {
     $(this).animate({'opacity': 1}, 'fast');
   });




   $('.photo-album .slider .item img').click(function() {

     $('.photo-album .slider .item.selected').removeClass('selected');
     var src = $(this).attr('data-src');
     $(this).parent().addClass('selected');
     $('.photo-album .detailed .content img').animate({'opacity': 0}, 'fast', function() {
       $(this).attr('src', src);
     });

     setTimeout(function() {
       $('.photo-album .detailed').parent().removeClass('hide-block');
       $('.photo-album .detailed').parent().addClass('show-block');
     }, 200);



   });

   var closeBtn = $('.btn-close').get(0);
   $(closeBtn).click(function() {
     $('.photo-album .detailed').parent().removeClass('show-block');
     $('.photo-album .detailed').parent().addClass('hide-block');
   });
  // Форма обратной связи
  // $('.feedback-open').click(function() {
  //   $('#feedback-form').arcticmodal();
  //   return false;
  // });

  // Подгон видео под ширину блока
  // $('.fitvids').fitVids();
});
// $(document).ready(function() {
// 	$('.fancybox_a').fancybox({
// 		'speedIn':600,
// 		'cyclic': true,
// 		'speedOut':200
// 	});
// });
