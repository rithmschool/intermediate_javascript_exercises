 var urls = {
    topStories : 'https://hacker-news.firebaseio.com/v0/topstories.json',
    newsStories: 'https://hacker-news.firebaseio.com/v0/newstories.json',
    bestStories: 'https://hacker-news.firebaseio.com/v0/beststories.json',
    itemStories: 'https://hacker-news.firebaseio.com/v0/item/',      //  id + .json  --> get detail
    favoritesStories :  'https://hn-favorites.herokuapp.com/stories.json',
    favoritesDelete :  'https://hn-favorites.herokuapp.com/stories',  // id + .json  --> delete + ID.json
    favoritesLogin: 'https://hn-favorites.herokuapp.com/login',
    favoritesSignup: 'https://hn-favorites.herokuapp.com/signup'
  }

var errorMsgs ={
  favorites : "Could not load favorites at this time. Please try logging in again.",
  logIn : "Please enter a valid username or password.",
  stories: "Could not load stories. Please check your internet connection or try back later."
}

function getData(name, type, fn, id){
  var headers = name === 'favorites' ? {"Authorization": auth_key} : {};
  $.ajax({
    method: "GET",
    headers: headers,
    url: urls[name + type[0].toUpperCase() + type.slice(1)] + (!!id? id +'.json' : '')
  })
  .then(stories => fn(stories))
  .fail(error => console.log(error))
}

function postData(name, type, fn, arg, password){     //arg === id or email
  if(type === 'login' || type === 'signup'){
    data = JSON.stringify({
      email: arg,
      password: password
    })
  }

  $.ajax({
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: urls[name + type[0].toUpperCase() + type.slice(1)] + (type === 'delete'? arg + '.json' : ''),
    data: data || ''
  })
  .then(stories => fn(stories))
  .fail(error => console.log(error))
}


postData('favorites', 'login', function(auth_key){
  console.log(auth_key)

  },'lane.matthew@gmail.com', 'password')

































