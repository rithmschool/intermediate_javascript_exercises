$(document).ready(function(){
  var star = "<span class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span>";
  var $linkItemsOl = $(".link-items");

  $.ajax({
    method: "GET",
    url: "https://hacker-news.firebaseio.com/v0/topstories.json?"
  }).then(function(topItems){
    var top20 = topItems.slice(0,20);
    for (let i = 0; i < top20.length; i++) {
      $.ajax({
        method: "GET",
        dataType: "json",
        url: `https://hacker-news.firebaseio.com/v0/item/${top20[i]}.json?print=pretty`      
      }).then(function(item){
        addItemToList(item.title, item.url);
        console.log(item.title + '\n' + item.url);
        //item.title
        //item.url
      });
      
    }
  });

  function addItemToList(itemTitle, itemUrl) {
      var $newItem = $("<li>", { "class" : "item"});
      var aTag = ` <a href="${itemUrl}">${itemTitle}</a>`;
      $newItem.html(star + " " + aTag);
      $linkItemsOl.append($newItem);
      console.log(aTag);
  }

  $(".login").on("click", function(e) {
    $(".login-form").toggle();
    $(".signup-form").toggle();
  });

  $("login-signup-form").on("click", "login-button", function(e){
    e.preventDefault();
    var email = $("#login-email").val();
    var pw = $("#login-pw").val();
    $.ajax({
      method: "POST",
      url: "https://hn-favorites.herokuapp.com/login",
      //Content-Type: "application/json"
      data: {
        "email" : email,
        "password": pw
      }
    }).then(function(authKey){
      console.log(authKey);
    });
  });

  $("#signup-form").on("submit", function(e){
    e.preventDefault();
    var email = $("#signup-email").val();
    var pw = $("#signup-pw").val();
    console.log(email + pw);
    $.ajax({
      method: "POST",
      url: "https://hn-favorites.herokuapp.com/signup",
      data: {
        "email" : email,
        "password": pw
      }
    }).then(function(authKey){
      console.log(authKey);
    });
  });

  // what to do with the authkey?
  // you need it to:
  // GET all favorites
  // DELETE a favorite

  // when you click the log in button
  // post to log in
  // 


  // var $submitLink = $(".submit");
  // var $submitForm = $(".submit-form");
  // var $submitBtn = $(".submit-button");
  // var $linkItemsOl = $(".link-items");
  // var star = "<span class=\"glyphicon glyphicon-star-empty\" aria-hidden=\"true\"></span>";
  // var $title = $("#title");
  // var $url = $("#url");
  // var $favSpan = $(".favorites");

  // $submitLink.on("click", function(){
  //   $submitForm.toggle();
  // });

  // $("body").on("click", ".glyphicon", function(e){
  //   $(e.target).toggleClass("glyphicon-star-empty glyphicon-star");
  // });

  // $submitBtn.on("click", function(e){
  //   e.preventDefault();
  //   var title = $("#title").val();
  //   var url = $("#url").val();
  //   var $newItem = $("<li>");
  //   var aTag = ` <a href="${url}">${title}</a>`;
  //   $newItem.html(star + " " + aTag);
  //   $linkItemsOl.append($newItem);
  //   console.log(aTag);
  //   $title.val("");
  //   $url.val("https://");
  // });

  // $favSpan.on("click", function(e){
  //   var stars = $(".glyphicon");
  //   if ($favSpan.hasClass("favorites")) {
  //     for (let i = 0; i < stars.length; i++) {
  //       console.log(stars[i]);
  //       if ($(stars[i]).hasClass("glyphicon-star-empty")) {
  //         $(stars[i]).parent().hide();
  //       }
  //     }
  //     $favSpan.text("all");
  //   }
  //   else if ($favSpan.hasClass("all")) {
  //     for (let i = 0; i < stars.length; i++) {
  //       console.log(stars[i]);
  //       if ($(stars[i]).hasClass("glyphicon-star-empty")) {
  //         $(stars[i]).parent().show();
  //       }
  //     }
  //     $favSpan.text("favorites");
  //   }
  //   $favSpan.toggleClass("favorites all");
  // });

});