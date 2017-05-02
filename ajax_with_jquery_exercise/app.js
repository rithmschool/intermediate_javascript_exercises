$(function() {
  var newsList20;
  var storiesArray = [];
  var $link;
  var $li;
  var $anchor = $(".anchor");
  var $topiclist = $(".topiclist");
  var $topictext;
  var $icon;

  $.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', function(res) {
    newsList20 = res.slice(0,20);

    newsList20.forEach(function(id) {
      storiesArray.push($.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty'));
    });
    console.log(storiesArray);

      Promise.all(storiesArray).then(function(data) {
        data.forEach(function(story) {
          $li = $("<li>");
          $icon = $("<span>").addClass("glyphicon glyphicon-star-empty");
          $topictext = $("<a>").attr("href", story.url)
                              .addClass("topic-text")
                              .text(story.title);
          $link = $("<span>").addClass("anchor").text("(" + story.url + ")");
          $li.append($icon).append($topictext).append($link);
          $topiclist.append($li);
        });
      });
  });
});
