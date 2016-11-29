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


////////////////////////////////////////////////////////////////


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

    // var results = [];
    // users.forEach(function(arrayItem){
    //     arrayItem.favorite_languages.forEach(function(val){
    //         if(results.indexOf(val)===-1){
    //             results.push(val);
    //         }
    //     });
    // });
    // return results;


    // return users.reduce(function(acc, current, idx, array){
    //     current.favorite_languages.forEach(function(val){
    //         if(acc.indexOf(val)===-1){
    //             acc.push(val);
    //         }
    //     })
    //     return acc;
    // },[]);


    var obj1 = users.reduce(function(acc,current,idx){
        current.favorite_languages.forEach(function(val){
            acc[val] = true;
        })
        return acc;
    },{});
    var results = Object.keys(obj1);
    return results;
}

allLanguages();


function hasFavoriteEditor(editor){
    var results=false;
    users.forEach(function(arrayItem){
        if(arrayItem.favoriteEditor === editor){
            results = true;
        }
    })
    return results;
}

hasFavoriteEditor("Atom");


function findByUsername(string){
    // return users.filter(function(arrayItem){
    //     return arrayItem.username === string;
    // })[0];
    return users.find(function(arrayItem){
        return arrayItem.username === string;
    })
}

findByUsername("david");


function vowelCount(string){
    // var results = {};
    // var vowelsArray = ["a","e","i","o","u"];
    // var splitted = string.split('');
    // splitted.forEach(function(arrayItem){
    //     if(vowelsArray.indexOf(arrayItem)!==-1){
    //         results[arrayItem] = (results[arrayItem] || 0) + 1;
    //     }
    // })
    // return results;

    var vowelsArray = ["a","e","i","o","u"];
    var splitted = string.split('');
    return splitted.reduce(function(acc, current, idx){
        if(vowelsArray.indexOf(current)!==-1){
            if(acc[current]===undefined){
                acc[current] = 1;
            } else {
                acc[current] = acc[current] + 1;
            }
        }
        return acc;
    },{});

}

vowelCount("mini munki mouse");


function removeVowels(string){
    var vowelsArray = ["a","e","i","o","u"];
    var splitted = string.split('');
    return splitted.reduce(function(prev, current, idx){
        if(vowelsArray.indexOf(current)===-1){
            prev.push(current);
        }
        return prev;
    },[]);
}

removeVowels("amazing");











