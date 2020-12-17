function GetHoursAndMinutes(localTime) {
    const d = new Date();
    const h = '0' + d.getHours();
    const m = '0' + d.getMinutes();
    const s = '0' + d.getSeconds();
    return  h.substr(-2) + ":" + m.substr(-2) + ":" + s.substr(-2);
}

function GetListTimezones(timeZone) {
    var array = [];
    array.fill(timeZone.timezone);
    console.log(array)
}


let itBeNight = () => {
	document.querySelector('html').classList.add('is-night');
};

let itBeDay = () => {
	document.querySelector('html').classList.remove('is-night');
};

// 3 Met de data van de API kunnen we de app opvullen
const showResult = (queryResponse) => {
    const localTime = document.querySelector('.js-localtime')
    const timeZone  = document.querySelector('.js-timezone')
    const SelectedTime = document.querySelector(".js-time")
    const TimeDifference = document.querySelector(".js-difference")
    
    // We gaan eerst een paar onderdelen opvullen
    localTime.innerHTML = GetHoursAndMinutes(queryResponse.datetime)
    timeZone.innerHTML = GetListTimezones(queryResponse.timezone)
};


let getAPI = async(timezone) => {
    // Eerst bouwen we onze url op
    const endpoint = `https://worldtimeapi.org/api/ip/timezone/${timezone}`;

    // Met de fetch API proberen we de data op te halen..
    const request = await fetch(`${endpoint}`);
    const data = await request.json();
    // console.log(data);

    // Als dat gelukt is, gaan we naar onze showResult functie.
    showResult(data)
};


document.addEventListener('DOMContentLoaded', function() {
	getAPI("Europe/Brussels");
});