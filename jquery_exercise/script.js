$(function(){
	var $forms = $('#forms');
	var $loginLink = $('#loginLink');
	var $loginForm = $('#loginForm');
	var $signupForm = $('#signupForm');
	var $favLink = $('#favLink');
	var $ol = $('#resultList ol')

	//whether logged in or not
	var loggedIn = false;
	//favorites selected
	var favoritesOnly = false;
	//one domain only selected
	var oneDomainOnly = false;

	var storiesArr = [];
	var numStories = 20;

	$forms.hide();

	hackerNewsApiCalls();

	/*********************FUNCTIONS*********************/

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
			// console.log("localStorage: " + localStorage.getItem('auth_token'));

			/*FIX THIS!!!!!*/
			return $.ajax({
				url: 'https://hn-favorites.herokuapp.com/stories.json',
				dataType: 'json',
				headers: {
					Authorization: localStorage.auth_token
				}
			})
		}).then(function(data){
			console.log(data);
			$forms.slideToggle();
			setAsLoggedIn();
		}).catch(function(data){
			alert("Login Error! Please try again");
		});
	}

	function setAsLoggedIn(){
		loggedIn = true;
		$('.star').show();
		$loginLink.text('logout');
	}

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
				res.forEach(function(storyObj){
					writeLiHtml(storyObj);
				});
				//check if logged in
				if(localStorage.getItem('auth_token')){
					setAsLoggedIn();
				}
			});
		})
	}

	/*writes the lis with story info to the list*/
	function writeLiHtml(storyObj){
		var domainUrl = extractDomain(storyObj.url);
		var timestamp = new Date(storyObj.time*1000);
		var now = new Date().getTime();
		var timeAgo = timeDifference(now, timestamp);
		var liHtml = `
			<li 
				data-by="${storyObj.by}"
				data-id="${storyObj.id}"
				data-title="${storyObj.title}"
				data-url="${storyObj.url}"
			>
				<span>
					<span class="star glyphicon glyphicon-star-empty" 
					aria-hidden="true"></span> 
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
					by ${storyObj.by} ${timeAgo}
				</span>
			</li>
		`;
		$ol.append(liHtml);

		//hide favorite star icons
		$('.star').hide();
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

	/*when click "submit" w/in the LOGIN form*/
	$loginForm.on('submit', function(e){
		e.preventDefault();
		var loginLogin = $('#loginLogin').val();
		var loginPassword = $('#loginPassword').val();

		loginSignup('login', loginLogin, loginPassword);
		// console.log(`${loginLogin} and ${loginPassword}`);

		$('#loginLogin').val('');
		$('#loginPassword').val('');
	});

	/*when click "submit" w/in the SIGNUP form*/
	$signupForm.on('submit', function(e){
		e.preventDefault();
		var signupLogin = $('#signupLogin').val();
		var signupPassword = $('#signupPassword').val();

		loginSignup('signup', signupLogin, signupPassword);
		// console.log(`${signupLogin} and ${signupPassword}`);

		$('#signupLogin').val('');
		$('#signupPassword').val('');
	});


	/*hide and show login/signup forms when click "login" link in nav*/
	$loginLink.on('click', function(e){
		e.preventDefault();
		//if logged in, LOGOUT!
		if (loggedIn){
			/*****HOW ELSE DO I LOG OUT???*********/
			loggedIn = false;
			$loginLink.text('login');
			localStorage.removeItem('auth_token');
			$('.star').hide();

		}
		else {
			$forms.slideToggle();
		}
	});

	/*event listeners for clicking on the favorite/all link*/
	$favLink.on('click', function(e){
		e.preventDefault();

		/*hide and show favorites when click "favorites/all" link in nav*/
		if(!oneDomainOnly){
			favoritesOnly = !favoritesOnly;
			if (favoritesOnly){
				$ol.find('.glyphicon-star-empty').parent().parent().hide();
				$ol.css('list-style-type', 'none');
				$(e.target).text('all');
			}
			else {
				$ol.find('.glyphicon-star-empty').parent().parent().show();
				$ol.css('list-style-type', 'decimal');
				$(e.target).text('favorites');
			}
		}

		/*show all in list (if currently only showing a specific domain)*/
		else { 
			oneDomainOnly = false;
			$('li').show();
			$ol.css('list-style-type', 'decimal');
			$(e.target).text('favorites');
		}
	});

	/*Add & remove favorites when click "star" w/in each li*/
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
				console.log(res);
				$li.removeAttr('data-ajaxId');
			});
		}
		//ADD FAVORITE
		else {
			console.log('add favorite');
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
				console.log(res);
				$li.attr('data-ajaxId', res.id);
			});
		}
	});

	/*when click on url, only show items with same url 
	& switch the favorites link in nav bar to all*/
	/*
	$ol.on('click', '.url', function(e){
		var activeUrlText = $(e.target).text().trim();
		$('li').filter(function(i, el){
			return $(el).find('.url').text().trim() !== activeUrlText;
		}).hide();
		// $('li:not(:contains' + activeUrlText + ')').hide();
		oneDomainOnly = true;
		$favLink.text("all");
		$ol.css('list-style-type', 'none');
	});
	*/
});