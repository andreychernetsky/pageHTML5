$(document).ready(function() {

	$(".news-c").click(function() {
		$(".news").stop().fadeToggle();
		$(".work, .sport, .music, .interesting").fadeOut(200);
	});

	$(".work-c").click(function() {
		$(".work").stop().fadeToggle('slov');
		$(".news, .sport, .music, .interesting").fadeOut(200);
	});

	$(".sport-c").click(function() {
		$(".sport").stop().fadeToggle('slov');
		$(".work, .news, .music, .interesting").fadeOut(200);
	});

	$(".music-c").click(function() {
		$(".music").stop().fadeToggle('slov');
		$(".work, .sport, .news, .interesting").fadeOut(200);
	});

	$(".interesting-c").click(function() {
		$(".interesting").stop().fadeToggle('slov');
		$(".work, .sport, .music, .news").fadeOut(200);
	});

});