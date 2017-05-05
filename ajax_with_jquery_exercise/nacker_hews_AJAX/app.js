$(document).ready(function() {
  let $topiclist = $(".topiclist");
  let $favorite = $(".favoritetoggle");
  let $all = $(".alltoggle");
  let $topStories = $(".top-stories");
  let $bestStories = $(".best-stories");
  let $newStories = $(".new-stories");
  let $login = $(".logtoggle");
  let $logout = $(".logout");
  let $loginForm = $(".log-in");
  let $signUpForm = $(".sign-up");
  let storage = [];

  let hackerNews = [];

  //Function to fetch top 25 results for fetch news.
  function fetchTopNews() {
    $topiclist.empty();
    $.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(function(res){
      hackerNews = hackerNews.concat(res.slice(0,25));
      hackerNews.forEach(function(value) {
        $.get("https://hacker-news.firebaseio.com/v0/item/" + value + ".json?print=pretty")
        .then(function(res){
          console.log(res);
          let $li = $("<li>");
          let $star = $ ("<span>", {
            class: "glyphicon glyphicon-star-empty hide-all",
          })
          $star.data("story_id",res.id);
          let $text = $("<a>", {
            class: "topic-text",
            target: "blank",
            href: res.url,
            text: res.title
          });
          let $link = $("<span>", {
            class: "class-filter",
            text: `(${res.url})`
          });
          $li.append($star,$text,$link);
          $topiclist.append($li);
          hackerNews = [];
          //Add star if auto logged in
          if (localStorage.getItem("Nacker")) {
            $(".glyphicon").removeClass("hide-all");    
          }
        })
      })
    })
  } 
  //Function to fetch best 25 results for fetch news.
  function fetchBestNews() {
    $topiclist.empty();
    $.get("https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty")
    .then(function(res){
      hackerNews = hackerNews.concat(res.slice(0,25));
      hackerNews.forEach(function(value) {
        $.get("https://hacker-news.firebaseio.com/v0/item/" + value + ".json?print=pretty")
        .then(function(res){
          console.log(res);
          let $li = $("<li>");
          let $star = $ ("<span>", {
            class: "glyphicon glyphicon-star-empty hide-all",
          })
          $star.data("story_id",res.id);
          let $text = $("<a>", {
            class: "topic-text",
            target: "blank",
            href: res.url,
            text: res.title
          });
          let $link = $("<span>", {
            class: "class-filter",
            text: `(${res.url})`
          });
          $li.append($star,$text,$link);
          $topiclist.append($li);
          hackerNews = [];
          //Add star if auto logged in
          if (localStorage.getItem("Nacker")) {
            $(".glyphicon").removeClass("hide-all");    
          }
        })
      })
    })
  } 
  //Function to fetch new 25 results for fetch news.
  function fetchNewNews() {
    $topiclist.empty();
    $.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
    .then(function(res){
      hackerNews = hackerNews.concat(res.slice(0,25));
      hackerNews.forEach(function(value) {
        $.get("https://hacker-news.firebaseio.com/v0/item/" + value + ".json?print=pretty")
        .then(function(res){
          console.log(res);
          let $li = $("<li>");
          let $star = $ ("<span>", {
            class: "glyphicon glyphicon-star-empty hide-all",
          })
          $star.data("story_id",res.id);
          let $text = $("<a>", {
            class: "topic-text",
            target: "blank",
            href: res.url,
            text: res.title
          });
          let $link = $("<span>", {
            class: "class-filter",
            text: `(${res.url})`
          });
          $li.append($star,$text,$link);
          $topiclist.append($li);
          hackerNews = [];
          //Add star if auto logged in
          if (localStorage.getItem("Nacker")) {
            $(".glyphicon").removeClass("hide-all");    
          }
        })
      })
    })
  } 
  //Function to fetch favorites

  function fetchFavorites() {
    $topiclist.empty();
    $.ajax({
          type: "Get",
          url: "https://hn-favorites.herokuapp.com/stories.json",
          headers: {
            authorization: JSON.parse(localStorage.getItem("Nacker"))[0]
          }
        }).then(function(res) {
          console.log(res);
          hackerNews = hackerNews.concat(res);
          hackerNews.forEach(function(value) {
          let $li = $("<li>");
          let $star = $ ("<span>", {
            class: "glyphicon glyphicon-star",
          });
          $star.data("story_id",value.story_id);
          $star.data("favorite_id",value.id);
          let $text = $("<a>", {
            class: "topic-text",
            target: "blank",
            href: value.url,
            text: value.title
          });
          let $link = $("<span>", {
            class: "class-filter",
            text: `(${value.url})`
          });
          $li.append($star,$text,$link);
          $topiclist.append($li);
          });
          hackerNews = [];

        })
  }

  //Slide down forms
  $login.on("click", function(event) {
    $(".form-row").slideToggle(300);
  })


  //Top stories click
  $topStories.on("click", function(event) {
    fetchTopNews();
  })

  //Best stories click
  $bestStories.on("click", function(event) {
    fetchTopNews();
  })

  //Best stories click
  $newStories.on("click", function(event) {
    fetchTopNews();
  })


  //Toggle Icon code
  $topiclist.on("click", ".glyphicon", function(event) {
    console.log($(event.target));
    if ($(event.target)[0].className === "glyphicon glyphicon-star-empty") {
      //Post story
      $(event.target).toggleClass("glyphicon-star-empty");
      $(event.target).toggleClass("glyphicon-star");
      $.get("https://hacker-news.firebaseio.com/v0/item/" + $(event.target).data().story_id + ".json?print=pretty")
      .then(function(res){
        $.ajax({
          type: "Post",
          url: "https://hn-favorites.herokuapp.com/stories.json",
          headers: {
            authorization: JSON.parse(localStorage.getItem("Nacker"))[0]
          },
          data: JSON.stringify({
            hacker_news_story: {
              story_id: res.id,
              by: res.by,
              title: res.title,
              url: res.url
            }
          }),
          contentType: "application/json"
        }).then(function(res){
          $(event.target).data("favorite_id", res.id);
          console.log(res);
        }).catch(function(res){
          console.log(res);
        })
      });
    } else if ($(event.target)[0].className === "glyphicon glyphicon-star") {
      //Delete story
      $(event.target).toggleClass("glyphicon-star-empty");
      $(event.target).toggleClass("glyphicon-star");
      $.ajax({
        type: "Delete",
          url: "https://hn-favorites.herokuapp.com/stories/" + $(event.target).data().favorite_id +".json",
          headers: {
            authorization: JSON.parse(localStorage.getItem("Nacker"))[0]
          }
      }).then(function(res){
        console.log(res);
      })
    };
  });

  //Login for user
  $loginForm.on("submit",function(event) {
    event.preventDefault();
    $.post("https://hn-favorites.herokuapp.com/login", {
      email: $("#username").val(),
      password: $("#password").val()
    }).then(function(res){
      alert("Log in successful!");
      storage.push(res.auth_token);
      localStorage.setItem("Nacker", JSON.stringify(storage));
      $(".form-row").slideToggle(300);
      //Change log in button
      $login.addClass("hide-all");
      $logout.removeClass("hide-all");
      $favorite.removeClass("hide-all");
      //Add stars
      $(".glyphicon").removeClass("hide-all");
    }).catch(function(res){
      alert("Log in failed, please try again!");
    })
    $loginForm.trigger("reset");
  })

  //Auto login if localStorage has key
  if (localStorage.getItem("Nacker")) {
    $login.addClass("hide-all");
    $logout.removeClass("hide-all");
    $favorite.removeClass("hide-all");   
  }

  //Logout for user
  $logout.on("click", function(event){
    localStorage.clear();
    $login.removeClass("hide-all");
    $logout.addClass("hide-all");
    $favorite.addClass("hide-all");
    $(".glyphicon").addClass("hide-all");
  })

  //Sign up for user
  $signUpForm.on("submit",function(event) {
    event.preventDefault();
    $.post("https://hn-favorites.herokuapp.com/signup", {
      email: $("#new-username").val(),
      password: $("#new-password").val()
    }).then(function(res){
      alert("Sign up complete! Please sign in!");
    }).catch(function(res){
      alert("Sign up failed, please try again!");
    })
    $signUpForm.trigger("reset");
  })

  //Click on favorites when logged in

  $favorite.on("click", function(event) {
    fetchFavorites();
  });

  fetchTopNews();

});