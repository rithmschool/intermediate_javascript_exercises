$(function() {
  var formStatus = false;
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
  var token = "";


  $.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', function(res) {
    newsList20 = res.slice(0,20);

    newsList20.forEach(function(id) {
      storiesArray.push($.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty'));
    });

      Promise.all(storiesArray).then(function(data) {
        data.forEach(function(story) {
          $li = $("<li>");

          $icon = $("<span>").addClass("glyphicon glyphicon-star-empty").addClass("hideIcons");

          $topictext = $("<a>").attr("href", story.url)
                              .addClass("topic-text")
                              .text(story.title);
          $link = $("<span>").addClass("anchor").text("(" + story.url + ")");
          $li.append($icon).append($topictext).append($link);
          $topiclist.append($li);
        });
      });
  });

    $(".login").on("submit", function(e) {
      var $email = $("#email").val();
      var $password = $("#password").val();
      var credentials = {email: $email, password: $password};

      if (!$email || !$password) {
        e.preventDefault();
        alert("Please fill in empty fields");
      } else {

        $.post({
          url: 'https://hn-favorites.herokuapp.com/login',
          data: credentials,
          dataType: "json",
        }).done(function(data) {
            var token = data.auth_token;
            loggedIn = true;
          });
        e.preventDefault();
        $(".login").trigger("reset");
      }
    });

    $(".signup").on("submit", function(e) {
      var $email = $("#emailNew").val();
      var $password = $("#passwordNew").val();
      var credentials = {email: $email, password: $password};

      if (!$email || !$password) {
        e.preventDefault();
        alert("Please fill in empty fields");
      } else {

        $.post({
          url: 'https://hn-favorites.herokuapp.com/signup',
          data: credentials,
          dataType: "json",
        }).done(function(data) {
            token = data.auth_token;
            loggedIn = true;
            $(".formToggle").empty().text("logged");
            formStatus = false;
            $(".loginform").slideUp(300);

            iconStatus = true;
            $icon.removeClass("hideIcons");
          });
        e.preventDefault();
        $(".signup").trigger("reset");
      }
    });

    $(".formToggle").on("click", function() {
      if (!formStatus) {
        formStatus = true;
        $(".loginform").slideDown(300);
      } else {
        formStatus = false;
        $(".loginform").slideUp(300);
      }
    });
});
