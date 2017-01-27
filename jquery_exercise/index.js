$(document).ready(function() {
var top25obj = {};
//only load favorites on reload
//Imediately checks for login/logout and adjusts accordingly
if (localStorage.getItem("hackerToken") !== null) {
	$('#login').text('Logout');
	};
 //async nested calls to get IDs, then insert IDs into second API call. Hide stars if not logged in
var getNews = function () {  $.get('https://hacker-news.firebaseio.com/v0/topstories.json', function(data) {
	for (let i=0;i<25;i++) { //this WONT work without let scoping!
		$.get("https://hacker-news.firebaseio.com/v0/item/" + data[i] + ".json", function(data2) {
			top25obj[data[i]] = {id: data2.id, author: data2.by, title: data2.title, url: data2.url};
			var li = $('.list').append("<li>" + "<span class='glyphicon glyphicon-star-empty'></span>" + 
				"<a href = "+ data2.url + " >"  + '<span class = title>'+ data2.title + '</span>' + '</a>' + " " + '<span class = "links">' + 
				 "<a href = '"+ data2.url + "'>" + data2.url +  '</a>'  +"</span>" + "</li>")
// Setting data object for each item as it propogates
				$('li').last().data('id-by', {by: data2.by, id: data2.id, title: data2.title, url: data2.url, favorite: false});
				// console.log( $('.list').last().data('id-by', {}) );
				// $('.list').last().data('id-by', {by: data2.by, id: data2.id}) 
			if (localStorage.getItem("hackerToken") !== null) {	$('.list').find('.glyphicon-star-empty').show();}
		});
	};
});
}
getNews();
// drop down menu toggle for login form
//logout functionality - add and remove stars, change login/logout button
$("#login").on('click', function() {
		$('#sign-up-form').toggle();

	if (localStorage.getItem("hackerToken") !== null) {
		$('#login').text("Login");
		//clear favorites if log out
		localStorage.removeItem("hackerToken");
		alert("You have been logged out.");
		$('.list').find('.glyphicon-star-empty').hide();
	if (favoriteOpen) {
			$('#sign-up-form').hide();
			$('.list').empty();
			getNews();
		}
	}
});
//add event listenr for submit-login collapses and clears after hitting button
// if (loggedIn = false)
$('#login-button').on('click', function(data) {
	var user = $('#username').val();
	var pass = $('#password').val();
	var login = $.post("https://hn-favorites.herokuapp.com/login", {
		"email": user,
		"password": pass
	});
	$('#username').val("");
	$('#username').val("");
	$('#sign-up-form').toggle();
	login.then(function(x) {
//sets logged-in status
		alert("You have been logged in.")
		$('#login').text("Logout");
		$('.list').find('.glyphicon-star-empty').show();
		localStorage.setItem("hackerToken", x.auth_token);
	});	
});
//event listner for sign up form, collapses and clears after hitting button
$('#create-account-button').on('click', function(data) {
	var user = $('#createUsername').val();
	var pass = $('#createPassword').val();
	var returnValue = $.post("https://hn-favorites.herokuapp.com/signup", {
		"email": user,
		"password": pass
	});
	$('#sign-up-form').toggle();
	returnValue.then(function(x) {
		$('#createUsername').val("");
		$('#createPassword').val("");
		localStorage.setItem("hackerToken", x.auth_token);
	});
	
});
//drop down menu for submit form
$("#submit").on('click', function () {
	$("#drop-down-form").toggle();
});
//appends user input data into new element in list
$('#submit-button').on('click', function() {
	var $title = $("#inputTitle").val();
	var $link = $("#inputLink").val();
	var star = "<span class='glyphicon glyphicon-star-empty'></span>";
	
	// var $newLi = $('<li>', {
	// 	html: $title + " " + '<span class = "links">' + $link + '</span>'
	// });
	// $newLi.prepend($(star));
	// $('.list').append($newLi);

	$('.list').append("<li>" + star + " " + $title + " " + "<span class='links'>" + $link + "</span>" + "</li>");
	$("#inputTitle").val("");
	$("#inputLink").val("");
})
//toggles an item as a favorite or not
$('.list').on('click', '.glyphicon', function(e) {
	$(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
//confirm data is being assigned by jQuery
	// console.log( $(e.target).parent().text() );
	// console.log( $(e.target).parent().data() );
	// console.log ( $(e.target).parent().data('id-by').id    );
	var $by = $(e.target).parent().data('id-by').by;
	var $id = $(e.target).parent().data('id-by').id;
	var $title = $(e.target).parent().data('id-by').title;
	var $url = $(e.target).parent().data('id-by').url;
	var $id = $(e.target).parent().data('id-by').id;
//update server favorites
	if ($(e.target).parent().data("id-by").favorite === false) {
		$(e.target).parent().data("id-by").favorite = true; 
		console.log("favorited");
		console.log($(e.target).parent().data("id-by"));
	//if fav = false, send POST request
		$.ajax({
	      url: "https://hn-favorites.herokuapp.com/stories.json",
	      method: "POST",
	      headers: {
	        "Authorization": localStorage.getItem("hackerToken")
	      },
	      data: JSON.stringify({
	        "hacker_news_story": {
	          "by": $by,
	          "story_id": $id,
	          "title": $title,
	          "url": $url
	        }
	      }),
	      dataType: "json",
	      contentType: "application/json"
	    }).then(function (d) {
//if succesful, update jquery data element with ID
	    	console.log(d.id);
	    	$(e.target).parent().data("id-by").id = d.id;
	    	console.log( $(e.target).parent().data("id-by") );
	    	console.log("favorited");
			console.log($(e.target).parent().data("id-by"));
	    }).catch(function (e) {
	    	console.log(e);
	    });
	}
	else if ($(e.target).parent().data("id-by").favorite === true) {
		$(e.target).parent().data("id-by").favorite = false;
		console.log("unfavorited")
		console.log($(e.target).parent().data("id-by"));
		console.log($(e.target).parent().data("id-by").id);
	//if fav = true, delete
		$.ajax({
	      url: "https://hn-favorites.herokuapp.com/stories/"  
	      + $(e.target).parent().data("id-by").id  
	      + ".json",
	      method: "DELETE",
	      headers: {
	        "Authorization": localStorage.getItem("hackerToken")
	      },
	      dataType: "json",
	      contentType: "application/json"
	    }).then(function (d) {
//if succesful, update jquery data element with ID
	    	console.log("Unfavorited")
	    }).catch(function (e) {
	    	console.log(e);
	    });
}
// Toggles favorites hidden or in view
// $('#favorites').on('click', function() {
// 	$('.list').find('.glyphicon-star-empty').parent().toggle();
// //if text is Favorites, set to All, and vice versa
// 	if ($('#favorites').text() === "Favorites") {
// 		$('#favorites').text("All")
// 	}
// 	else if ($('#favorites').text() === "All") {
// 		$('#favorites').text("Favorites")
// 	};
	// $.ajax({
	//       url: "https://hn-favorites.herokuapp.com/stories",
	//       method: "GET",
	//       headers: {
	//         "Authorization": localStorage.getItem("hackerToken")
	//       },
	//       dataType: "json",
	//       contentType: "application/json"
	//     }).then(function (d) {
	//     	console.log("Favorites retrieved")
	//     }).catch(function (e) {
	//     	console.log(e);
	//     });

// });

});
var favoriteOpen;
var openFavorites = function () { $('#favorites').on('click', function(e) {
	console.log("Favorites button clicked");
	$(".list").empty();
	if (!favoriteOpen) {
		favoriteOpen = true;
		$('#favorites').text("All");
	$.ajax({
	      url: "https://hn-favorites.herokuapp.com/stories.json",
	      method: "GET",
	      headers: {
	        "Authorization": localStorage.getItem("hackerToken")
	      },
	      dataType: "json",
	      contentType: "application/json"
	    }).then(function (favorites) {
	    	console.log(favorites);
//		
			favorites.forEach(function (fav) {
				$('.list').append("<li>" + "<span class='glyphicon glyphicon-star'></span>" + 
				"<a href = "+ fav.url + " >" + "<span class = 'title'>" + fav.title + "</span>" + '</a>' + " " + '<span class = "links">' + 
				 fav.url + "</span>" 
				 + "   by: " + fav.by
				 + "</li>")
	// Setting data object for each item as it propogates
				$('li').last().data('id-by', {
					by: fav.by, 
					id: fav.id, 
					title: fav.title, 
					url: fav.url, 
					favorite: true
				});
				
				});
			$('.list').find('.glyphicon-star').toggle();
	    }).catch(function (e) {
	    	console.log(e);
	    });

	} else if (favoriteOpen) {
		favoriteOpen = false;
		$('#favorites').text("Favorites")
		$('ol').empty();
		getNews();
	}
});


if (localStorage.getItem("hackerToken") === null && favoriteOpen) {
	favoriteOpen = false;
	$('#favorites').text("Favorites")
	$('ol').empty();
	getNews();
};
}
openFavorites();
} )