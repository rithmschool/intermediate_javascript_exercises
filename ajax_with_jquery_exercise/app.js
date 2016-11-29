$(function(){
	var $searchField = $("#inputCity");
	var cityList = [];

	$("#searchForm").on("submit", function(e){
		e.preventDefault();
		var searchText = $searchField.val();

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+searchText+"&APPID=43eb222c212ff02f269b23d5348905a6").then(function(response){
			$searchField.val("");
			parseWeatherData(response);
		}).catch(function(error){
			console.log("error while trying to fetch data");
		});
	});
	

	function parseWeatherData(response){
		cityList.unshift(response);
		console.log(response);

		$firstElement = $("#weatherList").first();
		console.log($firstElement);
		var tempInF = Math.round((cityList[0].main.temp * (9/5))-459.67) + "℉";
		var conditions = cityList[0].weather[0].description;


		var $divRow = $("<div>", {
			class: "row boxBorder"
		});
		var $cityCol = $("<div>", {
			class: "cityBox col-xs-7",
			text: cityList[0].name
		});
		var $tempCol = $("<div>", {
			class: "tempBox col-xs-5 pull-right",
			text: tempInF
		});
		var $conditionCol = $("<div>", {
			class: "conditionBox col-xs-5 pull-right",
			text: conditions
		});

		$("#weatherList").prepend($($divRow)
						 .append($($cityCol))
						 .append($($tempCol))
						 .append($($conditionCol)));





	}








});