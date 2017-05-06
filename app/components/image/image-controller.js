function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
	var imageService = new ImageService()
	
	this.getImage = function(callWhenDone){

		imageService.getImage(drawImage)

	}

	function drawImage(url){

		var body = document.getElementsByTagName('body')
		body.style.backgroundImage = url

	}



}


