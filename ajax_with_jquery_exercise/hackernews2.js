

$(function(){
	$("form").hide();

//VARIABLES
	var $password = $("#password")
	var $username = $("#username")
	var $items = $("#items");
	var authorization = "";

//EVENTS
	
	//upon submit you get username/password/token
	$("button").on('click', function(e){
		var username = $username.val();
		var password = $password.val();

		//get token
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
			//have token, now need to hide form and change login to logout
			$('#password').val('');
			$('#username').val('');
			$("form").hide();
			$('#clicktoToggle').text('logout');
			return getFavorites(data.auth_token)
			//when logout is clicked, need to remove token

		})
		.then(function(favorites){
			//returned promise of all favorites as objects in array (debugger)

		})
		.fail(err => console.warn(err))


	})
	
	$items.on('click', '.glyphicon-star-empty, .glyphicon-star', function(e) {
			$(e.target).toggleClass("glyphicon-star glyphicon-star-empty");
		});

	$("#clicktoToggle").on("click", function(e){
		$("form").toggle();
	});

//FUNCTIONS

	function displayLink(name="adele",url="http://wwww.google.com",storyId=0){
		var shortUrl = url.slice(12);
		var $newLi = $("<li>", {
			html: `${name} (<a href="${url}">${shortUrl}</a>)`,
		});
		var $star = $("<span>", {
			class: "hideNoLogin glyphicon glyphicon-star-empty",
			'storyId': storyId
		});

		$newLi.prepend($star);
		$items.append($newLi);
	}
	
	// function getStories(login ='', favorites=false){
	// 	var url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
	//     $.get(url)
	//     .then(function(res) {
	//     	$items.empty();
	//     	for(let i = 0; i < 20; i++){
	// 	    	var newUrl = `https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`
	// 	    	$.get(newUrl).then(
	// 		    	function(res){
	// 		    		displayLink(res.title,res.url,res.id);
	// 		    	});
	// 	    }
	//     })

	//     .catch(function(error) {
	//       console.warn("OH NOEZ, ERRORZ", error);
	//     });
	// }

//mine
	function getStories(login=''){
		//gets array of numbers
	    return $.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
	  	.then(function(topstories){
	  		var arr = [];
	  		for(var i = 0; i < 20; i++){
	  			var newUrl = `https://hacker-news.firebaseio.com/v0/item/${topstories[i]}.json?print=pretty`
		    	$.get(newUrl).then(
			    	function(newUrl){
			    		arr.push(newUrl);
			    		return arr;
			    });  
	  		}
	  	})
	}
	return getStories();

	//getStories();
	//displayLink(newUrl.title,newUrl.url,newUrl.id);



	function getFavorites(login=''){ 
		//returns array of object (of favorites)
		return $.ajax({
			url: "https://hn-favorites.herokuapp.com/stories.json",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": authorization
			},
		})
	}

	getStories();

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

