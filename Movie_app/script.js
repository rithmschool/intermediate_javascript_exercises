$(function(){
	$("#addPlayer_button").on("click", function(event){

		let $playerName = $(".user_input").eq(0).val();
		let $playerPosition = $(".user_input").eq(1).val();
		let $playerRating = $(".user_input").eq(2).val();

		// retrieve the player's name, position and rating and store them in variables 

		let $newTableRow = $("<tr>");
		let	$firstTableCell = $("<td>");
		let	$secondTableCell = $("<td>");
		let	$thirdTableCell = $("<td>");
		let $fourthTableCell = $("<td>");

		$firstTableCell.text($playerName);
		$secondTableCell.text($playerPosition);
		$thirdTableCell.text($playerRating); 
		$fourthTableCell.html("<button class='btn btn-danger' type='button'> Delete </button>");

		$newTableRow.append($firstTableCell);  //append table cells to new table row
		$newTableRow.append($secondTableCell);
		$newTableRow.append($thirdTableCell);
		$newTableRow.append($fourthTableCell);

		$(".table").append($newTableRow);  //Append new table row to our table
	})

	
		$(".table").on("click", ".btn-danger", function(event){
			//find parent table row; and use remove() to get rid of that element
			$(event.target).parent().parent().remove();

			// button is nested in td
			// td is nested in tr

		})

// 		$("article").find("div").children();

// $("article").remove();









	

	

	// when the submit button is pressed ...


	// retrieve user input filled into the form

	// access the value 

	// store that value in a jQuery variable

	// use jQuery to create a new element - a new row on the form

	// use jQuery to create a new element - a new cell in the form

	// set the value of the new cell to be equal to the appropriate user input

	// append this new cell to the new row, 
	// append the new row to the the existing form element tht you created
})


