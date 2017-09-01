//need to add full functionality

//basic functionality complete
$(document).ready(function() {
	var currentInput = "";
	var operators = ["+", "-", "x", "÷"];
	var sum = false;
	var decimal = false;

	function pushToHistory() {
		if (currentInput.length > 20) {
			$(".history").text("too long :(");
		} else {
			$(".history").text(currentInput);
		}
	}

	$(".key").click(function() {
		currentInput += $(this).attr("value");
		pushToHistory();
		decimal = false;
		sum = false;
	});

	$(".sum").click(function() {
		if (!sum) {
			currentInput += $(this).attr("value");
			pushToHistory();
		}
		sum = true;
		decimal = false;
	});

	$(".decimal").click(function() {
		if (!decimal) {
			currentInput += $(this).attr("value");
			pushToHistory();
		}
		decimal = true;
		sum = false;
	});

	$(".equals").click(function() {
		var toEquate = currentInput;
		var lastChar = toEquate[toEquate.length - 1];		
		//replace x and ÷ with * and / to get results
		toEquate = toEquate.replace(/x/g, "*").replace(/÷/g, "/");
		//if the last digit is a sum or decimal, replace with nothing
		if (operators.indexOf(lastChar) > -1 || lastChar == ".") {
			toEquate = toEquate.replace(/.$/, "");
		}

		//change history and result text
		var toHistory = toEquate.replace('*', 'x').replace('/', '÷');
		$(".history").text(toHistory);		
		if(toEquate.length > 15){
			$(".result").text("too long :(")
		}else{
		$(".result").text(eval(toEquate));
			}
		decimal = false;
		sum = false;
	});

	$(".clear").click(function() {
		$(".history").text("0");
		$(".result").text("0");
		currentInput = "";
		decimal = false;
		sum = false;
	});
});