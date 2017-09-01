//need to add full functionality

//basic functionality complete
$(document).ready(function() {

	var currentInput = "";
	var operators = ["x", "-", "/", "*"];

	function pushToHistory() {
		if (currentInput.length > 20) {
			$(".history").text("Error");
		} else {
			$(".history").text(currentInput);
			console.log(currentInput);
		}
	}
	
	function checkForSum(){
		
	}
	
	$(".key").click(function() {
		currentInput += $(this).attr("value");
		pushToHistory();
	});
	
	$(".sum").click(function() {
		currentInput += $(this).attr("value");
		pushToHistory();
	});
	
	$(".decimal").click(function() {
		currentInput += $(this).attr("value");
		pushToHistory();
	});
	
	$(".equals").click(function() {
		$(".result").text(eval(currentInput));	
	});
	
	$(".clear").click(function() {
		$(".history").text('0');
		$(".result").text('0');
		currentInput = '';
	});
	
});