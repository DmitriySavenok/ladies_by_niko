// let isScroll = 0, // доп. проверка
//     targetScroll = 10; // расстояние до действия / в px

// $(window).on('scroll', function(){
//   if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
//     isScroll = 1;
//     $('.photo-main').removeClass('photo-position-from')
//     $('.photo-main').addClass('photo-position-to');
//     console.info('change 1');
//   } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
//     isScroll = 0;
//     $('.photo-main').removeClass('photo-position-to')
//     $('.photo-main').addClass('photo-position-from')
//     console.info('change 0');
//   }
// });

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
