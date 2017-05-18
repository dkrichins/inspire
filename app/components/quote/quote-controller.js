function QuoteController(){

	var quoteService = new QuoteService()

	this.getQuote = function getQuote(){

		quoteService.getQuote(drawQuote)

	}
	
	function drawQuote(quote){			
						
	    var template =
			`
			<h2>Quote of the Day</h2>
			<h3>${quote.quote}</h3>		
			<h3>----${quote.author}</h3>
			
			`
		
		document.getElementById("quote").innerHTML = template
	}

this.getQuote()
}
