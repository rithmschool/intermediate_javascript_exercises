// DO NOT DELETE THIS

var users = [
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Java", "C++"],
    favoriteEditor: "Vim",
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
    favoriteEditor: "Emacs",
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
    favoriteEditor: "Atom",
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
    favoriteEditor: "Visual Studio Code",
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
    favoriteEditor: "Sublime Text",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
]


function printEmails(users){
    users.forEach(function(user){
        console.log(user.email);
    })
}

function printHobbies(users){
    users.forEach(function(user){
        user.hobbies.forEach(function(hobby){
            console.log(hobby);
        })
    })
}

function findHometownByState(state){
    return users.find(function(val){
        return val.hometown.state === state;
    })
}

function allLanguages(){
    var languages = [];
    users.forEach(function(user){
        user.favorite_languages.forEach(function(language){
            if(languages.indexOf(language) === -1){
                languages.push(language);
            }
        })
    })
    return languages;
}

function hasFavoriteEditor(editor){
    return users.some(function(user){
        return user.favoriteEditor === editor;
    })
}

function findByUsername(username){
    return users.find(function(user){
        return user.username === username;
    })
}

function vowelCount(str){
    var splitArr = str.split("");
    var obj = {};
    var vowels = ["a","e","i","o","u"];

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

function removeVowels(str){
    var vowels = ["a","e","i","o","u"]
    return str.split("").filter(function(val){
        return vowels.indexOf(val) === -1
    })
}




