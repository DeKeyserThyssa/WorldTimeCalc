'use strict';

let itBeNight = () => {
	document.querySelector('html').classList.add('is-night');
};

let itBeDay = () => {
	document.querySelector('html').classList.remove('is-night');
};

// if (minutesSunUp > totalMinutes) {
//   clearInterval(t);
//   itBeNight();
// } else if (minutesSunUp < 0) {
//   itBeNight();
// } else {
//   itBeDay();
//   // Anders kunnen we huidige waarden evalueren en de zon updaten via de updateSun functie.
//   const now = new Date(),
//     left = (100 / totalMinutes) * minutesSunUp,
//     bottom = left < 50 ? left * 2 : (100 - left) * 2;

//   // PS.: vergeet weer niet om het resterend aantal minuten te updaten
//   updateSun(sun, left, bottom, now);

//   minutesLeft.innerText = totalMinutes - minutesSunUp;
//   minutesSunUp++; // en verhoog het aantal verstreken minuten.
// }


const GetHoursAndMinutes = () => {

}

// 3 Met de data van de API kunnen we de app opvullen

function showResult(data) {
  const date = new Date(data.datetime);

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // We gaan eerst een paar onderdelen opvullen
  document.querySelector('.js-localtime').innerHTML = `${hour} : ${minutes} : ${seconds}`;
  // document.querySelector('.js-localtime').innerHTML = queryResponse.datetime;
  // document.querySelector('.js-timezone').innerHTML = queryResponse.timezone;
  // document.querySelector('.js-time').innerHTML = queryResponse.utc_datetime;
  // document.querySelector('.js-difference').innerHTML = queryResponse.utc_offset;

  // var myVar = setInterval(getAPI, 10000);
};

const getAPI = async (timezone) => {
  // Eerst bouwen we onze url op
  const endpoint = `http://worldtimeapi.org/api/ip/timezone/${timezone}`;

  // Met de fetch API proberen we de data op te halen..
  const request = await fetch(`${endpoint}`);
  const data = await request.json();
  console.log(data);

  // Als dat gelukt is, gaan we naar onze showResult functie.
  showResult(data);
};

// function formatTime(time) {
//   if ( time < 10 ) {
//       return '0' + time;
//   }
//   return time;
// }

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var radius = canvas.height / 2;
// ctx.translate(radius, radius);
// radius = radius * 0.90
// setInterval(drawClock, 1000);

// function drawClock() {
//   drawFace(ctx, radius);
//   drawNumbers(ctx, radius);
//   drawTime(ctx, radius);
// }

// function drawFace(ctx, radius) {
//   var grad;
//   ctx.beginPath();
//   ctx.arc(0, 0, radius, 0, 2*Math.PI);
//   ctx.fillStyle = 'white';
//   ctx.fill();
//   grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
//   grad.addColorStop(0, '#333');
//   grad.addColorStop(0.5, 'white');
//   grad.addColorStop(1, '#333');
//   ctx.strokeStyle = grad;
//   ctx.lineWidth = radius*0.1;
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//   ctx.fillStyle = '#333';
//   ctx.fill();
// }

// function drawNumbers(ctx, radius) {
//   var ang;
//   var num;
//   ctx.font = radius*0.15 + "px arial";
//   ctx.textBaseline="middle";
//   ctx.textAlign="center";
//   for(num = 1; num < 13; num++){
//     ang = num * Math.PI / 6;
//     ctx.rotate(ang);
//     ctx.translate(0, -radius*0.85);
//     ctx.rotate(-ang);
//     ctx.fillText(num.toString(), 0, 0);
//     ctx.rotate(ang);
//     ctx.translate(0, radius*0.85);
//     ctx.rotate(-ang);
//   }
// }

// function drawTime(ctx, radius){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     //hour
//     hour=hour%12;
//     hour=(hour*Math.PI/6)+
//     (minute*Math.PI/(6*60))+
//     (second*Math.PI/(360*60));
//     drawHand(ctx, hour, radius*0.5, radius*0.07);
//     //minute
//     minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
//     drawHand(ctx, minute, radius*0.8, radius*0.07);
//     // second
//     second=(second*Math.PI/30);
//     drawHand(ctx, second, radius*0.9, radius*0.02);
// }

// function drawHand(ctx, pos, length, width) {
//     ctx.beginPath();
//     ctx.lineWidth = width;
//     ctx.lineCap = "round";
//     ctx.moveTo(0,0);
//     ctx.rotate(pos);
//     ctx.lineTo(0, -length);
//     ctx.stroke();
//     ctx.rotate(-pos);
// }

document.addEventListener('DOMContentLoaded', function () {
  getAPI('Europe/Brussels');
  // drawClock();
});
