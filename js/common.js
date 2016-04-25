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

	/*--------------------------------          top-menu            ------------------------------------*/
	$('.top-menu li a.subNavBtn').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top},800);
		return false;
	});

    function setNavCurrentSection(){
		var s_top=$(document).scrollTop();
		// var w_hgh=window.innerHeight;
		// var b_hgh=$('body').outerHeight();
		// var cur_sect=$('.top-menu li a.subNavBtn').eq(0);
		// $('.top-menu li a.subNavBtn').each(function(){if((w_hgh/3+s_top)>$($(this).attr('href')).offset().top){cur_sect=$(this);}});
		// if((s_top+w_hgh+500)>b_hgh){cur_sect=$('.top-menu li a.subNavBtn').last();}
		// if(!cur_sect.hasClass('active')){$('.top-menu li a.subNavBtn.active').removeClass('active');cur_sect.addClass('active');}
		if(s_top>0) {$('.top-menu').addClass('fixed');}
		else{$('.top-menu').removeClass('fixed');}
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

	/*--------------------------------          questions            ------------------------------------*/
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

	/*--------------------------------          SVG like            ------------------------------------*/
	function like(){
		if ($(window).width() < 1200) {
			$('#like').attr('x', '884');
		}
		else{
			$('#like').attr('x', '970');
		}
	}
	$(window).resize(function(event) {
		like();
	});
	like()
	

	/*--------------------------------          video player            ------------------------------------*/
	$('.video-1').mediaelementplayer({
    	// videoWidth: 940,
    	// videoHeight: 580,
		features: ['progress','postroll']
	});
	$('.video-2').mediaelementplayer({
		// videoWidth: 570,
  //   	videoHeight: 380,
		features: ['progress','postroll']
	});
	$('.video-3').mediaelementplayer({
		videoWidth: 470,
    	videoHeight: 315,
		features: ['progress','postroll']
	});

	/*--------------------------------          slider            ------------------------------------*/
	$('.certificates-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 			settings: {
		// 			slidesToShow: 3,
		// 			slidesToScroll: 3,
		// 			infinite: true,
		// 			dots: true
		// 		}
		// 	}
		// ]
	});

	/*--------------------------------          lamp animation            ------------------------------------*/
	var waypoints = $('.lamp').waypoint(function(direction){
		$('#' + this.element.id).addClass('active')
	},{
		offset: 'bottom-in-view'
	});
	var waypoints = $('.lamp').waypoint(function(direction){
		$('#' + this.element.id).removeClass('active')
	},{
		offset: '-20%'
	});
	var waypoints = $('.lamp').waypoint(function(direction){
		$('#' + this.element.id).addClass('active')
	},{
		offset: '0%'
	});
	var waypoints = $('.lamp').waypoint(function(direction){
		$('#' + this.element.id).removeClass('active')
	},{
		offset: '100%'
	});

	/*--------------------------------          snake animation            ------------------------------------*/
	var waypoints = $('#snake').waypoint(function(direction){
		$('#' + this.element.id).addClass('active')
	},{
		offset: '50%'
	});
	var waypoints = $('#snake').waypoint(function(direction){
		$('#' + this.element.id).removeClass('active')
	},{
		offset: '100%'
	});



});