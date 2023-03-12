const dayBtn = document.getElementById('day');
const weekBtn = document.getElementById('week');
const monthBtn = document.getElementById('month');

const daily = document.getElementsByClassName('daily');
const weekly = document.getElementsByClassName('weekly');
const monthly = document.getElementsByClassName('monthly');

let dataArray;

window.addEventListener('load', function () {
	getData();
	showDaily();
});
dayBtn.addEventListener('click', showDaily);
weekBtn.addEventListener('click', showWeekly);
monthBtn.addEventListener('click', showMonthly);

function showDaily() {
	for (let i = 0; i < daily.length; i++){
		daily[i].style.display = 'block';
	}
	for (let i = 0; i < weekly.length; i++){
		weekly[i].style.display = 'none';
	}
	for (let i = 0; i < monthly.length; i++){
		monthly[i].style.display = 'none';
	}

	dayBtn.classList.add('active');
	weekBtn.classList.remove('active');
	monthBtn.classList.remove('active');
}

function showWeekly() {
	for (let i = 0; i < daily.length; i++){
		daily[i].style.display = 'none';
	}
	for (let i = 0; i < weekly.length; i++){
		weekly[i].style.display = 'block';
	}
	for (let i = 0; i < monthly.length; i++){
		monthly[i].style.display = 'none';
	}

	dayBtn.classList.remove('active');
	weekBtn.classList.add('active');
	monthBtn.classList.remove('active');
}

function showMonthly() {
	for (let i = 0; i < daily.length; i++){
		daily[i].style.display = 'none';
	}
	for (let i = 0; i < weekly.length; i++){
		weekly[i].style.display = 'none';
	}
	for (let i = 0; i < monthly.length; i++){
		monthly[i].style.display = 'block';
	}

	dayBtn.classList.remove('active');
	weekBtn.classList.remove('active');
	monthBtn.classList.add('active');
}


function getData() {
	fetch('data.json')
		.then(function (resp) {
			return resp.json();
		})
		.then(function (data) {
			dataArray = data
		})
}