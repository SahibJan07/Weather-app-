# Weather-app-
this is a weather app can anyone help me fix these issues in it 


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5627d3774mshbf0a8dad7bc657cp176d1bjsn9840ae8520aa',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city= mumbai', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.min_temp
		wind_speed.innerHTML = response.min_temp
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err)); 
}
