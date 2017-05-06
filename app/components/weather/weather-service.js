function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);

	this.getWeather = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			callWhenDone(res);
		})
	}
	

	this.temperatureFormat = function(){
		if(document.getElementById('farenheit').className = "hidden")
		{
			document.getElementById('farenheit').className = ""
			document.getElementById('celsius').className = "hidden"			
		}
		else
		{
			document.getElementById('farenheit').className = "hidden"
			document.getElementById('celsius').className = ""
		}		

	}
}