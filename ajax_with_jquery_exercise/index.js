$(document).ready(function(){
	var $links = $('#links');
	var linksList = [];
	var favList = [];
	var $login_link = $('#login-link');
	var $login_form = $('#login-form');
	var $inp_email = $('#inp-email');
	var $inp_password = $('#inp-password');
	var authorization = '';

	$('#login-link').click(() => { $login_form .toggleClass("hidden"); });
	$('#login-btn').click(function(e){
		e.preventDefault();
		//var email = "lane.matthew@gmail.com";
		var email = $inp_email.val();
		//var password = "password";
		var password = $inp_password.val();

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
		})
		.then(function(data) { 
			localStorage.setItem('auth_token', data.auth_token);
			authorization = data.auth_token;
			console.log(data.auth_token);
			$login_link.text('Log Out');
			$inp_email.val('');
			$inp_password.val('');
			$login_form .toggleClass("hidden");
			return $.ajax(
			{
		    	method: "GET",
		    	headers: { "Authorization": authorization },
		      	'url': 'https://hn-favorites.herokuapp.com/stories.json',
			});
		})
		.then(function(data){
			getStories(true, data);
		})
		.fail(err => console.warn(err));
	});

	getStories();

	function getStories(login = false, favorites = []){
		var url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

		$.get(url)
		.then(function(res){
			$links.empty();
			for(let i = 0; i < 20; i++){
				var newUrl = `https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`;
				 $.get(newUrl).then(function(res){
					displayLink(res.title, res.url, res.id, false, login);
				});	
			}
			
		})
		.fail(function(err){
			console.warn(err);
		});
	}

	function getFavorites(login) {
		var url = 'https://hn-favorites.herokuapp.com/stories.json';
		
		$.ajax({
		    method: "GET",
		    headers: {
		        "Authorization": authorization,
		      },
		    'url': url,
		})
		.then(function(data) { 
		})
		.fail(err => console.warn(err));

	}

	function displayLink(title, link, storyId=0, favor = false, login = false){
		var loginClass = 'hideNoLogin';
		if(login) loginClass = 'showOnLogin';
		let html = `<a storyId="${storyId}" class="glyphicon glyphicon-star-empty star ${loginClass}" href="#"></a>`;
		let shortLink = '';
		if(link)  { shortLink = link.split('/').filter(v => v.includes('.')); }
		if(favor) html =  `<a storyId="${storyId}" class="glyphicon glyphicon-star star ${loginClass}" href="#"></a>`;
			{ html += `<a href="${link}">${title}</a> <small>( ${shortLink[0]} )</small>`; }
		let $lin = $('<li>');
		$lin.html(html);
		if(favor) $lin.addClass('favor');
		$lin.addClass('bg-warning')
		$links.append($lin);
	}

});