
const url = 'http://api.openweathermap.org/data/2.5/weather?q=oulu&appid=YOUR_API_KEY&units=metric'
const API_key = 'YOUR_API_KEY'
const icon_url = 'http://openweathermap.org/img/wn/'

const temp_span = document.querySelector('#temp')
const speed_span = document.querySelector('#speed')
const direction_span = document.querySelector('#direction')
const description_span = document.querySelector('#description')

const getLocation =() => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			document.querySelector('#lat').innerHTML = position.coords.latitude.toFixed(3) + ' , '
			document.querySelector('#lon').innerHTML = position.coords.longitude.toFixed(3)
		}),(error => {
			alert(error)
		})
	}else {
		alert("Your browser does no support geolocation!")
	}
}

const getWeather = (lat,lon) => {
	const address = url +
	//'lat=' + lat +
	//'&lon=' + lon +
	'&units=metric' +
	'&appid=' + API_key
	axios.get(address)
	.then(response => {
		const json = response.data
		temp_span.innerHTML = json.main.temp + '&#8451;'
		speed_span.innerHTML = json.wind.speed + ' m/s'
		direction_span.innerHTML = json.wind.deg + '&#176;'	
		description_span.innerHTML = json.weather[0].description		
		const image = icon_url + json.weather[0].icon + '@2x.png';
		weatherIcon.setAttribute('src',image);
	}).catch(error => {
		alert(error)
	})
}

getLocation();
getWeather(lat,lon);




	


	


