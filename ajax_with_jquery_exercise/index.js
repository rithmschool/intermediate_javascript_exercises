$(document).ready(function(){
	var $links = $('#links');
	var $login_form = $('#login-form');
	var $inp_email = $('#inp-email');
	var $inp_password = $('#inp-password');
	var authorization = '';

	$('#login-link').click(() => { $login_form .toggleClass("hidden") });
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
			$('.hideNoLogin').toggleClass('hideNoLogin showOnLogin');
			//getFavorites(data.auth_token);
		})
		.fail(err => console.warn(err));
	});

	getStories();

	function getStories(login = '', favorites = false){
		var url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
		console.log('login is ' + login);

		$.get(url)
		.then(function(res){
			for(let i = 0; i < 20; i++){
				var newUrl = `https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`;
				 $.get(newUrl).then(function(res){
					displayLink(res.title, res.url)
				});	
			}
			
		})
		.fail(function(err){
			console.warn(err);
		});
	}

	function getFavorites(login) {
		var url = 'https://hacker-news.firebaseio.com/favorites.herokuapp.com/stories.json';
		
		$.ajax({
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json",
		        "Authorization": authorization,
		      },
		    'url': url,
		})
		.then(function(data) { 
			console.log(data);
		})
		.fail(err => console.warn(err));

	}

	function displayLink(title, link, favor = false){
		let html = '<a class="glyphicon glyphicon-star-empty star hideNoLogin" href="#"></a>';
		let shortLink = '';
		if(link)  { shortLink = link.split('/').filter(v => v.includes('.')); }
		if(favor) html =  '<a class="glyphicon glyphicon-star star hideNoLogin" href="#"></a>';
			{ html += `<a href="${link}">${title}<span>(${shortLink[0]})</span></a>`; }
		let $lin = $('<li>');
		$lin.html(html);
		if(favor) $lin.addClass('favor');
		$lin.addClass('bg-warning')
		$links.append($lin);
	}

});