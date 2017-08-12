

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

	$items.on('click', '.glyphicon-star-empty, .glyphicon-star', function(e) {
			$(e.target).toggleClass("glyphicon-star glyphicon-star-empty");
	});

	getTop();
	//when logout is clicked, need to remove token

//FUNCTIONS

	function getLogin(username,password){
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
	}

	function displayLink(title="adele",url="http://wwww.google.com",storyId=0){
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
	}
	
	//gets JSON data of top stories
	

	//takes in promises from stories or favorites (if logged in) and gets in format of title, url, id
	function getTop(){
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

