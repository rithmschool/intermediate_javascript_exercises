function printEmails(array){
	array.forEach(function(arrayItem){
		console.log(arrayItem.email);
	});
}

printEmails(users);

function printHobbies(array){
	array.forEach(function(arrayItem){
		arrayItem.hobbies.forEach(function(val){
			console.log(val);
		});
	});
}

printHobbies(users);

function findHometownByState(state){
	return users.filter(function(arrayItem){
		return arrayItem.hometown.state === state;
	})[0];
}

findHometownByState("CA");

function allLanguages(){
	var results = [];
	users.forEach(function(arrayItem){
		arrayItem.favorite_languages.forEach(function(val){
			if(results.indexOf(val)===-1){
				results.push(val);
			}
		});
	});

	return results;
}

allLanguages();