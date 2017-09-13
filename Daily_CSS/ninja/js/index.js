var blink = function (blink){
	var eyeLeft = document.getElementById('eye-l');
	var eyeRight = document.getElementById('eye-r');
	
	eyeLeft.className = 'closed-l';
	eyeRight.className = 'closed-r';
	
	setTimeout(function(){
		eyeLeft.className = 'eye-l';
		eyeRight.className = 'eye-r';		
	}, 200);	
}

window.onload = setInterval(blink, 2000);