$(".tab-text").click(function() {
	$(".wallet").animate({ marginLeft: "280px" }, 1000);
	$('.tab-text').hide();
	$('.hidden-text').show();
});

$(".hidden-text").click(function() {
	$(".wallet").animate({ marginLeft: "10px" }, 1000);
	$('.tab-text').show();
	$('.hidden-text').hide();
});