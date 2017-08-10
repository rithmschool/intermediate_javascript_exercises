/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

$(function() {

  var $olFavorite = $('ol.favorite');
  var token = localStorage.getItem('token');

  $olFavorite.on('click', 'span.favorited', function(event) {
    removeFavorite(event);
  });

  if (token) {
    getFavorites();
  } else {
    showLogInMessage();
  }

  // ===========================================================================
  // Function to make ajax request to hh-favorites for favorite stories
  function getFavorites() {
    var storyIds = [];

    $.ajax({
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
          },
        url: "https://hn-favorites.herokuapp.com/stories.json"
    })
    .then(faves => {
      faves.forEach(function(ele) {
          addFavorite(ele);
        });
      }
    ).fail(err => console.warn(err));
  }

  // ===========================================================================
  // Function to create and add story to list
  function addFavorite(story) {
    var {id, title, url, story_id} = story;
    console.log(story);
    var $li = $('<li>');

    var $faveSpan = $('<span>');
    $faveSpan.addClass('glyphicon glyphicon-star favorited');

    var $link = $('<a>');
    $link.attr('href', url)
         .attr('target', '_blank')
         .text(title);

    var $domainSpan = $('<span>');
    $domainSpan.addClass('domain').text(getDomain(url));

    var $hiddenP = $('<p>');
    $hiddenP.text(id).addClass('hidden');

    $li.append($faveSpan);
    $li.append($link);
    $li.append($domainSpan);
    $li.append($hiddenP);
    $olFavorite.append($li);
  }

  // ===========================================================================
  // Function to remove favorite
  function removeFavorite(event) {
    var target = event.target;
    var $parent = $(target).parent();
    var id = $parent.children().eq(3).text();

    var token = localStorage.getItem('token');

    $.ajax({
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
          },
        url: `https://hn-favorites.herokuapp.com/stories/${id}.json`
    })
    .then(function(data) {
      $parent.remove();
    })
    .fail(err => console.warn(err));
  }

  // ===========================================================================
  // Function to show message if user is not signed in
  function showLogInMessage() {
    var $li = $('<li>');

    var $p = $('<p>');
    $p.text('Please login to see your favorite stories.');
    $p.addClass('message');

    $li.append($p);
    $olFavorite.append($li);
  }
});
