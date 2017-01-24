$(function(){
	$(".submit-story").hide();
	$("#submit").on("click", function(e){
		$(".submit-story").slideToggle();
	});

	$(".submit-story").on("submit", function(e){
		var $title = $("#title").val();
		var $url = $("#url").val();
		var star = "<span class='glyphicon glyphicon-star-empty'></span>";
		$("#title").val("");
		$("#url").val("");
		$("ol").append("<li>" + star + " " + $title + " " + "<a id='listLinks' href=" + $url + ">(" + $url+ ")</a>" + "</li>");
		$(".submit-story").slideUp();
	});

	$("ol").on("click", ".glyphicon", function(e){
		$(e.target).toggleClass("glyphicon-star-empty glyphicon-star");
	});

	$("#favorites").on("click", function(e){
		$("li").find(".glyphicon-star-empty").parent().toggle();
		//$("#favorites").text("all");
		if($("#favorites").text() === "favorites"){$("#favorites").text("all")}
			else if($("#favorites").text() === "all"){$("#favorites").text("favorites")};
	});

});
