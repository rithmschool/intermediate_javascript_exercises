$(document).ready(function(){

	var $article = $("#articles")

	//the form is toggling on and off
	var $addNew = $('#addNew')
	var $formToggle = $('#formToggle')
	$addNew.click(function() {
		$form.toggle('form-inline-block form-inline')
	})

	var $favToggle = $('#fav')
	var $notFavorites = $('.glyphicon-star-empty')
	$favToggle.click(function() {
		//this does not work yet.
		
		$notFavorites.parent().toggle('hidden block')

		// for (var i = 0; i < $notFavorites.length; i++) {
		// 	$notFavorites.eq(i).next().addClass('hidden')
		// }
		//add class of hidden to li
		// add something to ol tag that makes it unordered.

	})	

	var $form = $('.form-inline')
	var $title = $('#title')
	var $url = $('#url')

	$form.on('submit', function(e) { // adds a new list item when the submit button is pressed.
		e.preventDefault(); //prevents the form from refreshing the page
		
		
		var $newLi = $('<li>');
		var $newStar = $('<span>', {
			class: "glyphicon glyphicon-star-empty"
		});
		var $newATag = $('<a>', {
			href: $url.val(),
			text: " " +$title.val()
		})

		$newLi.append($newStar);
		$newLi.append($newATag)

		

		$article.append($newLi)

		$title.val("")
		$form.toggle()
	})


	//toggle the star
	$article.on('click', 'span', function(e) {
		$(e.target).toggleClass('glyphicon-star glyphicon-star-empty')
	})



})




