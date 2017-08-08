$(document).ready(function(){
	var $submit_form = $('#submit-form');
	var $inp_title = $('#inp-title');
	var $inp_url = $('#inp-url');
	var links = JSON.parse(localStorage.getItem('links'));
	if(links === null){
		links = [
		{
			favor: true,
			title: "Isn't this the best site you have ever seen?",
			link: 'file:///Users/chaim/Dropbox/rithm/canvas.html'
		}];
	}
	var $links = $('#links');

	function displayLink(favor, title, link){
		let html = '<a class="glyphicon glyphicon-star-empty star" href="#"></a>';
		let shortLink = link.split('/').filter(v => v.includes('.'));
		if(favor) html =  '<a class="glyphicon glyphicon-star star" href="#"></a>';
			html += '<a href="' + link + '">' + title + '<span>(' + shortLink[0] + ')</span></a>';
		let $lin = $('<li>');
		$lin.html(html);
		if(favor) $lin.addClass('favor');
		$links.append($lin);
	}

	function saveLinks() {
		localStorage.setItem('links', JSON.stringify(links));
	}

	for(let lin of links){
		displayLink(lin.favor, lin.title, lin.link);
	}

	$('#submit-link').click(function(){
		$submit_form.toggleClass("hidden");
	});
	$('#favor-link').click(function(){
		$links.find('li').not('.favor').toggleClass('hidden');
	});
	$submit_form.submit(function(e){
		e.preventDefault();

		displayLink(false, $inp_title.val(), $inp_url.val());
		links.push({
		favor: false,
		title: $inp_title.val(),
		link: $inp_url.val()});
		$inp_title.val('');
		$inp_url.val('');
		saveLinks();
		
	});
	$links.on('click', '.star', function(e){
		e.preventDefault();

		var $target = $(e.target);

		$target.toggleClass('glyphicon-star-empty glyphicon-star');
		var index = $target.parent().index();
		links[index].favor = $target.hasClass('glyphicon-star');
		$target.parent().toggleClass('favor');
		saveLinks();
	});	

});