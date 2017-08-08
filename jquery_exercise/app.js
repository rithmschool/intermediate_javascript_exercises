/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

$(function() {
  var $toggle = $('.toggle');
  var $faves = $('.faves');
  var $main = $('main');
  var $form = $('form');
  var $ol = $('ol');
  var $title = $('#title');
  var $url = $('#url');
  var $addSite = $('#add-site');

  var formShow = false;

  $form.hide();

  $toggle.on('click', function() {
    if (formShow) {
      $form.show();
    } else {
      $form.hide();
    }

    $form.slideToggle(500);
    formShow = !formShow;
  });

  $faves.on('click', function() {
    var $notFaves = $('ol').find('li > span.glyphicon-star-empty').parent();
    $notFaves.toggleClass('hidden');
    $ol.toggleClass('no-list-nums');
  });

  $form.on('submit', function(event) {
    event.preventDefault();
    addSite();
  });

  $ol.on('click', 'span', function(event) {
    $(event.target).toggleClass('glyphicon-star-empty glyphicon-star');
  });

  function addSite() {
    var title = $title.val();
    var url = $url.val();

    if (title.length && url.length) {
      var $li = $('<li>');

      var $urlSpan = $('<span>');
      $urlSpan.addClass('glyphicon glyphicon-star-empty');

      var $link = $('<a>');
      $link.attr('href', url)
      .attr('target', '_blank')
      .text(title);

      $li.append($urlSpan);
      $li.append($link);
      $ol.append($li);

      $title.val('');
      $url.val('');
    }
  }
});
