'use strict';

let itBeNight = () => {
	document.querySelector('html').classList.add('dark');
};

let itBeDay = () => {
	document.querySelector('html').classList.remove('dark');
};

function showResult(data) {
  const time = new Date(data.datetime);
  // const hour = dark(time.getHours());

  document.querySelector('.js-localtime').innerHTML = data.datetime;
  document.querySelector('.js-timezone').innerHTML = data.timezone
  document.querySelector('.js-time').innerHTML = data.utc_datetime;
  document.querySelector('.js-difference').innerHTML = data.utc_offset;

  var myVar = setInterval(getAPI, 1000);
};

const getAPI = async (timezone) => {
  const endpoint = `http://worldtimeapi.org/api/ip/timezone/${timezone}`;

  const request = await fetch(`${endpoint}`);
  const data = await request.json();
  console.log(data);

  showResult(data);
};

const darkModeControl = () => {
  const darkCheck = document.getElementById('night-light-checkbox');

  darkCheck.addEventListener('click', () => {
    if (darkCheck.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('animate-css', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('animate-css');
    }
  })

  if (localStorage.getItem('animate-css')) {
    document.body.className = 'dark';
    darkCheck.checked = true;
  }
}

function dark(uur){
  if (uur > 20) {
    itBeNight();
  } else if (uur < 7) {
    itBeNight();
  } else {
    itBeDay();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  getAPI('Europe/Brussels');
  darkModeControl();
});
