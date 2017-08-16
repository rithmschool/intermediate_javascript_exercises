$(function(){
  let authToken = localStorage.getItem("token") || null;
  let storedFavs = JSON.parse(localStorage.getItem("storedFavs")) || {};
  let $login = $("#login");
  let $loginForm = $("#login-form");
  let $signUp = $("#sign-up");
  let $signUpForm = $("#sign-up-form");
  let $logout = $("#logout");
  let $favorites = $("#favorites");
  let $storyList = $("#story-list");
  let $favoritesList = $("#favorites-list");
  let $bothLists = $("#both-lists")
  let $errorMsg = $("#error-msg");

  function buttonToggle(){
    $login.toggleClass("hide");
    $signUp.toggleClass("hide");
    $logout.toggleClass("hide");
  }

  if(authToken){
    buttonToggle()
    $.ajax({
        method: "GET",
        url: "https://hn-favorites.herokuapp.com/stories.json",
        dataType: "json",
        contentType: "application/json",
        headers: {
           Authorization: authToken
        }
    }).then(function(res){
        $favoritesList.empty()
        res.forEach(function(val){
          storedFavs[val.story_id] = {
            id: val.id,
            title: val.title,
            by: val.by,
            url: val.url
          }
        })
        localStorage.setItem("storedFavs", JSON.stringify(storedFavs));
        for(var key in storedFavs){
          addStories(key, storedFavs[key].title, storedFavs[key].by, storedFavs[key].url, $favoritesList);
        }              
    })
  }

  $login.on("click", function(e){
    $loginForm.toggleClass("hide");
    if(!$signUpForm.hasClass("hide")){
      $signUpForm.toggleClass("hide");
    }
    if(!$errorMsg.text() === ""){
      $errorMsg.toggleClass("hide");
    }
  })

  $signUp.on("click", function(e){
    $signUpForm.toggleClass("hide");
    if(!$loginForm.hasClass("hide")){
      $loginForm.toggleClass("hide");
    }
    if(!$errorMsg.text() === ""){
      $errorMsg.toggleClass("hide");
    }
  })

  $loginForm.on("submit", function(e){
    e.preventDefault();
    authenticate("login", $("#login-email").val(), $("#login-password").val());
    $loginForm.trigger("reset");
  })

  $signUpForm.on("submit", function(e){
    e.preventDefault();
    authenticate("signup", $("#sign-up-email").val(), $("#sign-up-password").val());
    $signUpForm.trigger("reset");
  })

  $logout.on("click", function(){
    localStorage.removeItem("token");
    localStorage.removeItem("storedFavs");
    authToken = null;
    storedFavs = {};
    buttonToggle()
    if($storyList.hasClass("hide")){
      $storyList.toggleClass("hide")
      $favoritesList.toggleClass("hide")
    }
    $(".glyphicon").toggleClass("hide");
  })

  $storyList.on("click", "span.glyphicon", function(e){
    var $by = $(e.target).siblings().eq(2).text().slice(3);
    var $story_id = $(e.target).siblings().eq(3).text();
    var $title = $(e.target).siblings().eq(0).text();
    var $url = $(e.target).siblings().eq(0).attr("href")
    $(e.target).toggleClass("glyphicon-star-empty glyphicon-star"); 
    if($(e.target).hasClass("glyphicon-star") && authToken){
      $.ajax({
          method: "POST",
          url: "https://hn-favorites.herokuapp.com/stories.json",
          data: JSON.stringify({
              hacker_news_story: {
                  by: $by,
                  story_id: $story_id,
                  title: $title,
                  url: $url
              }
          }),
          dataType: "json",
          contentType: "application/json",
          headers: {
             Authorization: authToken
          }
      })
      .then(function(res){
          storedFavs[res.story_id] = {
            id: res.id,
            title: res.title,
            by: res.by,
            url: res.url
          }
          localStorage.setItem("storedFavs", JSON.stringify(storedFavs));
      })
      .fail(function(err){
        console.log(err);
      })
    } else if($(e.target).hasClass("glyphicon-star-empty") && authToken){
        $.ajax({
            method: "DELETE",
            url: `https://hn-favorites.herokuapp.com/stories/${storedFavs[$story_id].id}.json`,
            headers: {
               Authorization: authToken
            }
        })
        .then(function(res){
          if(storedFavs[$story_id]) {
              delete storedFavs[$story_id];
          }
          localStorage.storedFavs = JSON.stringify(storedFavs);
        })
        .fail(function(err){
          console.log(err);
        })
    }
  })


  $favoritesList.on("click", "span.glyphicon", function(e){
    var $story_id = $(e.target).siblings().eq(3).text();
    $(e.target).toggleClass("glyphicon-star-empty glyphicon-star"); 
    if($(e.target).hasClass("glyphicon-star-empty") && authToken){
      $.ajax({
          method: "DELETE",
          url: `https://hn-favorites.herokuapp.com/stories/${storedFavs[$story_id].id}.json`,
          headers: {
             Authorization: authToken
          }
      })
      .then(function(res){
        $(e.target).parent().remove();
        $storyList.children().each(function(i,el){
          for(var key in storedFavs){
            if(key === $(el).children().eq(4).text()){
              $(el).children().eq(0).toggleClass("glyphicon-star-empty glyphicon-star");
            }
          }
        })            
        if(storedFavs[$story_id]) {
            delete storedFavs[$story_id];
        }
        localStorage.storedFavs = JSON.stringify(storedFavs);
      })
      .fail(function(err){
        console.log(err);
      })
    }
  })

  $favorites.on("click", function(e){

    if($(e.target).text() === "favorites"){
      $(e.target).text("top stories");
      $storyList.toggleClass("hide");
      $favoritesList.toggleClass("hide");
      for(var key in storedFavs){
        addStories(key, storedFavs[key].title, storedFavs[key].by, storedFavs[key].url, $favoritesList);
      }
    } else {
      $(e.target).text("favorites");
      $storyList.toggleClass("hide");
      $favoritesList.toggleClass("hide");
      $favoritesList.empty()
    }
  })


  function authenticate(action, email, password){
      $.ajax({
          method: "POST",
          url: `https://hn-favorites.herokuapp.com/${action}`,
          data: JSON.stringify({
            email: email, 
            password: password
          }),
          dataType: "json",
          contentType: "application/json"
      }).then(function(res){
          localStorage.setItem("token", res.auth_token);
          authToken = res.auth_token;
          if(authToken){
            $(".glyphicon").toggleClass("hide");
          }
          buttonToggle();
          if(action === "login"){
              $loginForm.toggleClass("hide");
              $.ajax({
                  method: "GET",
                  url: "https://hn-favorites.herokuapp.com/stories.json",
                  dataType: "json",
                  contentType: "application/json",
                  headers: {
                     Authorization: authToken
                  }
              }).then(function(res){
                  res.forEach(function(val){
                    storedFavs[val.story_id] = {
                      id: val.id,
                      title: val.title,
                      by: val.by,
                      url: val.url
                    }
                  })
                  localStorage.setItem("storedFavs", JSON.stringify(storedFavs));
                  let $allLis = $("li");
                  $allLis.each(function(i,el){
                    for(var key in storedFavs){
                      if(key === $(el).children().eq(4).text()){
                        $(el).children().eq(0).toggleClass("glyphicon-star-empty glyphicon-star");
                      }
                    }
                  })                
              })

          } else {
              storedFavs = {};
              $signUpForm.toggleClass("hide");
          }
      })
      .catch(function(err){
          if(action === "login") {
              $errorMsg.toggleClass("hide");
              $errorMsg.text("There was an error logging you in, please try again later.");
          } else {
              $errorMsg.toggleClass("hide");
              $errorMsg.text("There was an error signing you up, please try again later.");
          }
      });
  }


  function getTopStories(){ 
    let stories = [];

    $.get("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(function(res){
      stories = stories.concat(res.slice(0,20));
      return stories;
    })
    .then(function(res){
      //get details for each story
      let storyDetails = res.map(function(val){
        return $.get(`https://hacker-news.firebaseio.com/v0/item/${val}.json`);
      })
      return Promise.all(storyDetails);
    })
    .then(function(res){
      res.forEach(function(val){
        addStories(val.id, val.title, val.by, val.url, $storyList);
      })
      if(authToken){
        $(".glyphicon").toggleClass("hide");
      }
    })
    .fail(function(err){
      console.log(`There was an error, ${err}`);
    })
  }

  getTopStories();


  function addStories(id, title, author, url, list){

    let $newLi = $("<li>")
    if(list === $storyList){
      var $starSpan = $("<span>", {
        addClass: "glyphicon glyphicon-star-empty hide"
      })
    } else {
      $starSpan = $("<span>", {
        addClass: "glyphicon glyphicon-star"
      })
    }
  

    if(url){
      var hostName = url.split("://")[1].split("/")[0];
      var n = hostName.split(".").length
      if(n <= 2){
        hostName = hostName.split(".").slice(-(n)).join(".");
      }
      else if(n > n-1){
        hostName = hostName.split(".").slice(-(n-1)).join(".");
      }
    } else hostName = "n/a";


    let $urlSpan = $("<span>", {
      class: "small",
      text: `(${hostName})`
    })

    let $newA = $("<a>", {
      attr: {
        href: url
      },
      target: "_blank",
      text: `${title}`
    })

    let $authorDiv = $("<div>", {
      class: "small",
      text: `by ${author}`
    })

    let $storyIdSpan = $("<span>", {
      class: "small hide",
      text: id
    })

    let $newStory = $("<li>").append($starSpan).append($newA).append($urlSpan).append($authorDiv).append($storyIdSpan);

    list.append($newStory);   
  }
}) 