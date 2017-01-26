$(document).ready(function(){
	$(".submit-story").hide();
	$("#submit").on("click", function(event){
		event.preventDefault();
		$(".submit-story").toggle();
		// console.log("hello");
		// var $input = $("<input>", {
		// 	width: "400px",
		// 	height: "30px",
		// 	value: "title",
		// 	type: "text"
		// });
		// $input.css("marginLeft", "50px");
		// $(".form-group").append($input);
		// $('input#url').after($input);

	})



	$(".submit-story").on("submit", function(event){
		event.preventDefault();
		var $title = $("#title").val();
		var $url = $("#url").val();
		var url = "<a href=" + $url + ">" + "("+ $url +")" + "</a>";
		// var star = $('<span>', {
		// 	'class': 'glyphicon glyphicon-star-empty'
		// });

		var star = "<span class='glyphicon glyphicon-star-empty'></span>"
		$('ol').append("<li>"+star+" "+$title+" "+url+"</li>");
		$("#title").val("");
		$("#url").val("");
		$(".submit-story").slideUp();

	})


	$('ol').on('click', ".glyphicon", function(event){
		$(event.target).toggleClass("glyphicon-star-empty glyphicon-star");
	})

	$("#favorites").on("click", function(event){
		if($("#favorites").text() === 'favorites'){
			$("#stories").children($('li').find(".glyphicon-star-empty").parent()).hide();
		}
	})
})