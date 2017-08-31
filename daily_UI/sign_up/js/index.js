$("button").click(function() {
	$('.form').hide();	
	$(".hidden").show();
	$('.c').addClass('animated pulse');
});

$(".c").click(function() {
	$('.form').show();	
	$(".hidden").hide();
});