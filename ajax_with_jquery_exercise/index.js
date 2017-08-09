$(document).ready(function() {
	var loggedIn = JSON.parse(localStorage.getItem("hos_loggedIn"));
	console.log("Logged In: " + loggedIn);

	var $list = $("#list_links");
	var $lnkFavorites = $("#link_fav");
	var $lnkLogin = $("#link_login");
	var $lnkSignup = $("#link_signup");
	var $loginDiv = $("#login_div");
	var $signupDiv = $("#signup_div");
	var $btnLogin = $("#login_form");
	var $btnSignup = $("#signup_form");

	/* DEV SETTINGS */
	//localStorage.removeItem("hos_top10Cached");
	var top10Cached = JSON.parse(localStorage.getItem("hos_top10Cached"));
	//loggedIn=true;
	//localStorage.setItem("hos_loggedIn", false);
	/* DEV SETTINGS */

	// A few things need to change if user is logged in...
	toggleLoginMenuMode($lnkLogin, $lnkSignup, loggedIn);

	if (top10Cached) {
		$list.append(buildList(top10Cached, loggedIn));
	} else {
		createTopStoryList(10).then(function(response) {
			$list.append(buildList(response, loggedIn));

			/* DEV SETTINGS */
			localStorage.setItem("hos_top10Cached", JSON.stringify(response));
			/* DEV SETTINGS */
		})
		.fail(function(err) {
			console.log("ERROR: " + err);
		});
	}

	$lnkLogin.on('click', function() {
		if (loggedIn === false) {
			$loginDiv.eq(0).slideToggle(250);
		} else {
			loggedIn = false;
			localStorage.setItem("hos_loggedIn", loggedIn);
			toggleLoginMenuMode($lnkLogin, $lnkSignup, loggedIn);
			setChecksVisible($list, loggedIn);
		}
	});

	$lnkSignup.on('click', function() {
		$signupDiv.eq(0).slideToggle(250);
	});

	$btnSignup.on('click', function(event) {
		// *********MUST CHECK IF THE USERNAME AND PW WAS EVEN VALID!

		var username = $("#input_text3").val();
		var password = $("#input_text4").val();
		
		if ($(event.target).attr("id") === "signup_submit") {
			$.ajax({
			    method: "POST",
			    headers: {
			        "Content-Type": "application/json"
			      },
			    url: "https://hn-favorites.herokuapp.com/signup",
			    data: JSON.stringify({
			        email: username, 
			        password: password
			    })
			})
			.then(function(data) { 
				console.log(data.auth_token);
				localStorage.setItem("hos_autoToken", data.auth_token);
				localStorage.setItem("hos_loggedIn", true);
				loggedIn = true;
				toggleLoginMenuMode($lnkLogin, $lnkSignup, loggedIn);
			})
			.fail(err => console.warn(err));
		}

		// Tried to do it this way: 
		/*$.post("https://hn-favorites.herokuapp.com/signup", {
				headers: {
			    	"Content-Type": "application/json"
			    },
				email: username,
				password: password
			})
			.then(function(response) {
				console.log(response);
			})*/
	})

	/*$btnSubmit.on('click', function() {

	});*/

	//$btnSubmit.on('click');
	/*var $linkSubmit = $("#link_submit");
	var $formSubmit = $("#submission");
	
	
	var $btnFavorites = $("#link_fav");
	var favoritesOnly = false;
	var urlFilterOn = false;*/

	/*$linkSubmit.on("click", function() {
		$formSubmit.eq(0).slideToggle(250);
	});

	$btnSubmit.on("submit", function (e) {
		e.preventDefault();

		// GRAB THE TEXT BOXES HERE
		var $title = $('#input_text1').val();
		var $url = ($('#input_text2').val()).replace("http://", "");

		var $listItem = $("<li>", {
		});

		$listItem.html(`<input type="checkbox">
			<span>${$title}</span>
			<span class="tiny_text">(<a href="#" class="link_filter">${$url}</a>)</span>
		`);

		$list.append($listItem);

		$formSubmit.eq(0).slideToggle(250);
	});

	$btnFavorites.on("click", function() {
		favoritesOnly = !favoritesOnly;

		$("#list_links li").each(function() {
			if (urlFilterOn === false) {
				var $checkbox = $(this).children().eq(0);

				if ($checkbox.prop("checked") === false) {
					$(this).toggleClass("visible invisible");
				} 
			} else {
				$(this).addClass("visible");
				$(this).removeClass("invisible");
			}
		});

		if (urlFilterOn) {
			urlFilterOn = false;
			favoritesOnly = false;
			$btnFavorites.text("favorites");
		}

		if (favoritesOnly === true) {
			$list.css("list-style-type", "none");
		} else {
			$list.css("list-style-type", "decimal");
		}

		// Just in case this was off!
		$list.on('click', ".link_filter", listCallback);
	});

	$list.on('click', ".link_filter", listCallback);

	function listCallback(e) {
		$btnFavorites.text("all");
		urlFilterOn = true;
		favoritesOnly = false;
		var $urlLink = $(e.target).text();


		$("#list_links li").each(function() {
			var $linkText = $(this).children().eq(2).children().eq(0).text();
			if ($linkText !== $urlLink) {
				$(this).toggleClass("visible invisible");
			};
		});

		$list.css("list-style-type", "none");
		$list.off('click');

	};*/
});

function createTopStoryList(n) {
	// This function needs to pull the list of top stories, then iterate through the top n,
	//	doing a get request for each

	return $.get("https://hacker-news.firebaseio.com/v0/topstories.json?")
	.then(function(response) {
		var promises = response.slice(0, n).map(function(currentVal) {
			return $.get(`https://hacker-news.firebaseio.com/v0/item/${currentVal}.json`)
		});

		return Promise.all(promises)
	});
}

function buildList(responseList, loggedIn) {
	var $listItems = [];
	var $listItem;
	var url;
	var index;
	var visible = loggedIn? "visible" : "invisible";

	responseList.forEach(function(val) {
		$listItem = $("<li>", {
		});
		
		//url = val.url;
		index = val.url.indexOf("://");
		url = val.url.slice(index+3);
		index = url.indexOf("/");
		url = url.slice(0, index);

		$listItem.html(`<input type="checkbox" class="${visible}">
			<span>${val.title}</span>
			<span class="tiny_text">(<a href="#" class="link_filter">${url}</a>)</span>
		`);

		$listItems.push($listItem);
	});
	return $listItems;
}

// NOT CURRENTLY WORKING
function setChecksVisible($list, visible) {
	$list.each(function(val) {
		if (visible) {
			val.addClass("visible_checkbox");
			val.removeClass("invisible");
		} else {
			val.removeClass("visible_checkbox");
			val.addClass("invisible");
		}
	});
}

function toggleLoginMenuMode($lnkLogin, $lnkSignup, loggedIn) {
	if (loggedIn === true) {
		// The formatting is super ugly when it goes to log out...
		debugger;
		$lnkLogin.text("log out");
		$lnkSignup.addClass("displayNone");
		$lnkSignup.removeClass("displayBlock");
	} else {
		$lnkLogin.text("log in");
		$lnkSignup.addClass("displayBlock");
		$lnkSignup.removeClass("displayNone");
	}
}









