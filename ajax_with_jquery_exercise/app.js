$(function(){
	$("#submit-story").hide();
	$(".login-signup").hide();
	$("#submit").on("click", function(e){
		$("#submit-story").slideToggle();
	});

	function loginOut(){
		if($("#login").text() === "login"){
			$("#login").text("logout");
			$("#login").attr("id", "logout");
			}
		else if($("#login").text() === "logout"){
				$("#login").text("login");
				$("#login").attr("id", "login");
			};
	};

	$("#login").on("click", function(e){
		$(".login-signup").slideToggle();
	});

	$("#nav-links").on("click", "#logout", function(e){
		localStorage.removeItem("token");
		$("#logout").text("login");
		$("#logout").attr("id", "login");
		$("ol").find(".glyphicon").toggle();
	});


	var BASE_URL = "https://hacker-news.firebaseio.com/v0"; 
	var star = "<span class='glyphicon glyphicon-star-empty'></span>";

	// if(localStorage.getItem("token") !== null){
	// 	$.get(`${BASE_URL}/topstories.json?`).then(function(storyId) {
	// 	    var promises = storyId.slice(0, 20).map(id => $.get(`${BASE_URL}/item/${id}.json?`));
	// 	    return Promise.all(promises);
	// 	}).then(function(stories) {
	// 	    stories.forEach(story => $("ol").append(`<li>${star} ${story.title} <a id='listLinks' href="${story.url}">(${story.url})</a></li>`));
	// 	});
	// }
	// else if(localStorage.getItem("token") === null){
	// 	$.get(`${BASE_URL}/topstories.json?`).then(function(storyId) {
	// 	    var promises = storyId.slice(0, 20).map(id => $.get(`${BASE_URL}/item/${id}.json?`));
	// 	    return Promise.all(promises);
	// 	}).then(function(stories) {
	// 	    stories.forEach(story => $("ol").append(`<li>${story.title} <a id='listLinks' href="${story.url}">(${story.url})</a></li>`));
	// 	});
	// }

	$.get(`${BASE_URL}/topstories.json?`).then(function(storyId) {
	    var promises = storyId.slice(0, 20).map(id => $.get(`${BASE_URL}/item/${id}.json?`));
	    return Promise.all(promises);
	}).then(function(stories) {
	    stories.forEach(story => $("ol").append(`<li>${star} ${story.title} <a id='listLinks' href="${story.url}">(${story.url})</a></li>`));
	});

	$("#submit-story").on("submit", function(e){
		var title = $("#title").val();
		var url = $("#url").val();
		$("#title").val("");
		$("#url").val("");
		$("ol").append(`<li>${star} ${title} <a id='listLinks' href=${url}>(${url})</a></li>`);
		$("#submit-story").slideUp();
	});

	$("#login-form").on("submit", function(e){
		var emailLogin = $("#email-login").val();
		var passwordLogin = $("#password-login").val();
		$.post(`https://hn-favorites.herokuapp.com/login`, {email: emailLogin, password: passwordLogin}).then(function(d){
			localStorage.setItem("token", d.auth_token);
		}, function(e){
			console.log(e);
		});
		$("#email-login").val("");
		$("#password-login").val("");
		$("ol").find(".glyphicon").toggle();
		$(".login-signup").slideUp();
		loginOut();
	});

	$("#signup-form").on("submit", function(e){
		var emailSignup = $("#email-signup").val();
		var passwordSignup = $("#password-signup").val();
		$.post(`https://hn-favorites.herokuapp.com/signup`, {email: emailSignup, password: passwordSignup}).then(function(d){
			localStorage.setItem("token", d.auth_token);
		}, function(e){
			console.log(e);
		});
		$("#email-signup").val("");
		$("#password-signup").val("");
		$("ol").find(".glyphicon").toggle();
		$(".login-signup").slideUp();
		loginOut();
	});

	$("ol").on("click", ".glyphicon", function(e){
		$(e.target).toggleClass("glyphicon-star-empty glyphicon-star");
	});

	$("#favorites").on("click", function(e){
		$("li").find(".glyphicon-star-empty").parent().toggle();
		if($("#favorites").text() === "favorites"){$("#favorites").text("all")}
			else if($("#favorites").text() === "all"){$("#favorites").text("favorites")};
	});

});

// $("#login-form").on("submit", function(e){
	// 	var emailLogin = $("#email-login").val();
	// 	var passwordLogin = $("#password-login").val();
	// 	$.post(`https://hn-favorites.herokuapp.com/login`, {email: emailLogin, password: passwordLogin}).then(function(d){
	// 		localStorage.setItem("token", d.auth_token);
	// 	}, function(e){
	// 		console.log(e);
	// 	});
	// 	$("#email-login").val("");
	// 	$("#password-login").val("");
	// 	$(".login-signup").slideUp();
	// 	if($("#login").text() === "login"){$("#login").text("logout")}
	// 		else if($("#login").text() === "logout"){$("#login").text("login")};


	// });

	// $("#signup-form").on("submit", function(e){
	// 	var emailSignup = $("#email-signup").val();
	// 	var passwordSignup = $("#password-signup").val();
	// 	$.post(`https://hn-favorites.herokuapp.com/signup`, {email: emailSignup, password: passwordSignup}).then(function(d){
	// 		localStorage.setItem("token", d.auth_token);
	// 	}, function(e){
	// 		console.log(e);
	// 	});
	// 	$("#email-signup").val("");
	// 	$("#password-signup").val("");
	// 	$(".login-signup").slideUp();
	// 	if($("#login").text() === "login"){$("#login").text("logout")}
	// 		else if($("#login").text() === "logout"){$("#login").text("login")};
	// });
