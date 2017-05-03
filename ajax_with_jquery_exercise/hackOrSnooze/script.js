$(function(){
	if (JSON.parse(localStorage.getItem("cred")) === null){
		var token = [];
		$('.logout').hide();
	} else {
		var token = JSON.parse(localStorage.getItem("cred"));
		$('.signup').hide();
		$('.login').hide();
	}
	//refresh when clicking brand
	$('.brand').on("click",function(){
		window.location = window.location.href + "#refresh";
		window.location.reload();
	});
	//favorite and unfavorite
	$('.list').on("click",".glyphicon",function(e){
		$(e.target).toggleClass("glyphicon-star-empty glyphicon-star");
		//delete from favorite
			if($(e.target).data("favid") !== undefined){
				$.ajax({
					method: "DELETE",
					url: "https://hn-favorites.herokuapp.com/stories/"+ $(e.target).data("favid") + ".json",

					headers: {
						Authorization: token[0]["auth_token"]
					},
					dataType: "json",
					contentType: "application/json" 
				})
			}
		//add to favorites
		if($(e.target).hasClass("glyphicon-star")){
			var id = $(e.target).parent().children().eq(3).text();
			$.get("https://hacker-news.firebaseio.com/v0/item/"+ id +".json?print=pretty").then(function(res){
				return $.ajax({
					method: "POST",
					url: "https://hn-favorites.herokuapp.com/stories.json",

					headers: {
						Authorization: token[0]["auth_token"]
					},
					data: JSON.stringify({
					    hacker_news_story: {
					    	by: res.by,
					    	story_id: res.id,
					    	title: res.title,
					    	url: res.url
					    }
					}),
					dataType: "json",
					contentType: "application/json" 
				})
			}).then(function(res){
				//tie ID to the glyphicon span
				$(e.target).data("favid", res.id);
			})
		}
	});

	$('form').hide();
	var toggleShow = true;
	// $('.search').on("click", function(){
	// 	$('form').slideToggle(300);
	// });

	$('.login').on("click", function(){
	 	$('form').slideToggle(300);
	 	$('.signorlog').text("login");
	});
	$('.signup').on("click", function(){
	 	$('form').slideToggle(300);
	 	$('.signorlog').text("sign up");
	});
	$('.logout').on("click", function(){
		localStorage.removeItem("cred");
		$('.logout').hide();
		$('.signup').show();
		$('.login').show();
		window.location = window.location.href + "#refresh";
		window.location.reload();
	})
	$('#formsignup').on("submit", function(e){
		e.preventDefault();
		if($('.signorlog') === "login"){
			//login request
			$.post("https://hn-favorites.herokuapp.com/login", {email: $('#email').val(), password: $('#password').val()}).then(function(res){
				token.push(res);
    			localStorage.setItem("cred", JSON.stringify(token));
    			window.location = window.location.href + "#refresh";
				window.location.reload();
			});
		} else {
			//sign up request
			$.post("https://hn-favorites.herokuapp.com/signup", {email: $('#email').val(), password: $('#password').val()}).then(function(res){
				token.push(res);
    			localStorage.setItem("cred", JSON.stringify(token));
    			window.location = window.location.href + "#refresh";
				window.location.reload();
			});
		}
	})
	$('.fav').on("click", function (){
		$('ol').hide();
		$('ul').empty();
		$.ajax({
			method: "GET",
			url: "https://hn-favorites.herokuapp.com/stories.json",
			headers: {
				Authorization: token[0]["auth_token"]
			},
			dataType: "json",
			contentType: "application/json" 
		}).then(function(res){
			for(var j = 0; j < res.length; j++){
				var $newListItem = $('<li>');
				var $newGlyph= $('<span>')
						.addClass("glyphicon glyphicon-star")
						.data("favid", res[j].id);
				var $newItem = $('<span>')
						.addClass("item")
						.text(res[j].title);
				var $newLink = $('<a>');
				var $newId = $('<span>')
						.addClass('postid')
						.text(res[j].story_id)
						.hide();
				var url = res[j].url.split(/\/\//)[1].split(/\//)[0];
				$newLink.attr('href', res[j].url)
						//.text('(' + res.url.match(/\w+.\w+$/)[0] + ")");
						.text('(' + url.match(/\w+.\w+$/)[0] + ")");
				$newListItem.append($newGlyph)
							.append(" ")
							.append($newItem)
							.append(" ")
							.append($newLink)
							.append($newId);
				$('ul').append($newListItem);
			}
		})
	});


	//populate list
	$.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(res){
		for(var i = 0; i < 20; i++){
			$.get("https://hacker-news.firebaseio.com/v0/item/"+ res[i] +".json?print=pretty")
			.then(function(res){
				var $newListItem = $('<li>');
				var $newGlyph= $('<span>')
						.addClass("glyphicon glyphicon-star-empty");
				var $newItem = $('<span>')
						.addClass("item")
						.text(res.title);
				var $newLink = $('<a>');
				var $newId = $('<span>')
						.addClass('postid')
						.text(res.id)
						.hide();
				var url = res.url.split(/\/\//)[1].split(/\//)[0];
				$newLink.attr('href', res.url)
						//.text('(' + res.url.match(/\w+.\w+$/)[0] + ")");
						.text('(' + url.match(/\w+.\w+$/)[0] + ")");
				$newListItem.append($newGlyph)
							.append(" ")
							.append($newItem)
							.append(" ")
							.append($newLink)
							.append($newId);
				$('ol').append($newListItem);
			})
		}
		return;
	}).then(function(){
		if(token.length !== 0){
			return $.ajax({
				method: "GET",
				url: "https://hn-favorites.herokuapp.com/stories.json",
				headers: {
					Authorization: token[0]["auth_token"]
				},
				dataType: "json",
				contentType: "application/json" 
			})
		}
	}).then(function(res){
		if(token.length !== 0){
			var list = document.querySelectorAll('.postid');
			for(var k = 0; k < res.length; k++){
				for(var a = 0; a < list.length; a++){
					if(Number(res[k].story_id) === Number(list[a].innerText)){
						let match = $(list[a]).parent().children().eq(0);
						match.removeClass("glyphicon-star-empty");
						match.addClass("glyphicon-star");
						match.data("favid", res[k].id);
					}
				}
			}
		}
	})
	//old code

	// $('#formTitle').on("submit", function(e){
	// 	e.preventDefault();
	// 	var $newListItem = $('<li>');
	// 	var $newGlyph= $('<span>')
	// 			.addClass("glyphicon glyphicon-star-empty");
	// 	var $newItem = $('<span>')
	// 			.addClass("item")
	// 			.text(' ' +$('#title').val());
	// 	var $newLink = $('<a>');
	// 	$newLink.attr('href', $('#url').val()).text('(' + $('#url').val().match(/\w+.\w+$/)[0] + ")");
	// 	$newListItem.append($newGlyph)
	// 				.append($newItem)
	// 				.append(" ")
	// 				.append($newLink);
	// 	$('ol').append($newListItem);
	// 	$('#formTitle').trigger("reset");
	// })

	// $('.fav').on("click", function(){
	// 	debugger
	// 	if($('.fav').text() === "favorites"){
	// 		$('.fav').text("all");
	// 		$('ol').css({"list-style-type" : "none"})
	// 		$('.glyphicon-star-empty').parent().hide();
	// 	} else {
	// 		$('.fav').text("favorites");
	// 		$('ol').css({"list-style-type" : "decimal"})
	// 		$('li').show();
	// 	}
	// })

	// $('ol').on("click", "a", function(e){
	// 	e.preventDefault();
	// 	if($('.fav').text() === "all"){
	// 		$('li').show();
	// 		$('.fav').text("favorites");
	// 	} else {
	// 		$('.fav').text("all");
	// 		$('a').filter(function(i, val){
	// 			return $(val).text() !== $(e.target).text();
	// 		}).parent().hide();
	// 	}
	// });

})