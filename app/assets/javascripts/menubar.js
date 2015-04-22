function cssMenu() {
	$(window).on('scroll', function() {
    if ($(window).scrollTop() > 700) {
    	$('#cssmenu').css('top', '0px');
    	$('#cssmenu').css('position', 'fixed');
    } else if ($(window).scrollTop() < 700) {
    	$('#cssmenu').css('top', '700px');
    	$('#cssmenu').css('position', 'absolute');
    };
    for (i=0; i<5; i++) {
    	if ($(window).scrollTop() > 700*i && $(window).scrollTop() < 700*(i+1)) {
    		$('#cssmenu ul li').removeClass('active');
    		$('#cssmenu ul li:nth-child('+ (i+1) +')').addClass('active');
    	};
    };
	});
};
$(function(){cssMenu()});