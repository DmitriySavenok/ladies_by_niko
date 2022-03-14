// Горизонтальное смещение фотографии на главном экране
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
