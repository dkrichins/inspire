function ClockController(){

    var clockService = new ClockService()

    this.startTime = function startTime(){

        clockService.startTime()
            
    }

    
	function drawTime(clock){			
						
	    var template =
			`
			<h2></h2>
						
			`
		
		document.getElementById('clock').innerHTML = template
	}

}