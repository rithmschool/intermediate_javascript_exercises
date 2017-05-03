$(function(){
	var $forms = $('#forms');
	var $loginLink = $('#loginLink');
	var $loginForm = $('#loginForm');
	var $signupForm = $('#signupForm');
	var $favLink = $('#favLink');
	var $favSpan = $('#favSpan');
	var $ol = $('#resultList ol')

	//whether logged in or not
	var loggedIn = false;
	//favorites selected
	var favoritesOnly = false;

	var numStories = 20;

	$forms.hide();
	$favSpan.hide();

	//to begin app
	hackerNewsApiCalls();

	/*********************FUNCTIONS*********************/

	function hackerNewsApiCalls(){
		/*
		AJAX call to hacker news to get array of IDs of top stories
		Then for each story ID, create a promise: $.get request to get info about each story.
		Add promise to promise array.
		When all promises are resolved, write the HTML list of stories.
		*/
		$.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function(res){
			var topStories = res.splice(0, numStories);
			var promiseArr = [];
			topStories.forEach(function(storyId){
				promiseArr.push($.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`));
			});
			return Promise.all(promiseArr).then(function(res){
				// console.log(res);
				$ol.html('');
				res.forEach(function(storyObj){
					writeLiHtml(storyObj, favoritesOnly);
				});
				//check if logged in
				if(localStorage.getItem('auth_token')){
					setAsLoggedIn();
				}
			});
		})
	}

	function getFavorites(){
		$.ajax({
			url: 'https://hn-favorites.herokuapp.com/stories.json',
			dataType: 'json',
			headers: {
				Authorization: localStorage.auth_token
			}
		}).then(function(data){
			console.log(data);
			$ol.html('');
			favoritesOnly = true;
			data.forEach(function(storyObj){
				writeLiHtml(storyObj, favoritesOnly);
			});
			$favLink.text('all');
		});
	}

	/*writes the lis with story info to the list*/
	function writeLiHtml(storyObj, isFavList){
		var domainUrl = extractDomain(storyObj.url);
		/*
			for Hacker News api, time is in unix format
			and stored in .time property
			display time 'ago' posted
		*/
		if (!isFavList){
			var timestamp = new Date(storyObj.time*1000);
			var now = new Date().getTime();
			var timeAgo = timeDifference(now, timestamp);
		}
		/*
			for favorite list for heroku api,
			time is stored in .created_at property
			diplay time favorited
		*/
		else {
			var timeAdded = new Date(storyObj.created_at);
			var month = timeAdded.getMonth() + 1;
			var day = timeAdded.getDay();
			var year = timeAdded.getFullYear();
		}
		var liHtml = `
			<li 
				data-by="${storyObj.by}" 
				data-id="`;
		if (!isFavList){
			liHtml += storyObj.id;
		}
		else {
			liHtml += storyObj.story_id;
		}
		liHtml +=`"
				data-title="${storyObj.title}"
				data-url="${storyObj.url}" `;
		if (isFavList) {
			liHtml += `data-ajaxId="${storyObj.id}"`;
		}
		liHtml += `>
				<span>
					<span class="star glyphicon `;
		if (!isFavList){
			liHtml += `glyphicon-star-empty`;
		}
		//display the filled in star for favorite list
		else {
			liHtml += `glyphicon-star`;
		}
		liHtml += `" aria-hidden="true"></span> 
				</span> 
				<span class='name'>
					<a href='${storyObj.url}' target='_blank'>
						${storyObj.title}
					</a>
				</span>
				<span class='url'>
						(${domainUrl})
				</span><br>
				<span class="postInfo">
					by ${storyObj.by}`; 
		if (!isFavList){
			liHtml += " " + timeAgo;
		}
		else {
			liHtml += `; Favorited: ${month}/${day}/${year}`;
		}
		liHtml += `
				</span>
			</li>
		`;
		$ol.append(liHtml);

		//hide favorite star icons if not logged in
		if (!loggedIn){
			$('.star').hide();
		}
	}

	function loginSignup(urlText, email, password){
		$.ajax({
			url: `https://hn-favorites.herokuapp.com/${urlText}`,
			type: 'POST',
			dataType: 'json',
			data: {
				email: email, 
				password: password 
			}
		}).then(function(data){
			localStorage.setItem('auth_token', data.auth_token);
			$forms.slideToggle();
			setAsLoggedIn();
		}).catch(function(data){
			alert("Login Error! Please try again");
		});
	}

	function setAsLoggedIn(){
		loggedIn = true;
		$('.star').show();
		$favSpan.show();
		$loginLink.text('logout');
	}

	function setAsLoggedOut(){
		loggedIn = false;
		$('.star').hide();
		$favSpan.hide();
		$loginLink.text('login');
		localStorage.removeItem('auth_token');
	}

	/*
	extracts and returns the subdomain text from a given url
	For example: https://www.google.com will return "google.com"
	*/
	function extractDomain(url){
		var domainUrl = url.match(/\/\/(\w+)?.?(\w+.\w+)\/?/);

		if (domainUrl[2].indexOf('/') > -1){
			return (domainUrl[1] + "." + domainUrl[2].slice(0,domainUrl[2].indexOf('/')));
		}
		else if (domainUrl[2].indexOf('.') === -1){
			return (domainUrl[1] + "." + domainUrl[2]);
		}
		else {
			return (domainUrl[2]);
		}
	}

	/*function to calculate the time difference since a story*/
	function timeDifference(current, previous) {
		var msPerMinute = 60 * 1000;
		var msPerHour = msPerMinute * 60;
		var msPerDay = msPerHour * 24;
		var msPerMonth = msPerDay * 30;
		var msPerYear = msPerDay * 365;

		var elapsed = current - previous;

		if (elapsed < msPerMinute) {
			return Math.round(elapsed/1000) + ' seconds ago';   
		}

		else if (elapsed < msPerHour) {
			return Math.round(elapsed/msPerMinute) + ' minutes ago';   
		}

		else if (elapsed < msPerDay ) {
			return Math.round(elapsed/msPerHour ) + ' hours ago';   
		}

		else if (elapsed < msPerMonth) {
			return Math.round(elapsed/msPerDay) + ' days ago';   
		}

		else if (elapsed < msPerYear) {
			return Math.round(elapsed/msPerMonth) + ' months ago';   
		}

		else {
			return Math.round(elapsed/msPerYear ) + ' years ago';   
		}
	}

	/*********************EVENT LISTENERS*********************/

	/*
	hide and show login/signup forms when 
	click "login" link in nav
	*/
	$loginLink.on('click', function(e){
		e.preventDefault();
		//if logged in, LOGOUT!
		if (loggedIn){
			setAsLoggedOut();
		}
		//if logged out and click, toggle login forms
		else {
			$forms.slideToggle();
		}
	});

	/*event listeners for clicking on the favorite/all link*/
	$favLink.on('click', function(e){
		e.preventDefault();

		/*if click the favorites link, then get favs*/
		if ($favLink.text() === "favorites"){
			getFavorites();
			$ol.css('list-style-type', 'none');
		}
		/*if click the all link, then get all top stories*/
		else {
			favoritesOnly = false;
			$favLink.text('favorites');
			hackerNewsApiCalls();
			$ol.css('list-style-type', 'decimal');
		}
	});

	/*
	Add & remove favorites when click "star" w/in each li
	Only for logged-in users
	*/
	$ol.on('click', '.star', function(e){
		//first, toggle appearance of glyphicon star from empty to filled
		//or vice versa
		$(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
		
		//REMOVE FAVORITE
		if ($(e.target).hasClass('glyphicon-star-empty')){
			var $li = $(e.target).parent().parent();
			var ajaxId = $li.attr('data-ajaxId');
			$.ajax({
				url: `https://hn-favorites.herokuapp.com/stories/${ajaxId}.json`,
				type: 'delete',
				contentType: 'application/json',
				dataType: 'json',
				headers: {
					Authorization: localStorage.auth_token
				}
			}).then(function(res){
				if (favoritesOnly){
					$li.hide();
				}
				$li.removeAttr('data-ajaxId');
			});
		}
		//ADD FAVORITE
		else {
			var $li = $(e.target).parent().parent();
			var by = $li.attr('data-by');
			var id = $li.attr('data-id');
			var title = $li.attr('data-title');
			var url = $li.attr('data-url');
			$.ajax({
				url: 'https://hn-favorites.herokuapp.com/stories.json',
				type: 'post',
				contentType: 'application/json',
				dataType: 'json',
				headers: {
					Authorization: localStorage.auth_token
				},
				data: JSON.stringify({ 
					"hacker_news_story": {
					by: by, 
					story_id: id,
					title: title,
					url: url
					}
				})
			}).then(function(res){
				// console.log(res);
				$li.attr('data-ajaxId', res.id);
			});
		}
	});

	/*when click "submit" w/in the LOGIN form*/
	$loginForm.on('submit', function(e){
		e.preventDefault();
		var loginLogin = $('#loginLogin').val();
		var loginPassword = $('#loginPassword').val();

		loginSignup('login', loginLogin, loginPassword);

		$('#loginLogin').val('');
		$('#loginPassword').val('');
	});

	/*when click "submit" w/in the SIGNUP form*/
	$signupForm.on('submit', function(e){
		e.preventDefault();
		var signupLogin = $('#signupLogin').val();
		var signupPassword = $('#signupPassword').val();

		loginSignup('signup', signupLogin, signupPassword);

		$('#signupLogin').val('');
		$('#signupPassword').val('');
	});
});