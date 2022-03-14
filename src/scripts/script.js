let isScroll = 0, // доп. проверка
    targetScroll = 10; // расстояние до действия / в px

var $width = $(window).width();

$(window).on('scroll', function(){
  if ($width > 760) {
    if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
      isScroll = 1;
      $('.navigation').addClass('navigation-tablet-background');
      console.info('change 1');
    } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
      isScroll = 0;
      $('.navigation').removeClass('navigation-tablet-background')
      console.info('change 0');
    }
  }
});

// Горизонтальное смещение
$.fn.moveIt = function(){
	var $window = $(window);
	var instances = [];

	$(this).each(function(){
		instances.push(new moveItItem($(this)));
	});

	window.addEventListener('scroll', function(){
		var scrollTop = $window.scrollTop();
		instances.forEach(function(inst){
			inst.update(scrollTop) + 550;
		});
	}, {passive: true});
}

var moveItItem = function(el){
	this.el = $(el);
	this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
	this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
};

$(function(){
	$('[data-scroll-speed]').moveIt();
});
