$(function(){

	var tableArray =[];
	var lastSort = 1; // 1 = ascending 0=descending

	var $tableBody = $("tbody");
	
	var $movieInput = $("#inputMovieName");
	var $ratingInput = $("#inputRating");

	var $titleSort = $("thead>tr>th").eq(0);
	var $ratingSort = $("thead>tr>th").eq(1);

	$titleSort.on("click", function(e){
		sortByTitle(lastSort);
		updateTable();
	});
	$ratingSort.on("click", function(e){
		sortByRating(lastSort);
		updateTable();
	});


	function updateTable(){
		var $tableRows = $("tbody>tr");
		$tableRows.children(".movieColumn").map(function(idx,value){
			value.innerText = tableArray[idx][0];
		});
		$tableRows.children(".ratingColumn").map(function(idx,value){
			value.innerText = tableArray[idx][1];
		});
	}

	function sortByTitle(){
		if(lastSort===0){
			tableArray.sort(sortTitleLowToHigh);	
			lastSort = 1;	
		} else {
			tableArray.sort(sortTitleHighToLow);
			lastSort = 0;
		}
	}
	function sortByRating(){
		if(lastSort===0){
			tableArray.sort(sortRatingLowToHigh);	
			lastSort = 1;	
		} else {
			tableArray.sort(sortRatingHighToLow);
			lastSort = 0;
		}
	}

	function sortTitleLowToHigh(a,b){
		if (a[0]>b[0]) {
			return 1;
		}
	}
	function sortTitleHighToLow(a,b){
		if (a[0]<b[0]) {
			return 1;
		}
	}
	function sortRatingLowToHigh(a,b){
		if (a[1]>b[1]) {
			return 1;
		}
	}
	function sortRatingHighToLow(a,b){
		if (a[1]<b[1]) {
			return 1;
		}
	}

	$("form").on('submit', function(e) {
		e.preventDefault();

		var $newRow = $("<tr>", {});
		var $newMovieCol = $("<td>", {
			class: "movieColumn",
			text: $movieInput.val()
		});
		var $newRatingCol = $("<td>", {
			class: "ratingColumn",
			text: $ratingInput.val()
		});
		var $newDeleteCol = $("<td>", {
			class: "deleteColumn",
		});
		var $newDeleteBtn = $("<button>", {
			class: "btn btn-default clickable",
			type: "submit",
			text: "Delete"
		});

		$tableBody.prepend($($newRow)
				  .append($($newMovieCol))
				  .append($($newRatingCol))
				  .append($($newDeleteCol)
				  .append($($newDeleteBtn))));
		tableArray.unshift([$movieInput.val(), parseInt($ratingInput.val())]);
		$movieInput.val("");
		$ratingInput.val("");
	});

	$tableBody.on("click", "button", function(e){
		var $tableRows = $("tbody>tr");
		var $clickedOn = $(e.target).parent().parent();
		tableArray.splice($tableRows.index($clickedOn),1);
		$clickedOn.remove();
	});




});