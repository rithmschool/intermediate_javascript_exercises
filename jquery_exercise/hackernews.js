
//add listener for submit to be clicked
$(function(){
	$("form").hide();



	var $items = $("#items");

	$("form").on("submit", function(e){
		e.preventDefault();

		var $addTitle = $("#title");
		var titleText = $addTitle.val();
		var $addUrl = $("#url");
		var urlText = $addUrl.val();
		var shortUrl = urlText.slice(11);
		var $newLi = $("<li>", {
			html: `${titleText} (<a href="${urlText}">${shortUrl}</a>)`,
		});


		var $star = $("<img>", {
			src: "favstarempty.png",
			height: "20px",
			width: "20px",
			id: "favoriteToggle"
		});

		$newLi.prepend($star);
		$items.append($newLi);
		$addTitle.val("");
		$addUrl.val("");

	});


	// $("#favoriteToggle").on("click", function(e){
	// 	$("#favoriteToggle").html(){
	// 		'src', 'favstarfilled.jpg"
	// })

	// $("#favoriteToggle").on("click", function(e){
	// 	$("img").attr("src","favstarfilled.jpg");
	// });

	$("#star").on('click', function(e) {
		$(e.target).toggle();
	});
	
	//"class", glyphicon glyphicon-star glyphicon glyphicon-star-empty

	$("#clicktoToggle").on("click", function(e){
		$("form").toggle();
	});

});


//focus on login and logout first!
// $.ajax to get links to populate
// 2/3 are logging in (see above)
// 4 and later: post request
//new assignment:
//AJAX request for links (actual links)
//login - works and can favorite things
//favorite save even if you leave and come back next day
//when logged out, can't favorite everything
//https://github.com/rithmschool/intermediate_javascript_exercises/tree/master/ajax_with_jquery_exercise

