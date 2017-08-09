$(function() {

  const HN_BASE_URL = "https://hacker-news.firebaseio.com/v0";
  const FAVORITES_BASE_URL = "https://hn-favorites.herokuapp.com";

  let $login = $("#login");
  let $loginForms = $("#login-forms");
  let $stories = $("#stories");
  let onFavorites = $(location).prop('pathname').match('favorites');

  // if you try to access the favorites page but you're not logged in, go back to index.html
  if (onFavorites && !localStorage.getItem('token')) {
    $(location).attr('href', '/');
  }

  if (onFavorites) {
    // if we're on favorites.html and are logged in, grab the current user's favorites
    getCurrentUserFavorites()
    .then(function(stories) {
      stories.forEach(story => addStory(story));
      $(".glyphicon").toggleClass('glyphicon-star glyphicon-star-empty').show()
    });
  } else {
    // we're on index.html, so grab the top stories from Hacker News
    $.get(`${HN_BASE_URL}/topstories.json`)
    .then(function(ids) {
      let requests = ids.slice(0, 25).map(id => $.get(`${HN_BASE_URL}/item/${id}.json`));
      return Promise.all(requests);
    })
    .then(function(stories) {
      // add the stories from hacker news to the page
      stories.forEach(story => addStory(story));
      if (localStorage.getItem('token')) {
        // if we're logged in, also grab the user's favorites so we know which stars to mark as favorite
        return getCurrentUserFavorites()
      }
    })
    .then(function(userFavorites) {
      if (userFavorites) {
        // if the current user has favorites, go through the stars and mark any favorites as such
        let story_ids = userFavorites.map(favorite => favorite.story_id);
        let db_ids =  userFavorites.map(favorite => favorite.id);
        $stories.children().each(function(idx, story) {
          let story_idx = story_ids.indexOf($(story).children('a').data('id')) 
          if (story_idx > -1) {
            $(story)
              .children('.glyphicon')
              .toggleClass('glyphicon-star glyphicon-star-empty')
              .data('id', db_ids[story_idx]);
          } 
        })
      }
      checkLoginStatus();
    });
  }

  $login.on('click', function() {
    if (localStorage.getItem('token')) {
      // if logged in, log out
      localStorage.removeItem('token');
      if (onFavorites) $(location).attr('href', '/');
      checkLoginStatus();
    } else {
      // if logged out, show the login/signup forms
      $loginForms.slideToggle();
    }
  });

  $loginForms.on('submit', 'form', function(e) {
    e.preventDefault();
    let $form = $(e.target);
    let path = $form.find('button').text();
    let $inputs = $form.find('input');

    // signup or login, depending on which form was submitted
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
    
    // get relevant data to send along with the POST request
    let author = $tgt.next().next().next().text().split(" ")[1];
    let title = $tgt.next().text();
    let url = $tgt.next().attr('href');
    let story_id = $tgt.next().data('id');

    // create POST request to add a new story
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
      // mark the story as being favorited, and keep track of the ID for potential deletion
      $(e.target).toggleClass('glyphicon-star-empty glyphicon-star')
                 .data('id', d.id);
    });
  });

  // deleting a favorite
  $stories.on('click', '.glyphicon-star', function(e) {
    // necessary ID is stored as a data attribute on the star
    let id = $(e.target).data('id');
    $.ajax({
      url: `${FAVORITES_BASE_URL}/stories/${id}.json`,
      method: "DELETE",
      headers: {
        "Authorization": localStorage.getItem('token')
      },
      contentType: "application/json"
    }).then(function(d) {
      // how the page gets updated depends on whether we're on favorites.html or index.html
      if (onFavorites) {
        $(e.target).parent().remove();
      } else {
        $(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
      }
    });
  })

  // helper responsible for adding a new story li do the DOM
  function addStory(story) {
    let formattedTime = onFavorites ? '' : moment.unix(story.time).fromNow();
    let hostname = $(`<a href=${story.url}>`).prop('hostname');
    let shortHostname = hostname.match(/\w+.\w+$/) ? hostname.match(/\w+.\w+$/)[0] : hostname;
    $stories.append(`
      <li>
        <span class="glyphicon glyphicon-star-empty" data-id=${story.id}/></span>
        <a href=${story.url} target="_blank" data-id=${story.id}>${story.title}</a>
        <small>(${shortHostname})</small>
        <p>
          <small>by ${story.by} ${formattedTime}</small>
        </p>
      </li>
    `);
  }

  // helper to check current login status and update the view
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

  // helper to get a current user's favorite stories
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