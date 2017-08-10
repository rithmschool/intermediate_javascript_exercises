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
  var $main = $('main');
  var $form = $('form');
  var $ol = $('ol');
  var $title = $('#title');
  var $url = $('#url');
  var $addSite = $('#add-site');

  var formShow = false;
  var faveShow = false;

  $form.hide();

  // ===========================================================================
  // Event listener to show and hide the form
  $toggle.on('click', function() {
    if (formShow) {
      $form.show();
    } else {
      $form.hide();
    }

    $form.slideToggle(500);
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
  // Event listener for form submission
  $form.on('submit', function(event) {
    event.preventDefault();
    addSite();
  });

  // ===========================================================================
  // Event listener to mark a link as favorited (or unfavorited)
  $ol.on('click', 'span.glyphicon', function(event) {
    $(event.target).toggleClass('glyphicon-star-empty glyphicon-star');
  });

  // ===========================================================================
  // Function to create and add link to list
  function addSite() {
    var title = $title.val();
    var url = $url.val();

    if (title.length && url.length) {
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

      $title.val('');
      $url.val('');
    }
  }

  // ===========================================================================
  // Function to parse url and return domain name for the second bonus feature.
  // That haven't finished :-(
  function getDomain(url) {
    var fullDomain = url.split('//')[1];
    var domain = fullDomain.split('.');
    return '(' + domain[1] + '.' + domain[2] + ')';
  }
});
