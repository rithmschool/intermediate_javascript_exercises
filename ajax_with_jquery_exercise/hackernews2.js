

$(function(){
	
//VARIABLES
	var $password = $("#password");
	var $username = $("#username");
	var $items = $("#items");
	var authorization = "";
//EVENTS
	//login form is hidden when page loads
	$("form").hide();
	//when you click "login" the form toggles to be seen
	$("#clicktoToggle").on("click", function(e){
		$("form").toggle();
	});

	$('#favorites').on("click", function(e){
		if(authorization === ""){
			alert('Please login to see Favorites')
		} else {
			getFavorites(authorization);
		}
	})

	$("button").on('click', function(e){
		var username = $username.val();
		var password = $password.val();
		$("form").hide();
		$('#clicktoToggle').text('logout');
		getLogin(username,password);
	})

	getTop();
	//when logout is clicked, need to remove token

//FUNCTIONS
	var $star = 

	function addFavorites(authorization,storyId){
		console.log(`this is inside addFavs function`)
		$star.on('click', '.glyphicon-star-empty, .glyphicon-star', function(e,storyId) {
			$(e.target).toggleClass("glyphicon-star glyphicon-star-empty");
				if($star.hasClass('glyphicon-star') === true){
					console.log(`${storyId} star is filled`)
					//makeFavorites(storyId);
				}
			
		});

		$.ajax({
			url: "https://hn-favorites.herokuapp.com/stories.json",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": authorization
			}
		})
		.then(function(data) {
			$items.empty();
			//data is array of objects
			for(var i = 0; i < data.length; i++){
				displayLink(data[i].title, data[i].url, data[i].story_id)
			}
		})
	}
	
	function getLogin(username,password,storyId){
		$.ajax({
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json"
		      },
		    url: "https://hn-favorites.herokuapp.com/login",
		    data: JSON.stringify({
		        'email': username, 
		        'password': password
			    })
		})
		.then(function(data) { 
			localStorage.setItem('auth_token', data.auth_token);
			authorization = data.auth_token
		})
		.fail(err => console.warn(err))

		addFavorites(authorization,storyId)
	}

	function displayLink(title="adele",url="http://wwww.google.com",storyId=0){
		console.log(`this is inside displayLink function`)
		var shortUrl = url.slice(12);
		var $newLi = $("<li>", {
			html: `${title} (<a href="${url}">${shortUrl}</a>)`,
		});
		var $star = $("<span>", {
			class: "hideNoLogin glyphicon glyphicon-star-empty",
			'storyId': storyId
		});

		$newLi.prepend($star);
		$items.append($newLi);
		getLogin(storyId)
		
	}

	
	//gets JSON data of top stories
	

	//takes in promises from stories or favorites (if logged in) and gets in format of title, url, id
	function getTop(){
		console.log(`this is inside getTOP function`)
		$.getJSON('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
	    .then(function(res) {
	    	$items.empty();
	    	for(let i = 0; i < 20; i++){
		    	var newUrl = `https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`
		    	$.get(newUrl).then(
			    	function(res){
			    		displayLink(res.title,res.url,res.id);
			    	});
		    }
	    })
	    .catch(function(error) {
	      console.warn("OH NOEZ, ERRORZ", error);
	    });
	}



	function getFavorites(authorization){ 
		//returns promise (object of data)
		console.log(`this is inside getFavs function`)
		$.ajax({
			url: "https://hn-favorites.herokuapp.com/stories.json",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": authorization
			}
		})
		.then(function(data) {
			$items.empty();
			//data is array of objects
			for(var i = 0; i < data.length; i++){
				displayLink(data[i].title, data[i].url, data[i].story_id)
			}
		})
	}

});



//displayLink(title,link, favor= false){

//}


//focus on login and logout first!
// $.ajax to get links to populate
// 2/3 are logging in (see above)
// 4 and later: post request
//new assignment:
//AJAX request for links (actual links)
//login - works and can favorite things
//favorite save even if you leave and come back next day
//when logged out, can't favorite everything
//https://github.com/rithmschool/intermediate_javascript_exercises/tree/master/ajax_with_jquery_exercise


//fix 11 character google url

