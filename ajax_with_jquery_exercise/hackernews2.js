
//add listener for submit to be clicked
$(function(){
	$("form").hide();

	var $password = $("#password")
	var $username = $("#username")
	var $items = $("#items");
	var authorization = "";


	function displayLink(name="adele",url="http://wwww.google.com"){
		var shortUrl = url.slice(12);
		var $newLi = $("<li>", {
			html: `${name} (<a href="${url}">${shortUrl}</a>)`,
		});

		var $star = $("<img>", {
			src: "favstarempty.png",
			height: "20px",
			width: "20px",
			id: "favoriteToggle",
			class: "hideNoLogin"
		});

		$newLi.prepend($star);
		$items.append($newLi);
	}

	//upon submit you get username/password
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
			getFavorites(data.auth_token)
		})
		.fail(err => console.warn(err))


		$("#star").on('click', function(e) {
			$(e.target).toggle();
		});
	})
	
	//"class", glyphicon glyphicon-star glyphicon glyphicon-star-empty

	$("#clicktoToggle").on("click", function(e){
		$("form").toggle();
	});

//API to get links
	
	function getStories(login ='', favorites=false){
		var url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
		console.log('login' + login)
	    $.get(url)

	    .then(function(res) {
	    	for(let i = 0; i < 20; i++){
		    	var newUrl = `https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`
		    	$.get(newUrl).then(
			    	function(res){
			    		displayLink(res.title,res.url);
			    	});
		    }
	    })

	    .catch(function(error) {
	      console.warn("OH NOEZ, ERRORZ", error);
	    });
	}

	function getFavorites(login=''){
		
		$.ajax({
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": authorization
			},
			url: "https://hn-favorites.herokuapp.com/stories.json",
			//data: JSON.stringify({
				
			//})
		})
		.then(function(data) { console.log(data.auth_token)})
		.fail(err => console.warn(err))


		$.get(url)
		 

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

