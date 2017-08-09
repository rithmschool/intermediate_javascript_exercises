/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

$(function() {

  var $olFavorite = $('ol.favorite');

  var token = localStorage.getItem('token');

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
    // console.log(story);
    var {id, story_id, title, by, url} = story;
    var $li = $('<li>');

    var $faveSpan = $('<span>');
    $faveSpan.addClass('glyphicon glyphicon-star');

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
    $olFavorite.append($li);
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
