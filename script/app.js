function _parseMillisecondsIntoReadableTime(timestamp) {
	//Get hours from milliseconds
	const date = new Date(timestamp * 1000);
	// Hours part from the timestamp
	const hours = '0' + date.getHours();
	// Minutes part from the timestamp
	const minutes = '0' + date.getMinutes();
	// Seconds part from the timestamp (gebruiken we nu niet)
	// const seconds = '0' + date.getSeconds();

	// Will display time in 10:30(:23) format
	return hours.substr(-2) + ':' + minutes.substr(-2); //  + ':' + s
}


let itBeNight = () => {
	document.querySelector('html').classList.add('is-night');
};

let itBeDay = () => {
	document.querySelector('html').classList.remove('is-night');
};

var array = [];



// 3 Met de data van de API kunnen we de app opvullen
const showResult = (queryResponse) => {
    const localTime = document.querySelector('.js-localtime')
    const timeZone  = document.querySelector('.js-timezone')
    
    // We gaan eerst een paar onderdelen opvullen
    localTime.innerHTML = queryResponse.datetime
    timeZone.innerHTML = queryResponse.timezone
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