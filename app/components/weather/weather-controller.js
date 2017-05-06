function WeatherController(){
	
	var weatherService = new WeatherService();
	
	this.getWeather = function(){
		// document.getElementById('loader-weather').className = ""
		weatherService.getWeather(draw)
		
		//What can you do with this weather object?
	}
	function draw(weather){
		console.log(weather)		
		var farenheitTemp = Math.round(1.8 * (weather.main.temp - 273) + 32)
		var celsiusTemp = Math.round((farenheitTemp - 32)* (5/9))
				
	    var template =
			`
			<h2>${weather.name}</h2>
			<h3 id="farenheit" class="hidden">${farenheitTemp}°<h3>
			<h3 id="celsius" class="">${celsiusTemp}°</h3>
			<button type="button" onclick="app.controllers.weatherController.tempFormat()">Select Format</button>
			
			`
		
		document.getElementById("weather").innerHTML = template
	}

	this.tempFormat = function(){
		weatherService.tempFormat()

	}

	// function failed(){
    // 	document.getElementById('loader').className = "hidden"
    // 	var elem = document.getElementById("pokemon-characters")
    
    // 	elem.innerHTML = "SORRY THE REQUEST FAILED"
    // }  

	this.getWeather()
}
