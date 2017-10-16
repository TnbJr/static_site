$(document).ready(function() {
	var dropDown = $('.dropdown-icon a')
	dropDown.on('click', function(){
		var listItem = $('.nav-item').toggle()
	})

    $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        navigation : true,
        margin: 5,
        dots: false,
        navText: ['<img src="/img/ico-arrow-left-gray.png"/>','<img src="/img/ico-arrow-right-red.png"/>'],

        responsive:{
            0:{
                items:1,
                nav:true
            },
            700:{
                items:3,
                nav:true,
                responsiveClass: false
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        },
        onTranslated: function(){
            // console.log("kk")
            if( $('.owl-carousel .owl-item').last().hasClass('active')){
                 $('.owl-next img').attr("src", "/img/ico-arrow-right-gray.png")
                 $('.owl-prev img').attr("src", "/img/ico-arrow-left-red.png")
                console.log('true');
             }else if( $('.owl-carousel .owl-item').first().hasClass('active') ){
                  $('.owl-next img').attr("src", "/img/ico-arrow-right-red.png")
                 $('.owl-prev img').attr("src", "/img/ico-arrow-left-gray.png")
             }
        }
    });
})




