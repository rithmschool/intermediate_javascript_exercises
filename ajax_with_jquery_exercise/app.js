$(function() {
  var newsList20;
  var storiesArray = [];
  var $link;
  var $li;
  var $anchor = $(".anchor");
  var $topiclist = $(".topiclist");
  var $topictext;
  var $icon;
  var iconStatus = false;
  var loggedIn = false;
  var authentification = "";

  $.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', function(res) {
    newsList20 = res.slice(0,20);

    newsList20.forEach(function(id) {
      storiesArray.push($.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty'));
    });

      Promise.all(storiesArray).then(function(data) {
        data.forEach(function(story) {
          $li = $("<li>");

          $icon = $("<span>").addClass("glyphicon glyphicon-star-empty");

          $topictext = $("<a>").attr("href", story.url)
                              .addClass("topic-text")
                              .text(story.title);
          $link = $("<span>").addClass("anchor").text("(" + story.url + ")");
          $li.append($topictext).append($link);
          $topiclist.append($li);
        });
      });
  });

    $(".login").on("submit", function(e) {
      if (!$("#username").val() || !$("#password").val()) {
        e.preventDefault();
        alert("Please fill in empty fields");
      } else {
        e.preventDefault();
        $.post({
          url: 'https://hn-favorites.herokuapp.com/login',
          data: {username: "polinka1986", password: "1986/pol"}
        }).then(function(res) {
          authentification = res.auth_token;
        }).then(function(res) {
          if (typeof authentification === "string") {
            loggedIn = true;
            console.log("yey");
          }
        });

        $(".login").trigger("reset");
      }
    });

    $(".signup").on("submit", function(e) {
      if (!$("#usernameNew").val() || !$("#passwordNew").val()) {
        e.preventDefault();
        alert("Please fill in empty fields");
      } else {
        e.preventDefault();
        var token = $.post({
          url: 'https://hn-favorites.herokuapp.com/signup',
          data: {username: "polinka1986", password: "1986/pol"}
        });
        if (token) {
          console.log("show the favorites");
        }
        $(".signup").trigger("reset");
      }
    });

if (loggedIn) {
  formStatus = true;
} else {
  formStatus = false;
}



});
