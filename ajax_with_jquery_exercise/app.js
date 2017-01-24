$(function() {

  const HN_BASE_URL = "https://hacker-news.firebaseio.com/v0";
  const FAVORITES_BASE_URL = "https://hn-favorites.herokuapp.com";

  let $login = $("#login");
  let $loginForms = $("#login-forms");
  let $stories = $("#stories");
  let onFavorites = $(location).prop('pathname').match('favorites');

  if (onFavorites && !localStorage.getItem('token')) {
    $(location).attr('href', '/');
  }

  // pre-populate 

  if (onFavorites) {
    getCurrentUserFavorites()
    .then(function(stories) {
      stories.forEach(story => addStory(story));
      $(".glyphicon").toggleClass('glyphicon-star glyphicon-star-empty').show()
    });
  } else {
    $.get(`${HN_BASE_URL}/topstories.json`)
    .then(function(ids) {
      let requests = ids.slice(0, 25).map(id => $.get(`${HN_BASE_URL}/item/${id}.json`));
      return Promise.all(requests);
    })
    .then(function(stories) {
      stories.forEach(story => addStory(story));
      if (localStorage.getItem('token')) {
        return getCurrentUserFavorites()
      }
    })
    .then(function(userFavorites) {
      if (userFavorites) {
        let ids = userFavorites.map(favorite => favorite.story_id);
        $stories.children().each(function(idx, story) {
          if (ids.indexOf($(story).children('a').data('id')) > -1) {
            $(story).children('.glyphicon').toggleClass('glyphicon-star glyphicon-star-empty');
          } 
        })
      }
      checkLoginStatus();
    });
  }

  checkLoginStatus();

  $login.on('click', function() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      if (onFavorites) $(location).attr('href', '/');
      checkLoginStatus();
    } else {
      $loginForms.slideToggle();
    }
  });

  $loginForms.on('submit', 'form', function(e) {
    e.preventDefault();
    let $form = $(e.target);
    let path = $form.find('button').text();
    let $inputs = $form.find('input');

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
    }, function(e) {
      // log error
      console.log(e);
    });
  });

  // adding a favorite
  $stories.on('click', '.glyphicon-star-empty', function(e) {
    let $tgt = $(e.target);
    let author = $tgt.next().next().next().text().split(" ")[1];
    let title = $tgt.next().text();
    let url = $tgt.next().attr('href');
    let story_id = $tgt.next().data('id');
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
      $(e.target).toggleClass('glyphicon-star-empty glyphicon-star')
                 .data('id', d.id);
    });
  });

  // deleting a favorite
  $stories.on('click', '.glyphicon-star', function(e) {
    let id = $(e.target).data('id');
    $.ajax({
      url: `${FAVORITES_BASE_URL}/stories/${id}.json`,
      method: "DELETE",
      headers: {
        "Authorization": localStorage.getItem('token')
      },
      contentType: "application/json"
    }).then(function(d) {
      if (onFavorites) {
        $(e.target).parent().remove();
      } else {
        $(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
      }
    });
  })

  function addStory(story) {
    let $newLink = $("<a>", {
      text: story.title,
      href: story.url,
      target: "_blank",
      data: {
        id: story.id
      }
    })
    let formattedTime = onFavorites ? '' : moment.unix(story.time).fromNow();
    let hostname = $newLink.prop('hostname');
    let shortHostname = hostname.match(/\w+.\w+$/) ? hostname.match(/\w+.\w+$/)[0] : hostname;
    let $small = $("<small>", {
      text: "(" + shortHostname + ")"
    });
    let $star = $("<span>", {
      "class": "glyphicon glyphicon-star-empty",
      data: {
        id: story.id
      }
    });
    let $credit = $("<p>").append($("<small>", {
      text: `by ${story.by} ${formattedTime}` 
    }));
    let $newStory = $("<li>").append($star, $newLink, $small, $credit);
    $stories.append($newStory);
  }

  function checkLoginStatus() {
    let $stars = $(".glyphicon");
    if (localStorage.getItem('token')) {
      $login.text('logout');
      $stars.show();
    } else {
      $login.text('login');
      $stars.hide();
    }
  }

  function getCurrentUserFavorites() {
    return $.ajax({
      url: `${FAVORITES_BASE_URL}/stories.json`,
      headers: {
        "Authorization": localStorage.getItem('token')
      },
      dataType: "json",
      contentType: "application/json"
    });
  }

});