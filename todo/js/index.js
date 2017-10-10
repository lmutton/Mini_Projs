const textInput = document.querySelector(".text-bar");
const addItem = document.querySelector(".btn");
//get the date and show at the top of the to do list!
function showDate(){
let date = new Date();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let currentDay = date.getDay();
let suffix = "";
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday ', 'Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday '];

switch(currentDate) {
        case 1: case 21: case 31: suffix = 'st'; break;
        case 2: case 22:          suffix = 'nd'; break;
        case 3: case 23:          suffix = 'rd'; break;
        default:                  suffix = 'th';
    }
	
	document.getElementById('day-name').innerHTML = days[currentDay];
	document.getElementById('day-date').innerHTML = currentDate + suffix;
	document.getElementById('month').innerHTML = months[currentMonth];
}
window.onload = showDate;

function addItems(){
	if(textInput.value === ''){
		return;
	}else{
		//do thing
	}
}
addItem.addEventListener('click', addItems);