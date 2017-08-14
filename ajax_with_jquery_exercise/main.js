$(function() {

	$("form").on("submit", function(e) {
	    e.preventDefault();

	    topStories()
	    signUpUser()

	//     var $newTitle = $('#newTitle').val()
	//     var $newURL = $('#urlToAdd').val()
	//     var icon = "<span class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span>"
	//     var $newLi = $("<li>" + icon + "  " + $newTitle + " " + $newURL + "</li>");
	//     $("ol").append($newLi);

	//     $newTitle.val("");
	//     $newURL.val("");
	});


	$('ol').click(function(event){
    	$(event.target).toggleClass('glyphicon-star-empty glyphicon-star');

    	addToFavorites()


	});

	$("btnFavs").on("click", function(e) {
	    e.preventDefault();

	    addToFavorites();
	    retrieveFavorites();

	} )


//-----------------------------------------------------------------------
	// Create the Top Stories List
	var icon = "<span class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span>"

	function topStories() {
		$.get( "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", function( data ) {
		    var arrIDs = [];
		    //create array of Top 20 story IDs, that push a complete url to the array
		    for (var i = 0; i < 20; i++) {
			    arrIDs.push("https://hacker-news.firebaseio.com/v0/item/" + data[i] + ".json")
			}
			//use the url's from above to run another get funtion to get the details for each story ID
			for (var i = 0; i < arrIDs.length; i++) {
		    	$.get(arrIDs[i])
		    	.then(function (data) {
		    		// $('ol').append("<li>" + icon + "<h5>" + data.title + "</h5> (" + data.url + ") </li>")
		    		$('ol').append("<li>" + icon + "<h5>" + data.title + "</h5> </li>")

		    	})
		    	.fail(function(err) {
		    		console.log(err);
		    	});
			}
		})
	}



	var $email = $('#email').val();
	// console.log($email);
	var $password = $('#password').val();
	// console.log($password);
	var authKy = "";


	function signUpUser(email, password) {

		$.ajax({
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json"
		      },
		    url: "https://hn-favorites.herokuapp.com/signup",
		    data: JSON.stringify({
		        email: $email, 
		        password: $password
		    })
		})
		.then(function(data) { authKy = (data.auth_token) })
		.fail(err => console.warn(err))

	}

	function logInUser(email, password) {
		$.ajax({
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json"
		      },
		    url: "https://hn-favorites.herokuapp.com/signup",
		    data: JSON.stringify({
		        email: $email, 
		        password: $password
		    })
		})
		.then(function(data) { authKy = (data.auth_token)})
		.fail(err => console.warn(err))
	}

//If a story is clicked, do addToFavorites() function that will add it to the favorites list
	function addToFavorites() {
		$.ajax({
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json",
		        "Authorization": authKy	        
		      },
		    url: "https://hn-favorites.herokuapp.com/stories.json",
		    data: JSON.stringify({
		        hacker_news_story: {
		        	by: "aj",
		        	story_id: "123", 
		        	title: "Test story",
		        	url: "abc.com"
				}
			})
		})
		.then(function(data) { console.log(data) })
		.fail(err => console.warn(err))
	}

	function retrieveFavorites() {
		$.ajax({
		    method: "GET",
		    headers: {
		        "Content-Type": "application/json",
		        "Authorization": authKy
		      },
		    url: "https://hn-favorites.herokuapp.com/stories.json",
		    data: JSON.stringify({
		        hacker_news_story: {
		        	by: "aj",
		        	story_id: "123", 
		        	title: "Test story",
		        	url: "abc.com"
				}
			})
		})
		.then(function(data) { console.log("fav's response: " + data) })
		.fail(err => console.warn(err))
	}



});
















