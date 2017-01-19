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
    var $newStory = $("<li>").append($newLink, $small);
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
  });

  $clearFilter.on('click', function() {
    $stories.children('li').show()
    $stories.removeClass('hide-numbers');
    $(this).hide();
  })


});