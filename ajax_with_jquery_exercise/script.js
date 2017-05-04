$(function() {

	//let $submit = $('#login');
	let submitToggle = false;

	let $section = $("#listContent");
	let $listSection = $("#theList");

	let $login = $("#login");
	let $favorites = $("#favorites");
	let $logout = $("#logout");
	$favorites.css("display",'none');
	$logout.css("display",'none');

	let authToken = localStorage.getItem("token");
	toggleNav();

	function toggleNav(){
		console.log("toggle token", authToken);
		if ( ! ("token" in localStorage)){
			$login.css("display",'');
			$favorites.css("display",'none');
			$logout.css("display", "none");
		}else{
			// hide #login. because you're logged in.
			$login.css("display",'none');
			$favorites.css("display",'');
			$logout.css("display", '');
		}
		
	}
	//$section.hide();

	$logout.on('click',function(e){
		// remove auth from local storage.
		localStorage.removeItem("token");
		authToken = undefined;
		console.log("stored token", localStorage.getItem("token"))
		toggleNav();
	});

	function loadTopStories(){

		$("#theList").empty();

		let myList = [];

		$.get('https://hacker-news.firebaseio.com/v0/topstories.json')
		.then(function(res) {
	    	myList = myList.concat(res.slice(0,20));
	    	return myList
		})
		.then(function(myList){ // myList;
		    let arr = myList.map(function(val){
		        return $.get(`https://hacker-news.firebaseio.com/v0/item/${val}.json`);

		    })
		    //console.log(arr);
		    return Promise.all(arr);

		})
		.then(function(res){
		    //console.log(res);

		    for (let i =0; i< res.length; i++){

		    	addListItem(res[i].title, res[i].url, res[i].story_id, res[i].by, res[i].id, false);

		    }  
		});
	}

	loadTopStories();

	function addListItem(title, displayUrl, storyID, by, id, faveStatus){

		let $newSpan = $("<span>");

		if (faveStatus === true){
			$newSpan.attr('class', "glyphicon glyphicon-star");
		} else {
			$newSpan.attr('class', "glyphicon glyphicon-star-empty");
		}
		

		let $newNumSpan = $("<span>")
			.addClass("number");
		if (arguments.length <= 2){
			$newNumSpan.text($("#theList>div").length+1 + ". ");
		};


		let $newA = $("<a>", {
			//href: $("#url").val(), // this
			href: displayUrl, // this
			target: "_blank",
			//text: $("#site").val() // this
			text: title // this
		});

		let url = $newA.attr('href');
		url = url.split("://")[1].split("/")[0];
		if (url.split(".").length > 2){
			url = url.split(".").slice(-2).join(".");
		}
		// extract domain:

		let $newUrlSpan = $("<span>")
			.attr('data-story_id', storyID)
			.attr('data-id', id)
			.attr('data-by', by)
			.attr('data-domain', url)
			.text("(" + url + ")");
		
		let $newUrlSmall = $("<small>")
			.append($newUrlSpan);


		let $newDiv = $("<div>")
			.append($newNumSpan)
			.append($newSpan)
			.append($newA)
			.append($newUrlSmall)

		$listSection.append($newDiv);
	}




	$login.on('click', function(e){
		// this just rolls out the form.


		if (submitToggle === false){
			submitToggle = true;
			// set visibility to true
			//$section.css("visibility","true");
			$section.slideDown();
		} else {
			submitToggle = false;
			$section.slideUp();
		}

	})

	$loginForm= $(".loginform");

	$loginForm.on('submit',function(e){
		console.log("loginform",e);

		e.preventDefault();
		// create new div. as a new last child to 
		
		// send data to heroku app
		// take token returned and stick into localstorage
		$.ajax({
			method: "POST",
			url: "https://hn-favorites.herokuapp.com/login",
			data: {email:$('#email').val(),password:$('#password').val()},
			dataType: "json"
		}).then(function(res){
			//console.log(res);
			localStorage.setItem("token", res.auth_token);
			authToken = res.auth_token;
			toggleNav();
		})
		.catch(function(err){console.log(err)});

		$loginForm.trigger("reset");

		submitToggle = false;
		$section.slideUp();

	})

	$newUserForm=$(".newuserform");

	$newUserForm.on('submit',function(e){
		console.log("sign up form",e);

		e.preventDefault();
		// create new div. as a new last child to 
		
		// send data to heroku app
		// take token returned and stick into localstorage
		$.ajax({
			method: "POST",
			url: "https://hn-favorites.herokuapp.com/signup",
			data: {email:$('#newemail').val(),password:$('#newpassword').val()},
			dataType: "json"
		}).then(function(res){
			console.log(res);
			localStorage.setItem("token", res.auth_token);
			authToken = res.auth_token;
			toggleNav();
		})
		.catch(function(err){console.log(err)});

		$newUserForm.trigger("reset");

		submitToggle = false;
		$section.slideUp();

	})

	
	$icons = $("#theList");
	$icons.on('click',".glyphicon",function(e){
		if ($(e.target).hasClass("glyphicon-star-empty")){
			// making a link a favorite
			debugger;
			/*
			$.ajax({
				method: "POST",
				url: "https://hn-favorites.herokuapp.com/stories.json",
				data: JSON.stringify({
					hacker_news_story: {
						by: $(e.target).parent().children().eq(2).attr('data-by'),
						story_id: $(e.target).parent().children().eq(2).attr('data-story_id'),
						title: $(e.target).parent().children().eq(2).text(),
						url: $(e.target).parent().children().eq(2).attr('href')
					}
				}),
				dataType: "json",
				headers: {
				    Authorization: authToken
				 }
			}).then(function(res){
				//console.log(res);
				localStorage.setItem("token", res.auth_token);
				authToken = res.auth_token;
				toggleNav();
			})
			.catch(function(err){console.log(err)});
			*/

			$(e.target).removeClass("glyphicon-star-empty");
			$(e.target).addClass("glyphicon-star");



		} else {
			$(e.target).removeClass("glyphicon-star");
			$(e.target).addClass("glyphicon-star-empty");
		}
	})

	let $faves = $("#favorites");
	let favesToggle = false;

/*
	$icons.on('click',"div span:last-child",function(e){
		//let site = $(e.target).parent().parent().children().eq(2).text();//.split("://")[1].split("/")[0];
		let site = $(e.target).parent().parent().children().eq(3).children().eq(0).attr('data-domain');
		//$(`#theList span:last-child:not([data-domain='${site}'])`).parent().parent().css('display','none');
		$("#theList span:last-child:not([data-domain='" + site + "'])").parent().parent().css('display','none');
		$faves.text("All");

		let $numbers = $(".number");
		$numbers.css('display', 'none');

		favesToggle=true;
		// favorites disappear;
		// favorites becomes all
	});
*/




	$faves.on('click',function(e){
		if (favesToggle === false){
			favesToggle = true;

			// displaying the users favorites here.
			// empty the section with the divs.
			// get the new list based on user prefs
			//display that list.

			$.ajax({
				method: "GET",
				url: "https://hn-favorites.herokuapp.com/stories.json",
				//data: {email:$('#newemail').val(),password:$('#newpassword').val()},
				//dataType: "json"
				headers: {
				    Authorization: authToken
				  }
			}).then(function(res){
				console.log(res);
				// empty the section with the divs
				$("#theList").empty();

				for (let i =0; i< res.length; i++){

			    	// faves are displayed differently (no numbers)
			    	// function can recognize if it's displaying a fave  if id and by are defined.

			    	//addListItem(title, url, id, by)
			    	addListItem(res[i].title, res[i].url, res[i].story_id, res[i].by, res[i].id, true);

			    }  

			})
			.catch(function(err){console.log(err)});

			$faves.text("All");
		} else {
			favesToggle = false;
			loadTopStories();

			let $numbers = $(".number");
			$numbers.css('display', '');
			$faves.text("Favorites");

			//unhide any hidden divs.
			$("#theList").children().css('display','');

		}

	})


});

