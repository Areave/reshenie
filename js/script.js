$(document).ready(function() {
	$('input[type=radio], select, input[type=checkbox], input.quantity').styler();
	$("[data-fancybox=images]").fancybox({
		buttons: [
        "close"
		]
	});
	$("[data-type=inline]").fancybox({
		buttons: [],
		touch:false,
		btnTpl: {
		 smallBtn:
            '<button data-fancybox-close="" class="fancybox-close-small" title="Закрыть"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
		},
		
	});	
	$("[data-type=ajax]").fancybox({
		buttons: [],
	});
	$('.aboutSlider').slick({
	  centerMode: false,
	  centerPadding: '0',
	  dots: false,
	  autoplay: false,
	  autoplaySpeed: 4500,
	  speed: 800,
	  arrows: false,
	  prevArrow:'<div class="slick-prev slick-arrow"></div>',
	  nextArrow:'<div class="slick-next slick-arrow"></div>',
      fade: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  touchThreshold:10,
	  swipeToSlide:true,
	  variableWidth: true,
	  swipeToSlide:true,
	  infinite: false,
	  waitForAnimate:false,
	  adaptiveHeight: true,
	  responsive: [
		{
		  breakpoint: 1400,
		  settings: {
			centerMode: false,
			centerPadding: '0',
			slidesToShow: 2,
			adaptiveHeight: true,
		  }
		},
		{
		  breakpoint: 1279,
		  settings: {
			centerMode: false,
			centerPadding: '0',
			adaptiveHeight: true,
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 800,
		  settings: {
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 1,
			arrows: false,
			adaptiveHeight: true
		  }
		}
	  ]
	});
	//Tolltip
	$('.liveItem a.liveLink').mousemove(function(e) {
		var x = e.clientX + 30,
		y = e.clientY + 30;
		$(this).parent().find('.liveImg').css({'top':y+'px',"left":x+"px"}).fadeIn('fast');
	})
	.mouseleave(function() {
		$(this).parent().find('.liveImg').fadeOut('fast');
	});
	$('.reviewLogos a').click(function (e) {
		e.preventDefault();
		var link = $(this).attr('href');
		$('.reviewLogos a').removeClass('active');
		$(this).addClass('active');
		$('.reviewTxt_box').slideUp('fast').removeClass('active');
		$(link).slideDown('fast').addClass('active');
	});
	//Move
	$.fn.visible = function(partial) {
		
		  var $t            = $(this),
			  $w            = $(window),
			  viewTop       = $w.scrollTop(),
			  viewBottom    = viewTop + $w.height(),
			  _top          = $t.offset().top,
			  _bottom       = _top + $t.height(),
			  compareTop    = partial === true ? _bottom : _top,
			  compareBottom = partial === true ? _top : _bottom;
		
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

		};

		var win = $(window);

		var allMods = $(".caseItem, .articleItem");

		allMods.each(function(i, el) {
		  var el = $(el);
		  if (el.visible(true)) {
			el.addClass("already-visible"); 
		  } 
		});
		
		win.scroll(function(event) {
			allMods.each(function(i, el) {
				var el = $(el);
				if (el.visible(true)) {
					 el.addClass("come-in"); 
				} 
			});
		});
});