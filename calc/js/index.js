//need to add funcitonality


$(document).ready(function() {
	var history = $("#history");
	var result = $("#result");
	var equals = $("#equals");
	var clear = $("#clear");

	$(".key").click(function() {
		history.val(history.val() + $(this).attr("value"));
	});
	
	$(equals).click(function() {
		result.val(eval(history.val()));
	});
	
	$(clear).click(function() {
		history.val('')
		result.val('0');
	});
	
	
});