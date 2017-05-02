$(function(){
	$("#searchButton").on("click", function(event){
		let $searchText = $("#searchText").val();   // collect the user's input. store in jquery variable
		let $gifHolder = $(".gifHolder")  			//retrieves our holder div where we will keep all our images
		
		// make an AJAX request to the GIPHY API using our user's input
		// create a HTML img element --> set it's src === url returned by ajax call 
		// append all images to our $gifHolder div
		// use css method to set display:flexbox and set height/width of images

		$.ajax({
			url: "http://api.giphy.com/v1/gifs/search?q=" + $searchText + "&api_key=dc6zaTOxFJmzC",
			type: "GET",
			success: function(response){
				console.log(response);
				console.log(response.data);
				$('<img />').attr('src', response.data[Math.floor(Math.random()* response.data.length)].images.fixed_height.url).width("200px").height("200px").appendTo($gifHolder); // attr() expects strings not objects use toString() method??
			},
			error: function(error){
        		console.log(error);
    		}
		})
	})

	$("#deleteButton").on("click", function(event){
		let $gifHolder = $(".gifHolder");
		$gifHolder.empty();  //remove all child elements nested in $gifHolder div

	})
})

// Aims: 
//Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
// Once the Giphy API has responded with data, append the GIF to the page
// Allow the user to search for as many GIFs as they would like and keep appending them to the page
// Allow the user to remove all of the GIFs by clicking a button
