$(function() {

  const HN_BASE_URL = "https://hacker-news.firebaseio.com/v0";
  const FAVORITES_BASE_URL = "https://hn-favorites.herokuapp.com"

  var $login = $("#login");
  var $loginForms = $("#login-forms");

  // pre-populate from HN
  $.get(`${HN_BASE_URL}/topstories.json`)
  .then(function(ids) {
    var requests = ids.slice(0, 25).map(id => $.get(`${HN_BASE_URL}/item/${id}.json`));
    return Promise.all(requests);
  })
  .then(function(stories) {
    return stories.forEach(story => addStory(story));
  })
  .then(function() {
    checkLoginStatus();
  });

  checkLoginStatus();

  // old version
  var $favorites = $("#favorites");
  var $stories = $("#stories");
  var $title = $("#title");
  var $url = $("#url");

  $login.on('click', function() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      checkLoginStatus();
    } else {
      $loginForms.slideToggle();
    }
  });

  $loginForms.on('submit', 'form', function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var path = $form.find('button').text();
    var $inputs = $form.find('input');

    $.post({
      url: `${FAVORITES_BASE_URL}/${path}`,
      dataType: 'json',
      data: {
        email: $inputs.eq(0).val(),
        password: $inputs.eq(1).val()
      }
    }).then(function(data) {
      // set login info
      localStorage.setItem('token', data.auth_token)
      checkLoginStatus();
      $inputs.val('');
      $loginForms.slideToggle();
      console.log(data);
    }, function(e) {
      // show error message to user
      console.log(e);
    });
  });
  
  $stories.on('click', 'small', function(e) {
    var currentHostname = $(e.target).text()
    $stories.children('li').filter(function(i, el) {
      return $(el).children('small').text() !== currentHostname;
    }).hide();
    $stories.addClass('hide-numbers');
    $favorites.text('all');
  });

  $stories.on('click', '.glyphicon-star-empty', function(e) {
    var $tgt = $(e.target);
    var author = $tgt.next().next().next().text().split(" ")[1];
    var title = $tgt.next().text();
    var url = $tgt.next().attr('href');
    var story_id = $tgt.next().data('id');
    $.ajax({
      url: `${FAVORITES_BASE_URL}/stories.json`,
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem('token')
      },
      data: JSON.stringify({
        "hacker_news_story": {
          "by": author,
          "story_id": story_id, 
          "title": title,
          "url": url
        }
      }),
      dataType: "json",
      contentType: "application/json"
    }).then(function(d) {
      console.log(d);
      $(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
    });
  });

  $favorites.on('click', function(e) {
    if ($favorites.text() === 'favorites') {
      $stories.children('li').filter(function(i, el) {
        return $(el).children('.glyphicon').hasClass('glyphicon-star-empty');
      }).hide();
      $stories.addClass('hide-numbers');
      $favorites.text('all');
    } else {
      $stories.children('li').show();
      $stories.removeClass('hide-numbers');
      $favorites.text('favorites');
    }
  });

  function addStory(story) {
    var $newLink = $("<a>", {
      text: story.title,
      href: story.url,
      target: "_blank",
      data: {
        id: story.id
      }
    })
    var formattedTime = moment.unix(story.time).fromNow()
    var hostname = $newLink.prop('hostname');
    var shortHostname = hostname.match(/\w+.\w+$/) ? hostname.match(/\w+.\w+$/)[0] : hostname;
    var $small = $("<small>", {
      text: "(" + shortHostname + ")"
    });
    var $star = $("<span>", {
      "class": "glyphicon glyphicon-star-empty"
    });
    var $credit = $("<p>").append($("<small>", {
      text: `by ${story.by} ${formattedTime}` 
    }));
    var $newStory = $("<li>").append($star, $newLink, $small, $credit);
    $stories.append($newStory);
  }

  function checkLoginStatus() {
    var $stars = $(".glyphicon");
    if (localStorage.getItem('token')) {
      $login.text('logout');
      $stars.show();
    } else {
      $login.text('login');
      $stars.hide()
    }
  }

});

// show flash messages
// no stars on index
// favorites page