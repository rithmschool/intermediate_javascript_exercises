$(function(){
	var $submitForm = $('#submitForm');
	var $submitLink = $('#submitLink');
	var $favLink = $('#favLink');
	var $ol = $('#resultList ol')

	//favorites selected
	var favoritesOnly = false;
	//one domain only selected
	var oneDomainOnly = false;

	//hide the submit form initially
	$submitForm.hide();

	/*********************EVENT LISTENERS*********************/
	/*hide and show title/url/submit form when click "submit" link in nav*/
	$submitLink.on('click', function(e){
		e.preventDefault();
		$submitForm.slideToggle();
	});

	/*event listeners for clicking on the favorite/all link*/
	$favLink.on('click', function(e){
		e.preventDefault();

		/*hide and show favorites when click "favorites" link in nav*/
		if($(e.target).text() === 'favorites'){
			favoritesOnly = !favoritesOnly;
			if (favoritesOnly){
				$ol.find('.glyphicon-star-empty').parent().parent().hide();
				$ol.css('list-style-type', 'none');
			}
			else {
				$ol.find('.glyphicon-star-empty').parent().parent().show();
				$ol.css('list-style-type', 'decimal');
			}
		}

		/*show all in list (currently only showing a specific domain)*/
		else {
			oneDomainOnly = false;
			$('li').show();
			$ol.css('list-style-type', 'decimal');
			$(e.target).text('favorites');
		}
	});

	/*switch glyphicon (from favorite to not favorite) when click "star" w/in each li*/
	$ol.on('click', '.star', function(e){
		$(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
	});

	/*when click on url, only show items with same url 
	& switch the favorites link in nav bar to all*/
	$ol.on('click', '.url', function(e){
		var activeUrlText = $(e.target).text().trim();
		$('li').filter(function(i, el){
			return $(el).find('.url').text().trim() !== activeUrlText;
		}).hide();
		// $('li:not(:contains' + activeUrlText + ')').hide();
		oneDomainOnly = true;
		$favLink.text("all");
		$ol.css('list-style-type', 'none');
	});

	//NOT WORKING YET BUT TRYING TO START WITH FORM VALIDATION
	// $submitForm.on('blur', 'input', function(e){
	// 	// if($('#formTitle').val() !== ""){
	// 	// 	$('button').removeClass('disabled');
	// 	// }
	// 	console.log($('input:required:valid'));
	// 	//console.log($('#formUrl').val());
	// });

	/*submit a new item using the form*/
	$submitForm.on('submit', function(e){
		e.preventDefault();
		var title = $('#formTitle').val();
		var url = $('#formUrl').val();

		if (url !== ''){
			//var domainUrl = url.match(/^http:\/\/(www.)?(\S+)$/)[2];
			// var domainUrl = url.match(/\w+.\w+$/)[0];

			//extract the *****.*** ending portion of the url
			var domainUrlArr = url.split('.');
			var endUrl = "." + domainUrlArr[domainUrlArr.length-1];
			var startUrl = domainUrlArr[domainUrlArr.length-2];
			if (startUrl.indexOf('//') > 0){
			    startUrl = startUrl.slice(startUrl.indexOf('//') + 2);
			}
			var domainUrl = startUrl + endUrl;

			var liHtml = `
				<li>
					<span>
						<span class="star glyphicon glyphicon-star-empty" aria-hidden="true"></span> 
					</span> 
					<span class='name'>${title}</span>
					<span class='url'>
						(${domainUrl})
					</span>
				</li>`;

			$ol.append(liHtml);
			$('#formTitle').val('');
			$('#formUrl').val('');
		}
	});
});