const dayBtn = document.getElementById('day');
const weekBtn = document.getElementById('week');
const monthBtn = document.getElementById('month');

const current = document.getElementsByClassName('current');
const previous = document.getElementsByClassName('previous');

let dataArray;

window.addEventListener('load', function () {
	getData();
	dayBtn.classList.add('active');
});
dayBtn.addEventListener('click', function () {
	showData('daily');
	dayBtn.classList.add('active');
	weekBtn.classList.remove('active');
	monthBtn.classList.remove('active');
});
weekBtn.addEventListener('click', function () {
	showData('weekly');
	dayBtn.classList.remove('active');
	weekBtn.classList.add('active');
	monthBtn.classList.remove('active');
});
monthBtn.addEventListener('click', function () {
	showData('monthly');
	dayBtn.classList.remove('active');
	weekBtn.classList.remove('active');
	monthBtn.classList.add('active');
});

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

function hours(numberOfHours) {
	if (numberOfHours === 1) {
		return "hr";
	} else {
		return "hrs";
	}
}