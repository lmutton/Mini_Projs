//need to add full functionality

//basic functionality complete
$(document).ready(function() {
	//set variables
	var temp = [];
	var equalsTemp = [];
	var equalsFinal = [];
	var history = $("#history");
	var result = $("#result");
	var equals = $("#equals");
	var clear = $("#clear");

	//value of key to add to history on each click
	$(".key").click(function() {
		history.val(history.val() + $(this).attr("value"));
		temp.push(history.val());
		if (temp.length >= 22) {
			history.val("Error");
		}
	});

	// to find the total of history and put it as result
	$(equals).click(function() {
		//push sum to a temporary array
		equalsTemp.push(eval(history.val()));
		//make the tempoary array into a string
		var numToStr = equalsTemp.toString();
		//push each number into a new array
		for (var i = 0; i < numToStr.length; i += 1) {
			equalsFinal.push(+numToStr.charAt(i));
		}
		if (equalsFinal.length > 15) {
			result.val("Error");
		} 		
		else {
			result.val(eval(history.val()));
		}
		
		
	});

	//clear both history and result, and put back to 0
	$(clear).click(function() {
		history.val("");
		result.val("0");
		temp = [];
		equalsTemp = [];
		equalsFinal = [];
	});

	//only allow 1 sum/decimal symbol
	//only allow ' - ' as first possible sum symbol
	//fix decimal to allow zero before it

	//bonus fix - change x to * and ÷ to /
});