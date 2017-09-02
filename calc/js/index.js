$(document).ready(function() {
	var currentInput = "";
	var operators = ["+", "-", "x", "÷"];
	var sum = false;
	var decimal = false;

	//push current input into history
	function pushToHistory() {
		if (currentInput.length > 20) {
			$(".history").text("too long :(");
		} else {
			$(".history").text(currentInput);
		}
	}

	//make number keys clickable and push to history
	$(".key").click(function() {
		currentInput += $(this).attr("value");
		pushToHistory();
		decimal = false;
		sum = false;
	});

	$(".sum").click(function() {
		//if currentinput is empty then replace the sum key with empty
		//so that you cant start with a sum
		if (
			(currentInput === "" && $(this).attr("value") === "x") ||
			(currentInput === "" && $(this).attr("value") === "+") ||
			(currentInput === "" && $(this).attr("value") === "÷")
		) {
			currentInput += $(this)
				.attr("value")
				.replace("x", "")
				.replace("+", "")
				.replace("÷", "");
			//but allow minus
		} else if (currentInput === "" && $(this).attr("value") === "-") {
			currentInput += $(this).attr("value");
			pushToHistory();
			//if a sum button is pressed, then dont allow it to be pressed again
			//until another button is pressed
		} else if (!sum) {
			currentInput += $(this).attr("value");
			pushToHistory();
		}
		sum = true;
		decimal = false;
	});

	$(".decimal").click(function() {
		//when decimal is pressed and current Input is empty
		//and a zero before it
		if (currentInput === "" && $(this).attr("value") === ".") {
			currentInput += $(this).attr("value").replace(".", "0.");
			pushToHistory();
		} else if (!decimal) {
			//only allow decimal to be pressed once until another button has been pressed
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
		var toHistory = toEquate.replace("*", "x").replace("/", "÷");
		$(".history").text(toHistory);
		if (toEquate.length > 14) {
			$(".result").text("too long :(");
		} else {
			var results = eval(toEquate);
			if (results.toString().indexOf(".") != -1) {
				results = results.toFixed(10);
				$(".result").text(results);
			} else {
				$(".result").text(results);
			}
		}
		decimal = false;
		sum = false;
		console.log(results);
	});

	//clear everything
	$(".clear").click(function() {
		$(".history").text("0");
		$(".result").text("0");
		currentInput = "";
		decimal = false;
		sum = false;
	});
});