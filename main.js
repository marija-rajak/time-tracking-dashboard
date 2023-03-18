const dayBtn = document.getElementById('day'); //button for daily display
const weekBtn = document.getElementById('week'); //button for weekly display
const monthBtn = document.getElementById('month'); //button for monthly display

const current = document.getElementsByClassName('current'); //collection of elements displaing current period data
const previous = document.getElementsByClassName('previous'); //collection of elements displaing previous period data

let dataArray;

//Gets data on loading page, setting daily button state to "active"
window.addEventListener('load', function () {
	getData();
	dayBtn.classList.add('active');
});

//Ataches funtionality to daily button and setting proper states to buttons (active/inactive)
dayBtn.addEventListener('click', function () {
	showData('daily');
	dayBtn.classList.add('active');
	weekBtn.classList.remove('active');
	monthBtn.classList.remove('active');
});

//Ataches funtionality to weekly button and setting proper states to buttons (active/inactive)
weekBtn.addEventListener('click', function () {
	showData('weekly');
	dayBtn.classList.remove('active');
	weekBtn.classList.add('active');
	monthBtn.classList.remove('active');
});


//Ataches funtionality to monthly button and setting proper states to buttons (active/inactive)
monthBtn.addEventListener('click', function () {
	showData('monthly');
	dayBtn.classList.remove('active');
	weekBtn.classList.remove('active');
	monthBtn.classList.add('active');
});


//Extracts data for selected period passed as an argument and writes them in card elements
function showData(time) {
	let newArray = dataArray.map(el => el.timeframes[time]);

	let timeMark = "Day"
	if (time === "monthly") {
		timeMark = "Month";
	} else if (time === "weekly") {
		timeMark = "Week"
	}

	for (let i = 0; i < newArray.length; i++){
		current[i].innerText = `${newArray[i].current}${hours(newArray[i].current)}`;
		previous[i].innerText = `Last ${timeMark} - ${newArray[i].previous}${hours(newArray[i].previous)}`;
	}
}

//Retrieve data from .json and set initial view to daily
function getData() {
	fetch('data.json')
		.then(function (resp) {
			return resp.json();
		})
		.then(function (data) {
			dataArray = data;
			showData('daily');
		});
}

//Write hr/hrs, depending on a number of hours
function hours(numberOfHours) {
	if (numberOfHours === 1) {
		return "hr";
	} else {
		return "hrs";
	}
}