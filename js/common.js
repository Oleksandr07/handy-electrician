$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();

	$('input[type="tel"]').mask("+7 (999) 999-99-99");

	$(window).scroll(function(){
		$('.house-tip').tooltipster('hide');
	})

	$('.house-tip').tooltipster({
		maxWidth: 250,
		position: 'top-left',
		trigger: 'click',
		theme: 'tooltipster-noir',
	});

	//------------------    menu scroll    -------------------------------

	$('.top_menu li a.subNavBtn').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top},800);
		return false;
	});

    function setNavCurrentSection(){
		var s_top=$(document).scrollTop();
		// var w_hgh=window.innerHeight;
		// var b_hgh=$('body').outerHeight();
		// var cur_sect=$('.top_menu li a.subNavBtn').eq(0);
		// $('.top_menu li a.subNavBtn').each(function(){if((w_hgh/3+s_top)>$($(this).attr('href')).offset().top){cur_sect=$(this);}});
		// if((s_top+w_hgh+500)>b_hgh){cur_sect=$('.top_menu li a.subNavBtn').last();}
		// if(!cur_sect.hasClass('active')){$('.top_menu li a.subNavBtn.active').removeClass('active');cur_sect.addClass('active');}
		if(s_top>0) {$('.top_menu').addClass('fixed');}
		else{$('.top_menu').removeClass('fixed');}
	}

	setNavCurrentSection();
	$(window).on('load',function(){
		setNavCurrentSection();
	});
	$(window).resize(function(){
		setNavCurrentSection();
	});
	$(document).on('scroll',function(){
		setNavCurrentSection();
	});

	$('.questions-title').click(function() {
		var $parent = $(this).parents('.questions-box');
		if (!$parent.hasClass('active')) {
			$('.questions-box').removeClass('active');
			$parent.addClass('active');
			$('.questions-box').find('.questions-text').slideUp(300)
			$parent.find('.questions-text').slideDown(300);
		} 
		else {
			$parent.removeClass('active');
			$parent.find('.questions-text').slideUp(300)
		}
	});

	$('.certificates-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});


});