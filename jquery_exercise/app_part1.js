$(function(){

	////////////////////////////////////////////////////////////////////
	//// Part 1

	// 1. When the DOM is ready, console.log the message "Let's get ready to jQuery!"
	console.log("Let's get ready to jQuery!");

	// 2. Give all images inside of an article tag the class of image-center (this is defined in the stylesheet).
	$("article > img").addClass("image-center");

	// 3. Remove the last paragraph in the article.
	$("article > p").last().remove();

	//4. Set the font size of the title to be a random pixel size from 0 to 100.
	var number = Math.floor(Math.random() * 100);
	$("h1").css("font-size", number);



	// 5. Add an item to the list; it can say whatever you want.
	// $("ol").append($("<li>", {
	// 	text: "Whiskey and the rugrat are uber cute!"
	// }));
	var $newListItem = $("<li>", {
		text: "Whiskey and the rugrat are uber cute!",
		css: {
			color: "red"
		}
	});
	$("ol").append($newListItem);


	// 6.Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
	$("aside > *").remove();
	$("aside").append($("<p>", {
		text: "Sorry, silly idea to make a list."
	}));

	//7. When you change the numbers in the three inputs on the bottom, the background color of the body changes to match whatever the three values in the inputs are.
	var $colorForms = $("div > input");
	var $newColor;
	$colorForms.change(function(){
		$newColor = "rgb("+$colorForms.eq(0).val()+", "+$colorForms.eq(1).val()+", "+$colorForms.eq(2).val()+")";
		$("body").css("background-color", $newColor);
	});


	// 8. Add an event listener so that when you click on the image, it slides up and disappears.
	var $firstImage = $("article > img").first();
	$firstImage.on("click", function(){
		$($firstImage).slideUp("slow", function(){
			//animation done
		});
	});




});