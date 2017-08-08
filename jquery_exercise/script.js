$(function(){

	let $submit = $("#submit");
	let $favorites = $("#favorites");
	let $addStory = $("#add-story");
	let $storyList = $("#story-list")
	let $form = $("form");
	let $title = $("#title");
	let $url = $("#url");
	let $ol = $("ol");


	$submit.on("click", function(e){
		$addStory.toggleClass("hide");
	})


	$form.on("submit", function(e){
		e.preventDefault();

		let $starSpan = $("<span>", {
			addClass: "glyphicon glyphicon-star-empty"
		})

		let $hostName = $url.val().split("://")[1]
		if($url.val().split(".").length > 2){
			$hostName = $url.val().split(".").slice(-2).join(".");
		}

		let $urlSpan = $("<span>", {
			class: "small",
			text: `(${$hostName})`
		})

		let $newA = $("<a>", {
			attr: {
				href: $url.val()
			},
			target: "_blank",
			text: `${$title.val()} `
		})

		let $newStory = $("<li>").append($starSpan).append($newA).append($urlSpan);

		$ol.append($newStory);
	       
	  $form.trigger("reset");
	  $addStory.toggleClass("hide");
	})

	$ol.on("click", "span.glyphicon", function(e){
		$(e.target).toggleClass("glyphicon-star-empty glyphicon-star");	
	})

	$ol.on("click", "span.small", function(e){
		let $clickedUrlText = $(e.target).text();
		let $allLis = $("li");
		$allLis.each(function(i,el){
			console.log($(el).children().eq(2).text())
			if($(el).children().eq(2).text() !== $clickedUrlText){
					$(el).toggleClass("hide");
			}
		})
	})

	$favorites.on("click", function(e){
		let $allLis = $("li");
		if($(e.target).text() === "favorites"){
			$(e.target).text("all");
		} else {
			$(e.target).text("favorites");
		}
		
		$allLis.each(function(i,el){
			if($(el).children().eq(0).hasClass("glyphicon-star-empty")){
					$(el).toggleClass("hide");
			}
		})
	})
}) 