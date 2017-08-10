/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

$(function() {
  // cache all the jQuery objects
  var $toggle = $('.toggle');
  var $faves = $('.faves');
  var $login = $('.login');
  var $main = $('main');
  var $forms = $('.forms');
  var $olTop = $('ol.top');

  var $emailIn = $('#email-in');
  var $passwordIn = $('#password-in');
  var $signIn = $('#sign-in');
  var $signInForm = $('#signin-form');

  var $emailUp = $('#email-up');
  var $passwordUp = $('#password-up');
  var $signUp = $('#sign-up');
  var $signUpForm = $('#signup-form');

  var $logout = $('.logout');

  var formShow = false;
  var faveShow = false;
  const numStories = 20;

  $forms.hide();

  getTopStories(numStories);
  var faveIds = getFavedStoryIds();

  // ===========================================================================
  // Event listener to show and hide the form
  $toggle.on('click', function() {
    if (formShow) {
      $forms.show();
    } else {
      $forms.hide();
    }

    $forms.slideToggle(500);

    formShow = !formShow;

    $emailIn.focus();
  });

  // ===========================================================================
  // Event listener for sign in form submission
  $signInForm.on('submit', function(event) {
    event.preventDefault();
    signIn();
  });

  // ===========================================================================
  // Event listener for sign in form submission
  $signUpForm.on('submit', function(event) {
    event.preventDefault();
    signUp();
  });

  // ===========================================================================
  // Event listener to sign out
  $logout.on('click', function(event) {
    localStorage.removeItem('token');
    $('span.glyphicon').addClass('hidden');
    $login.text('login');
  });


  // ===========================================================================
  // Event listener to save a story as favorited if not already a favorite
  $olTop.on('click', 'span.glyphicon', function(event) {
    if($(event.target).hasClass('glyphicon-star-empty')) {
      saveFavorite(event);
    }
  });

  // ===========================================================================
  // Function pull top stories from Hacker News
  function getTopStories(num) {
    var storyIds = [];

    $.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(stories => {
      for (var i = 0; i < num; i++) {
        storyIds.push(stories[i]);
      }

        storyIds.forEach(function(ele) {
          $.get(`https://hacker-news.firebaseio.com/v0/item/${ele}.json`)
          .then(story => {
            if(story.url) addSite(story);
          });
        });
      }
    ).fail(err => {
      console.warn(err);
    });
  }

  // ===========================================================================
  // Function to sign in to hh-favorites
  function signIn() {
    var email = $emailIn.val();
    var password = $passwordIn.val();

    $.ajax({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        url: "https://hn-favorites.herokuapp.com/login",
        data: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(function(data) {
      setLogin(data.auth_token);
    })
    .fail(err => console.warn(err));

    $emailIn.val('');
    $passwordIn.val('');
  }

  // ===========================================================================
  // Function to create account to hh-favorites
  function signUp() {
    var email = $emailUp.val();
    var password = $passwordUp.val();

    $.ajax({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        url: "https://hn-favorites.herokuapp.com/signup",
        data: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(function(data) {
      setLogin(data.auth_token);
    })
    .fail(err => console.warn(err));

    $emailUp.val('');
    $passwordUp.val('');
  }

  // ===========================================================================
  // Function to update page after login, called by #signIn and #signUp
  function setLogin(token) {
    localStorage.setItem('token', token);
    $('ol.top span.glyphicon').removeClass('hidden');
    $login.text('hello!');
    $forms.hide();
  }

  // ===========================================================================
  // Function to create and add story to list
  function addSite(story) {
    var {id, title, by, url} = story;
    var $li = $('<li>');

    var $faveSpan = $('<span>');
    $faveSpan.addClass('hidden glyphicon glyphicon-star-empty');

    if (faveIds) {
      for (var i = 0; i < faveIds.length; i++) {
        if (faveIds[i] === id) {
          $faveSpan.removeClass('glyphicon-star-empty');
          $faveSpan.addClass('glyphicon-star');
        }
      }
    }

    var $link = $('<a>');
    $link.attr('href', url)
         .attr('target', '_blank')
         .text(title);

    var $domainSpan = $('<span>');
    $domainSpan.addClass('domain')
               .text(getDomain(url));

    var $hiddenP = $('<p>');
    $hiddenP.text(id + ' ' + by)
            .addClass('hidden');

    $li.append($faveSpan);
    $li.append($link);
    $li.append($domainSpan);
    $li.append($hiddenP);
    $olTop.append($li);

    // show favorite buttons if signed in
    if (localStorage.getItem("token")) {
      $('ol.top span.glyphicon').removeClass('hidden');
      $login.text('hello!');
    }
  }

  // ===========================================================================
  // Function to collect data for and make ajax request to save story as a favorite
  function saveFavorite(event) {
    var target = event.target;
    var $parent = $(target).parent();
    var title = $parent.children().eq(1).text();
    var url = $parent.children().eq(1).attr('href');
    var hidden = $parent.children().eq(3).text();
    var idAndBy = hidden.split(' ');
    var id = idAndBy[0];
    var by = idAndBy[1];

    var token = localStorage.getItem('token');

    $.ajax({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
          },
        url: "https://hn-favorites.herokuapp.com/stories.json",
        data: JSON.stringify({
          hacker_news_story: {
                    by: by,
                    story_id: id,
                    title: title,
                    url: url
                  }
        })
    })
    .then(function(data) {
      $(event.target).toggleClass('glyphicon-star-empty glyphicon-star');
    })
    .fail(err => console.warn(err));
  }

});

// ===========================================================================
// Function to parse url and return domain name
function getDomain(url) {
  var fullDomain = url.split('//')[1];
  var domain = fullDomain.split('/');
  return '(' + domain[0] + ')';
}

// ===========================================================================
// function to get faved story ids from local storage
function getFavedStoryIds() {
  var favorites = localStorage.getItem('favorites');
  var faveIds = [];

  if (favorites) {
    var faves = JSON.parse(favorites);

    for (var i = 0; i < faves.length; i++) {
      faveIds.push(faves[i].story_id);
    }
  }

  return faveIds;
}








// end
