$(document).ready(function(){
	//variables
	var auth_token;

	//imeadiat calls
	getTop().then(function(data){
		debugger 
	})

	//click functions

	//functions
	function getTop(){
		return $.get('https://hacker-news.firebaseio.com/v0/'
			+ 'topstories.json?print=pretty')
		.then(function(topstories){
			console.log(topstories);
			return Promise.all(topstories.slice(0,50).map(function(v,i){
				return $.get(
					`https://hacker-news.firebaseio.com/v0/' 
					+ 'item/${topstories[i]}.json?print=pretty`)
			}));
		})
		.fail(function(err){
			console.warn(err); 
			return err;
		});

	}

	function getFav() {
		return $.ajax({
		    method: "GET",
		    headers: {
		        "Authorization": auth_token,
		      },
		    'url': 'https://hn-favorites.herokuapp.com/stories.json',
		})

	}

	function getLogin(email, password){
		$.ajax({
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			url: "https://hn-favorites.herokuapp.com/login",
			data: JSON.stringify({
				'email': email, 
				'password': password
			})
		}).then(function(data) { 
			localStorage.setItem('auth_token', data.auth_token);
			auth_token = data.auth_token;
			console.log(data.auth_token);
		})


	}

});