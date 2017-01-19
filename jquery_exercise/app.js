$(function() {

  var $submit = $("#submit");
  var $favorites = $("#favorites");
  var $newForm = $("#new-form");
  var $stories = $("#stories");
  var $title = $("#title");
  var $url = $("#url");
  var $clearFilter = $(".navbar-right");

  $submit.on('click', function() {
    $newForm.slideToggle();
  });

  $newForm.on('submit', function(e) {
    e.preventDefault();

    var title = $title.val();
    var url = $url.val();
    var $newLink = $("<a>", {
      text: title,
      href: url,
      target: "_blank"
    });
    var hostname = $newLink.prop('hostname').match(/\w+.\w+$/)[0];
    var $small = $("<small>", {
      text: "(" + hostname + ")"
    });
    var $star = $("<span>", {
      "class": "glyphicon glyphicon-star-empty"
    });
    var $newStory = $("<li>").append($star, $newLink, $small);
    $submit.trigger('click');
    $title.val('');
    $url.val('');

    $stories.append($newStory);
  });
  
  $stories.on('click', 'small', function(e) {
    var currentHostname = $(e.target).text()
    $stories.children('li').filter(function(i, el) {
      return $(el).children('small').text() !== currentHostname;
    }).hide();
    $stories.addClass('hide-numbers');
    $clearFilter.show();
    $favorites.text('all');
  });

  $stories.on('click', '.glyphicon', function(e) {
    $(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
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

});