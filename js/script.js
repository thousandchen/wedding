$(function(){
	

	var w, h;


	$(window).on('resize', function() {
	    w = $(window).width();
		h = $(window).height();

		if( w > 960) {
			$('nav').css('height', '');
			$('nav, .nav').show();
		} else {
			$('nav, .nav').hide();
			$('#toggle').removeClass('on');
		}
	}).resize();


	$('#toggle').on('click', function(){
		$(this).toggleClass('on');

	    $('nav').css('height', $('#Document').height());
		$('nav').toggle();
	    $('.nav').slideToggle();
	});

	$('.note-wrap h3').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});

	//back top 
	$('.goTop').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$('.nav li a').on('click', function(event) {
		if( w < 961) {
			$('nav, .nav').hide();
			$('#toggle').removeAttr('class');
		}
		var _class = $(this).parent('li').attr('class');
		var _pos = $(this).attr('href');
		$('html, body').animate({scrollTop: $(_pos).position().top}, 800);

		// if(_class == 'n04') {
		// 	event.preventDefault();
		// 	var _pos = $(this).attr('href');
		// 	$('html, body').animate({scrollTop: $(_pos).position().top}, 800);
		// }
	});

	// $('.nav .n04').on({
	// 	'mouseenter': function(event) { $(this).css('background-color','#fc8200').find('a').html('敬請期待'); },
	// 	'mouseleave': function(event) { $(this).css('background-color','').find('a').html('得獎公告'); }
	// });

});