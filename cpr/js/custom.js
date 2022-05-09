$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	


});
if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10,
           
		});
	};
if($('.fifth-container__slider-js').length) {
		$('.fifth-container__slider-js').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			arrows: false,
            responsive: [
    
    
         {
      breakpoint: 1024,
      settings: {
       slidesToShow: 1,
        centerMode: false
      }
    },
        ]
		});
  
	};
if($('.first-right__scroll-js').length) {
		$(".first-right__scroll-js").mCustomScrollbar({
			axis:"y",
			theme:"dark-thin",
		  scrollbarPosition: "outside",
            
		
		});
	};
if($('.third-container__slider-js').length) {
 $('.third-container__slider-js').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
     fade: true,
     speed:600,
     asNavFor: '.third-container__slider-for-js'
});
}
if($('.eight-container__slider-js').length) {
     $('.eight-container__slider-js').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
         variableWidth: true,
     speed:600,
infinite: true,
         responsive: [
    {
      breakpoint: 1279,
      settings: {
       slidesToShow: 3,
          variableWidth: false,
      }
    },
             {
      breakpoint: 901,
      settings: {
       slidesToShow: 1,
          variableWidth: false,
          centerPadding: '200px'
      }
    },
             
             {
      breakpoint: 700,
      settings: {
       slidesToShow: 1,
          variableWidth: false,
          centerPadding: '100px'
      }
    },
                 {
      breakpoint: 500,
      settings: {
       slidesToShow: 1,
          variableWidth: false,
          centerPadding: '50px'
      }
    },
                      {
      breakpoint: 421,
      settings: {
       slidesToShow: 1,
          variableWidth: false,
          centerPadding: '0',
          centerMode: false
      }
    },
     
        ]
});
}
if($('.eight-letter__slider-js').length) {
     $('.eight-letter__slider-js').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
 
       
     speed:600,
infinite: true,
         arrows: false,
          responsive: [
    {
      breakpoint: 700,
      settings: {
       slidesToShow: 4,
          variableWidth: false,
      }
    },
               {
      breakpoint: 550,
      settings: {
       slidesToShow: 3,
          variableWidth: false,
      }
    },
                      {
      breakpoint: 390,
      settings: {
       slidesToShow: 2,
          variableWidth: false,
      }
    },
              
              ]
         
});
}
setTimeout(function(){
    $('.third-container__img.slick-center').prev('.third-container__img').addClass('fade')
    $('.third-container__img.slick-center').prev('.third-container__img').prev('.third-container__img').addClass('fade2')
},50)


$('.third-container__slider-for-js').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setTimeout(function(){
                $('.third-container__img').removeClass('fade')
        $('.third-container__img').removeClass('fade2')
    $('.third-container__img.slick-center').prev('.third-container__img').addClass('fade')
        $('.third-container__img.slick-center').prev('.third-container__img').prev('.third-container__img').addClass('fade2')
               },50)
   
    
})

if($('.third-container__slider-for-js').length) {
$('.third-container__slider-for-js').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.third-container__slider-js',
  dots: true,
    speed: 600,
   arrows: false,
  centerMode: true,
   
    infinite: true,
    responsive: [
    {
      breakpoint: 1279,
      settings: {
       slidesToShow: 3,
      }
    },
         {
      breakpoint: 1024,
      settings: {
       slidesToShow: 2,
          centerPadding: '100px'
      }
    },
          {
      breakpoint: 768,
      settings: {
       slidesToShow: 2,
          centerPadding: 0,
          centerMode: false,
          
      }
    },
          {
      breakpoint: 450,
      settings: {
       slidesToShow: 1,
          centerPadding: 0,
          centerMode: false,
          
      }
    },
        
        ]
});
}
if($('.six-right__list-js').length){
    $('.six-right__list-js').slick({
         slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
     dots: true,
     speed:600,
        
    })
}
$('.first-right__scroll-js li').each(function(){
    var count = $( this ).index() + 1;
    if($(this).index() >= 9){
        $(this).find('.first-right__count').text(count)
    }
    else if($(this).index() < 10){
        $(this).find('.first-right__count').text('0' + count)
    }
    
})
var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 1279) {

	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
(function() {
    /**
     * Корректировка округления десятичных дробей.
     *
     * @param {String}  type  Тип корректировки.
     * @param {Number}  value Число.
     * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
     * @returns {Number} Скорректированное значение.
     */
    function decimalAdjust(type, value, exp) {
        // Если степень не определена, либо равна нулю...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Если значение не является числом, либо степень не является целым числом...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Сдвиг разрядов
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Обратный сдвиг
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Десятичное округление вверх
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();

function fontSize() {
    var width = 1920; // ширина, от которой идет отсчет
    var fontSize = 10; // минимальный размер шрифта
    var scale = 1; // минимальный размер шрифта    
    var bodyWidth = $('html').width();

    var multiplier = bodyWidth / width;
    var fontSizeCalc = Math.ceil10(fontSize * multiplier, -2);
   
    $('html').css({fontSize: fontSizeCalc+'px'});    
   
}
function fontSize2() {
    var width = 1023; // ширина, от которой идет отсчет
    var fontSize = 10; // минимальный размер шрифта
    var scale = 1; // минимальный размер шрифта    
    var bodyWidth = $('html').width();

    var multiplier = bodyWidth / width;
    var fontSizeCalc = Math.ceil10(fontSize * multiplier, -2);
   
    $('html').css({fontSize: fontSizeCalc+'px'});    
   
}


$(function() {
    
    var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid > 1023) {
		fontSize(); 
	} else{
        fontSize2(); 
    }
    
});
$(window).resize(function() { 
    var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid > 1023) {
		fontSize(); 
	} else{
        fontSize2(); 
    }
});
$(window).load(function() { 
    var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid > 1023) {
		fontSize(); 
	} else{
        fontSize2(); 
    }
});



jQuery(function($){

$(".dots-nav-js").viewportChecker({
    offset: '45%',
    repeat: true,
    callbackFunction: function(elem, action){
        active()
    }
    
});

});

function active(){
    if($('.dots-nav-js').hasClass('visible') == true){
    $(".navigation-dots__list").addClass('white')
        $('.arrow-down').addClass('white')
}
    else{
        $(".navigation-dots__list").removeClass('white')
        $('.arrow-down').removeClass('white')
    }
    
   
}



var map;
      function initMap() {
		  var myLatLng = {lat: 59.718973, lng: 30.408076};
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 16,
            disableDefaultUI: true
        });
		  var marker = new google.maps.Marker({
    		position: myLatLng,
              
			map: map,
    		icon:'img/map-marker.png',
			 title: 'г. Санкт-Петербург, ул. Московская 27а'
  		});
	
		
      }

if($('#nav').length){
    $('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});

}



/*rent power*/


if($('.rent-slider-js').length) {
		$('.rent-slider-js').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: false,
			arrows: false,
            variableWidth: true,
            responsive: [
    
    
         {
      breakpoint: 768,
      settings: {
       slidesToShow: 1,
        centerMode: false,
          variableWidth: false,
      }
    },
        ]
		});
  
	};
/*end rent power */

/*command*/

if($('.team-document__slider-js').length) {
$('.team-document__slider-js').slick({
  slidesToShow: 5,
  slidesToScroll: 1,

  dots: false,
  speed: 600,
  centerMode:true,
  arrows: false,
  variableWidth:true,
  autoplaySpeed: 10000,
  autoplay: true,
    infinite: true
  
});
}
$('.team-document__slider-js').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setTimeout(function(){
        $('.team-document__item').removeClass('fade')
        $('.team-document__item').removeClass('fade2')
        $('.team-document__item').removeClass('fade3')
        $('.team-document__item.slick-center').prev('.team-document__item').addClass('fade')
        $('.team-document__item.slick-center').prev('.team-document__item').prev('.team-document__item').addClass('fade2')
        $('.team-document__item.slick-center').prev('.team-document__item').prev('.team-document__item').prev('.team-document__item').addClass('fade3')
    },50)
   
    
})
setTimeout(function(){
   $('.team-document__item.slick-center').prev('.team-document__item').addClass('fade')
        $('.team-document__item.slick-center').prev('.team-document__item').prev('.team-document__item').addClass('fade2')
        $('.team-document__item.slick-center').prev('.team-document__item').prev('.team-document__item').prev('.team-document__item').addClass('fade3')
},50)


/*end command*/