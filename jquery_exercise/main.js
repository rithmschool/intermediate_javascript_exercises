$(function() {

	$("form").on("submit", function(e) {
	    e.preventDefault();

	    var $newTitle = $('#newTitle').val()
	    var $newURL = $('#urlToAdd').val()
	    var icon = "<span class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span>"
	    var $newLi = $("<li>" + icon + "  " + $newTitle + " " + $newURL + "</li>");
	    $("ol").append($newLi);

	    $newTitle.val("");
	    $newURL.val("");
	});


	$('ol').click(function(event){
    	$(event.target).toggleClass('glyphicon-star-empty glyphicon-star');
	});

});




