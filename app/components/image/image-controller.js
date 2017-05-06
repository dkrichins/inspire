function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
	var imageService = new ImageService()
	
	this.getImage = function(){

		imageService.getImage(drawImage)

	}

	function drawImage(targetUrl){

		var body =  document.getElementsByTagName('body')[0]
		body.style.backgroundImage = targetUrl.url
		//document.body.style.backgroundImage = targetUrl.url
		// console.log(targetUrl.url)

	}

this.getImage()

}


