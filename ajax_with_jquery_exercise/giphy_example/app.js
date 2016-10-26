$(function() {

  var $search = $("#search");
  var $giphyArea = $("#giphy-area");

  $("form").on('submit', function(e) {
    e.preventDefault();

    var searchText = $search.val();
    $search.val('');
    $.get('http://api.giphy.com/v1/gifs/search', {
      q: encodeURIComponent(searchText),
      api_key: 'dc6zaTOxFJmzC',
      rating: 'g'
    }).then(function(res) {
      var gifs = res.data;
      var randomGif = gifs[Math.floor(Math.random() * gifs.length)];
      $giphyArea.append($("<img>", {
        src: randomGif.images.original.url
      }));
    }, function(err) {
      console.log(err);
    });

  });

  $("#reset").on('click', function() {
    $giphyArea.empty();
  });

});