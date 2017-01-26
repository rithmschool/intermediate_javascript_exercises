$(document).ready(function(){
	$("#signUp-form").hide();
	$("#login-form").hide();
	$("#logout").hide();
	var $email;
	var $password;
	var top25 = {};
	var $star = "<span class='glyphicon glyphicon-star-empty'></span>";

	$.get('https://hacker-news.firebaseio.com/v0/topstories.json', function(data) {
	    for (let i=0;i<25;i++) { //works only with let
	        // top25.push(data[i]);
	        $.get("https://hacker-news.firebaseio.com/v0/item/" + data[i] + ".json", function(data2) {
	        	//top25[data[i]] = {title: data2.title, url: data2.url};
	        	addStory(data2, $("#stories"));
	        })

	    }
	})

	function addStory(story, news){
	    var $title = "<span class='title'>" + story.title + "</span>";
	    var $url = "<span class='links'>" + "(" + story.url + ")" + "</span>"
	    // var $author = $("<span>",{  // this is  an object when you append this in stories it is converted to [object object]
	    // 	text: story.by,
	    // 	data: {
	    // 		id: story.id
	    // 	}
	    // })
	    var $author = "<span class='author' data-id="+story.id+">" + story.by + "</span>";
	    news.append("<li>"+ $star +" "+ $title +" "+ $url + " " + $author + "</li>");
	}
	


	$("#login").on("click", function(event){
		$("#signUp-form").toggle();
		$("#login-form").toggle();

	})

	$("#login-form").on("submit", function(event){
		$email = $(".email").val();
		$password = $(".password").val();
		$.post("https://hn-favorites.herokuapp.com/login",{
			"email": $email,
			"password": $password
		}).then(function(auth){
		 	console.log(auth.auth_token);
		 	localStorage.setItem('token', auth.auth_token);
		}).catch(function(e){
			console.log(e);
		})

	})

	$("#signUp-form").on("submit", function(event){
		event.preventDefault();
		$email = $(".email").val();
		$password = $(".password").val();
		$.post("https://hn-favorites.herokuapp.com/signup",{
			"email": $email,
			"password": $password
		}).then(function(auth){
		 	console.log(auth.auth_token);
		 	localStorage.setItem('token', auth.auth_token);
		 }, function(error){
		 	console.log(error);
		});

	    loginStatus();
	});

	$("#signUp").on('click', function(){
		$("#signUp-form").slideUp();
		$("#login-form").slideUp();
		$("#login").toggleClass("#login", "#logout");	
	})


	function loginStatus(){
		if(localStorage.getItem('token')){
			$("#login").text("Logout");
			//$star.show();
		}
		else{
			$login.text("Login");
			$star.hide();
		}
	}

	$('ol').on('click', ".glyphicon", function(event){
		$(event.target).toggleClass("glyphicon-star-empty glyphicon-star");
	})


	// var obj = $.ajax({
	// 	url: "https://hn-favorites.herokuapp.com/stories.json",
	// 	method: "GET",
	// 	headers: {
	// 		"Authorization": localStorage.getItem('token')
	// 	}
	// });

	// console.log(obj);


	//adding a favorite  why you need to add a favourite to server
	$("#stories").on('click', '.glyphicon-star-empty', function(event){
		var $target = $(event.target);
		var title = $target.next().text();  //how can i get a title if i dont add tags???
		var url =  $target.next().next().text();
		var story_id = $target.next().next().next().data('id');
		var author = $(event.target).next().next().next().text();

		$.ajax({
			url: "https://hn-favorites.herokuapp.com/stories.json",
			method: "POST",
			headers: {
				"Authorization": localStorage.getItem('token')
			},
			//ajax doesnot stringify data????
			data: JSON.stringify({
				"hacker_news_story": {
					"by": author,
					"story_id": story_id,
					"title": title,
					"url": url
				}
			}),
			dataType: "json",  //do you need this??
			contentType: "application/json"
		}).then(function(data){
			$(event.target).data('id', data.id)  //why this?????
		});

	});


	$("#favorites").on('click', function(event){
		$("#stories").hide();
		$.ajax({
			url: "https://hn-favorites.herokuapp.com/stories.json",
			method: "GET",
			headers: {
				"Authorization": localStorage.getItem('token')
			}
		}).then(function(stories){
			for(var i=0; i<stories.length; i++){
				addStory(stories[i], $("#fav"));
			}
		})

	});



	// //deleting a favourite
	$("#stories").on('click', '.glyphicon-star', function(event){
		var id = $(event.target).data('id');
		console.log(id);
		$.ajax({
			url: "https://hn-favorites.herokuapp.com/stories/"+id+".json",
			method: "DELETE",
			headers: {
				"Authorization": localStorage.getItem('token')
			},
			dataType: "json",
			contentType: "application/json"
		}).then(function(data){
			$(event.target).parent().remove();
			$(event.target).toggleClass('glyphicon-star-empty glyphicon-star');
		});

	})


})


