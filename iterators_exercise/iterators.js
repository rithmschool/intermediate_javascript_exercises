// DO NOT DELETE THIS

var users = [
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Java", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
},
{
    username: "jane",
    email: "jane@test.com",
    years_experience: 33.9,
    favorite_languages: ["Haskell", "Clojure", "PHP"],
    favorite_editor: "Emacs",
    hobbies: ["Swimming", "Biking", "Hiking"],
    hometown: {
        city: "New York",
        state: "NY"
    }
},
{
    username: "sam",
    email: "sam@test.com",
    years_experience: 8.2,
    favorite_languages: ["JavaScript","Ruby", "Python", "Go"],
    favorite_editor: "Atom",
    hobbies: ["Golf", "Cooking", "Archery"],
    hometown: {
        city: "Fargo",
        state: "SD"
    }
},
{
    username: "anne",
    email: "anne@test.com",
    years_experience: 4,
    favorite_languages: ["C#", "C++", "F#"],
    favorite_editor: "Visual Studio Code",
    hobbies: ["Tennis", "Biking", "Archery"],
    hometown: {
        city: "Albany",
        state: "NY"
    }
},
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "Sublime Text",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}]

//write a function printEmails that returns all of the emails 

function printEmails(users) {
    users.forEach(function(val){
        console.log (val.email)
    })
}

//Write a function called `printHobbies` which console.log's each hobby for each user.

//This is incorrect because it gives us arrays of hobbies for each user
//instead of listing them one by one 
function printHobbies(users) {
    users.forEach(function(val){
        console.log (val.hobbies)
    })
}

//the function below first loops through the users to find hobbies, and then through the arrays of hobbies within the users 

function printHobbies(users) {
    users.forEach(function(user){
        user.hobbies.forEach(function(hobby){
            console.log(hobby)
        })
    })
}
printHobbies(users)

//Write a function called `findHometownByState` which returns the first user which has a hometown of the state that is passed in

//input: array 
//output: key 
//What do we think we should use? find since it is asking us to reutrn the first of a value set i.e. first of something 

//this is incorrect, because we are looking for one parameter and we need to remember that .find only works on arrays
//NOT on objects within the arrays--that is where . notation comes in handy 
function findHometownByState(users, state) {
    return users.find (function(val){
        return val.state === state;
    })
}

findHometownByState (users, "SD")

function findHometownByState(state) {
    return users.find (function(user){
            return user.hometown.state === state;
        })
    }

findHometownByState ("SD")

// Write a function called `allLanguages` which returns an array of all of the **unique** values 

function allLanguages() {
    var newArray= [];
    users.forEach(function(user){
        user.favorite_languages.forEach(function(language) {
            if(newArray.indexOf(language)=== -1) {
                newArray.push(language)
                
            }
        })
    })
             return newArray   
}

// OR with reduce 
function favoriteLanguages(users){
      return users.reduce(function(acc, current, index, users){
            current.favorite_languages.forEach(function(val){
                  if (acc.indexOf(val)=== -1){
                        acc.push(val);
                  }

            })
                
            return acc;
      }, []);
}

function hasFavoriteEditor(editor){
    var favoriteEditors = users.filter(function(val){
        return val.favorite_editor === editor 
    })
    if (favoriteEditors.length > 0) {
        return true 
    } else {
        return false
        }
}
hasFavoriteEditor("Sublime Text")

/// Write a function called `findByUsername` which takes in a string and returns an object in the `users` array that has that username

function findByUsername(string) {
    return users.find(function(val) {
        return val.username === name; 
    })
}
    console.log(findByUsername("larry"))

//Write a function called `vowelCount` that accepts a string and returns an object with each key 
//being the vowel and the value being the number of times the vowel occurs in the string 
//(the order of keys in the object does not matter)

function vowelCount(word){
    //we want to return an object, so we need to create an object 
    var obj = {};
    ////Next we need to split the string into letters, so we can iterate through them.
    //What do we use to iterate? forEach is the easiest, since it is shorter than other tupes of iteration 
    //then we need to define what we want the for each loop to do
    //we need to determine if a letter is a vowel, so we use conditional logic
    //if the val is a vowel then we want to add it to the object
    //but how do we also assign the key a value? 
    word.split("").forEach(function(val){
        if (val === 'o' || val === 'i' || val === 'a' || val === 'e' || val === 'u') { 
            if (object[val]) { object[val]+=1}
                else {
                    object[val]=1;
                }

    }
return object;
}

//- Write a function called `removeVowels` that accepts a string and returns an array of each character
 // that is not a vowel (y should not count as a vowel for this function)
