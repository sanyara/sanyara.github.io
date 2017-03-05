(function( $ ){
/*
options:

slides - селктор слайдов
slideSize - ширина одного слайда
direction - направление('horizontal, vertial')
displayCount - количетво видимых слайдов
loop - зациклен. false
name - уникальное в рамках страницы имя блока слайдера
containerClass - класс контейнар слайдов
container - селектор контейнера слайдов
leftControl - селектор кнопки вправо(вверх)
rightControl - селектор кнопки влево(вниз)
pause - промежуток между прокруткой для зацикленного слайдера
*/
  $.fn.epSlider = function(options) {
	var settings = $.extend( {
      'direction' : 'h',
	  'pause': 3000,
	  'loop': false,
	  'animateSpeed' : 500
    }, options);
	var slides = $(this);
	var left = $(settings.leftControl);
	var right = $(settings.rightControl);
	var container = $(this).parent();
	var slideClass = slides.attr('class');
	var sliderInterval;
	if(settings.loop) {
		sliderInterval = setInterval(function() {moveLeft()}, settings.pause);
	}
	//направление анимации
	var mt;
	var size;
	if(settings.direction == 'h') {
		mt = 'margin-left';
		size = 'width';
	}
	else if(settings.direction == 'v') {
		mt = 'margin-top';
		size = 'height';
	}

	container.css({
				  'padding' : 0,
				  'margin' : 0
	});
	// container.css(size, (settings.slideSize * slides.length))
	//Оборачиваем родителя

	container.wrapAll('<div class="epSliderWrap" id="'+settings.wrapperID+'"></div>');
	//Задаем размер родителя:
	var wrapper = $('#'+settings.wrapperID);
	wrapper.css({
		'overflow' : 'hidden',
		'position' : 'relative'
	});
	// wrapper.css(size, settings.slideSize*settings.displayCount);
	left.click(function() {moveLeft()});
	right.click(function() {moveRight()});
	//parent('')
	function moveLeft() {
		clearInterval(sliderInterval);
		var params = {};
		params[mt] = -1*settings.slideSize;
		container.animate(params, settings.animateSpeed, function() {
			$('.'+slideClass+':first').appendTo(container);
			container.css(mt, 0);
		});
		if(settings.loop) {
			sliderInterval = setInterval(function() {moveLeft()}, settings.pause+settings.pause);
		}
	};
	function moveRight() {
		clearInterval(sliderInterval);
		container.stop(true, true);
		var params = {};
		params[mt] = 0;
		$('.'+slideClass+':last').prependTo(container);
		container.css(mt, -1*settings.slideSize);
		container.animate(params, settings.animateSpeed);
		if(settings.loop) {
			sliderInterval = setInterval(function() {moveLeft()}, settings.pause+settings.pause);
		}
	}
  };
})( jQuery );
