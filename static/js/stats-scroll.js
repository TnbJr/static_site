

$(document).ready(function() {
	$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	var stats = $('.stats-wrapper');
	var count = 0;

	var count_first_time = false
	

	$(window).on('resize scroll', _.throttle(
		function(){
			if( stats.isInViewport() && !count_first_time){
				count_first_time = true
				stats.addClass('fadeInUp');
				$('.cricle-number').each(function () {
				    $(this).prop('Counter',0).animate({
				        Counter: $(this).text()
				    }, {
				        duration: 4000,
				        easing: 'swing',
				        step: function (now) {
				            $(this).text(Math.ceil(now));
				        }
				    });
				});
			}
		}, 1000))
})

