$(function() {

  var $feed = $("#feed");
  //Uses the Hacker News API to display top stories (up to some limit, say 10 or 20).

  //get item id from responseJSON
  // var $topArray = [];
  // var $myObj = $.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
  //
  // for(var i = 0; i < 25; i++) {
  //   $topArray.push($myObj.responseJSON[i]);
  // }
  //Stories, comments, jobs, Ask HNs and even polls are just items.
  //They're identified by their ids, which are unique integers, and live under /v0/item/<id>.
  //$.get("https://hacker-news.firebaseio.com/v0/item/14962634.json")

  $.get("https://hacker-news.firebaseio.com/v0/topstories.json")
  .then(function(obj){
      var items = obj.slice(0, 25).map(function(current) {
              return $.get(`https://hacker-news.firebaseio.com/v0/item/${current}.json`);
          });
      return Promise.all(items);
  })
  .then(function(news) {
    news.forEach(function(item){
      $feed.append(`<li> <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span> ${item.title} </li>`);
    });
  });

  //The top stories page should have a button to log in or sign up for an account. HTML 

  //When the user logs in or signs up succesfully, a token sent back from the server should get stored in localStorage.
  // This token will be used to authenticate the user on subsequent requests to the stories API.
  // (Examples of requests to this API are below.)


});
