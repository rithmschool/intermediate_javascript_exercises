$(document).ready(function(){
	//variables
	var $login_form = $(`#login-form`);
	var $email = $(`#inp-email`);
	var $pword = $(`#inp-password`);
	var $login_fail = $(`#login-fail`);
	var $login_link = $(`#login-link`);
	var $links = $(`#links`);
	var $fav = $(`#favor-link`);
	var fav = [];
	var all = [];

	//imeadiat calls
	if(!!localStorage.getItem('auth_token')) getFav();
	getTop().then(function(data){
		console.log(data);
		all = data;
		displayAll(data);
	});

	//click functions
	$fav.click(function(){
		console.log('fav click');
		if(!localStorage.getItem('auth_token')){
			$login_form .toggleClass("hidden");
		}else if($fav.text() === `Favoriets`){
			$fav.text('All');
			displayFav(fav);
		}else{
			$fav.text('Favoriets');
			displayAll(all);
		}
	});

	$login_link.click(function(){ 
		if($login_link.text() === `Logout`){
			localStorage.removeItem('auth_token');
			$login_link.text('Login');
			fav = [];
		}else{
			$login_form .toggleClass("hidden");
		}
	});

	$(`#login-btn`).click(function(e){
		e.preventDefault();

		console.log($email.val(), $pword.val());
		getLogin($email.val(), $pword.val())
			.then(function(token){
				console.log(token)
				$login_fail.addClass('hidden');
				$login_form.addClass('hidden');
				$login_link.text('Logout');
				getFav();
			})
			.fail(function(){
				$login_fail.removeClass('hidden');
			})
	});

	$(`#signup-btn`).click(function(e){
		e.preventDefault();

		console.log($email.val(), $pword.val(), true);
		getLogin($email.val(), $pword.val(), true)
			.then(function(token){
				console.log(token)
				$login_fail.addClass('hidden');
				$login_form.addClass('hidden');
				$login_link.text('Logout');
			})
			.fail(function(){
				$login_fail.removeClass('hidden');
			})
	});

	$links.on('click', '.star', function(e){
		var id = $(e.target).attr('storyid');
		setFav(id);
	});

	// regular functions
	function isFav(sid){
		return fav.some(function(sid,v, v.story_id, sid == v.story_id){
			console.log(v);
			return sid === v.story_id;
		});
	}

	function displayAll(arr){
		$links.empty();
		arr.forEach(function(v) {
			displayLink(v.title, 
				v.url, 
				v.id, 
				isFav(v.id), 
				!!localStorage.getItem('auth_token'));
		});
	}

	function displayFav(arr){
		$links.empty();
		arr.forEach(function(v) {
			displayLink(v.title, 
				v.url, 
				v.storyId, 
				true, 
				true);
		});
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

	function storyFromID(id){
		

		for(let s of all){
			if(s.id == id) {
				return s;
			}
		}
	}

	//ajax functions
	function getTop(){
		return $.get('https://hacker-news.firebaseio.com/v0/'
			+ 'topstories.json?print=pretty')
		.then(function(topstories){
			console.log(topstories);
			return Promise.all(topstories.slice(0,50).map(function(v,i){
				return $.get(
					`https://hacker-news.firebaseio.com/v0/` 
					+ `item/${topstories[i]}.json?print=pretty`)
			}));
		})
			.fail((err) => console.warn(err));
	}

	function getFav() {
		return $.ajax({
		    method: "GET",
		    headers: {
		        "Authorization": localStorage.getItem('auth_token'),
		      },
		    'url': 'https://hn-favorites.herokuapp.com/stories.json',
		})
			.then((favorites) => {console.log(favorites); return fav = favorites;})
			.fail((err) => console.warn(err));
	}

	function getLogin(email, password, signup = false){
		var urlEnd = 'login';
		if(signup) urlEnd = 'signup';

		return $.ajax({
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			url: `https://hn-favorites.herokuapp.com/${urlEnd}`,
			data: JSON.stringify({
				'email': email, 
				'password': password
			})
		}).then(function(data) { 
			localStorage.setItem('auth_token', data.auth_token);
			auth_token = data.auth_token;
			return(data.auth_token);
		})
	}

	function setFav(id){
		var s = storyFromID(id);

		return $.ajax({
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem('auth_token'),
			},
			url: `https://hn-favorites.herokuapp.com/stories.json`,
			data: JSON.stringify({
				"hacker_news_story": s,
			})
		})
			.then((res) => console.log(res))
	}

});