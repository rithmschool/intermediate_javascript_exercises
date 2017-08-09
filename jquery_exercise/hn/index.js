$(document).ready(function() {
  $('button').click(function(ev) {
    ev.preventDefault();
    // buildup variables
    var star = $('<span class="glyphicon glyphicon-star-empty"></span>');
    var title = $(`<span class="title-span"> ${$('#title').val()} </a></span>`);
    var url = $(
      `<span class="url-span">(<a href=${$('#url').val()} target="_blank"> ${$(
        '#url'
      ).val()}</a>)</span>`
    );
    // collect and append to list
    var element = $('<li>', {
      html: [star, title, url]
    });
    // append to list
    $('#list').append(element);
    // clear form and hide
    $('#title').val('');
    $('#url').val('');
    $('form').toggle();
  });
  // toggle form on submit
  $('#submit').click(function() {
    $('form').toggle();
  });

  // toggle stars
  $('body').on('click', '.glyphicon', function(e) {
    $(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
  });
  // show hide favorites
  $('#favorites').click(function() {
    $('li').each(function(index) {
      if ($('span').find('glyphicon-star')) {
        $('.glyphicon-star-empty').parent().hide();
        $('#favorites').hide();
        $('#all').show();
      }
    });
  });
  // show hide all
  $('#all').click(function() {
    $('.glyphicon-star-empty').parent().show();
    $('#favorites').toggle();
    $('#all').hide();
  });
});
