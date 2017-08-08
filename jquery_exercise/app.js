$(document).ready(function() {
	var $linkSubmit = $("#link_submit");
	var $formSubmit = $("#submission");
	var $btnSubmit = $("#form_submit");
	var $list = $("#list_links");
	var $btnFavorites = $("#link_fav");
	var favoritesOnly = false;
	var urlFilterOn = false;

	$linkSubmit.on("click", function() {
		$formSubmit.eq(0).slideToggle(250);
	});

	$btnSubmit.on("submit", function (e) {
		e.preventDefault();

		// GRAB THE TEXT BOXES HERE
		var $title = $('#input_text1').val();
		var $url = ($('#input_text2').val()).replace("http://", "");

		var $listItem = $("<li>", {
		});

		$listItem.html(`<input type="checkbox">
			<span>${$title}</span>
			<span class="tiny_text">(<a href="#" class="link_filter">${$url}</a>)</span>
		`);

		$list.append($listItem);

		$formSubmit.eq(0).slideToggle(250);
	});

	$btnFavorites.on("click", function() {
		favoritesOnly = !favoritesOnly;

		$("#list_links li").each(function() {
			if (urlFilterOn === false) {
				var $checkbox = $(this).children().eq(0);

				if ($checkbox.prop("checked") === false) {
					$(this).toggleClass("visible invisible");
				} 
			} else {
				$(this).addClass("visible");
				$(this).removeClass("invisible");
			}
		});

		if (urlFilterOn) {
			urlFilterOn = false;
			favoritesOnly = false;
			$btnFavorites.text("favorites");
		}

		if (favoritesOnly === true) {
			$list.css("list-style-type", "none");
		} else {
			$list.css("list-style-type", "decimal");
		}

		// Just in case this was off!
		$list.on('click', ".link_filter", listCallback);
	});

	$list.on('click', ".link_filter", listCallback);

	function listCallback(e) {
		$btnFavorites.text("all");
		urlFilterOn = true;
		favoritesOnly = false;
		var $urlLink = $(e.target).text();


		$("#list_links li").each(function() {
			var $linkText = $(this).children().eq(2).children().eq(0).text();
			if ($linkText !== $urlLink) {
				$(this).toggleClass("visible invisible");
			};
		});

		$list.css("list-style-type", "none");
		$list.off('click');

	};
});