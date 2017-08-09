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
  var $ol = $('ol');

  var $emailIn = $('#email-in');
  var $passwordIn = $('#password-in');
  var $signIn = $('#sign-in');
  var $signInForm = $('#signin-form');

  var $emailUp = $('#email-up');
  var $passwordUp = $('#password-up');
  var $signUp = $('#sign-up');
  var $signUpForm = $('#signup-form');

  var formShow = false;
  var faveShow = false;
  const numStories = 20;

  // $forms.hide();

  getTopStories(numStories);

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
  });

  // ===========================================================================
  // Event listener to toggle between showing all links and only favorited links
  $faves.on('click', function() {
    var $notFaves = $('ol').find('li > span.glyphicon-star-empty').parent();
    $notFaves.toggleClass('hidden');
    $ol.toggleClass('no-list-nums');

    if (!faveShow) {
      $faves.text('all');
    } else {
      $faves.text('favorites');
    }

    faveShow = !faveShow;
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
  // Event listener to mark a link as favorited (or unfavorited)
  $ol.on('click', 'span.glyphicon', function(event) {
    $(event.target).toggleClass('glyphicon-star-empty glyphicon-star');
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
          if(story.url) addSite(story.title, story.url);
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
    console.log("SIGN IN", email, password);
    $emailIn.val('');
    $passwordIn.val('');
  }

  // ===========================================================================
  // Function to create account to hh-favorites
  function signUp() {
    var email = $emailUp.val();
    var password = $passwordUp.val();
    console.log("SIGN UP", email, password);
    $emailUp.val('');
    $passwordUp.val('');
  }

  // ===========================================================================
  // Function to create and add story to list
  function addSite(title, url) {
    var $li = $('<li>');

    var $faveSpan = $('<span>');
    $faveSpan.addClass('glyphicon glyphicon-star-empty');

    var $link = $('<a>');
    $link.attr('href', url)
         .attr('target', '_blank')
         .text(title);

    var $domainSpan = $('<span>');
    $domainSpan.addClass('domain')
               .text(getDomain(url));

    $li.append($faveSpan);
    $li.append($link);
    $li.append($domainSpan);
    $ol.append($li);
  }

  // ===========================================================================
  // Function to parse url and return domain name for the second bonus feature.
  // That I haven't finished :-(
  function getDomain(url) {
    var fullDomain = url.split('//')[1];
    var domain = fullDomain.split('/');
    return '(' + domain[0] + ')';
  }
});
