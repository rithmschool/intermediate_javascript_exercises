$(function() {
  $form = $('#submit-form-container');
  $('#submit').click(function(e){
    $form.toggle(200);
  });
  $('#favorites').click(function(){
    $('li.off').toggle();
  });
  $('#links').on('click', '.fav-icon', function(e){
    var $target = $(e.target);
    var icon = $target.html() == '☆' ? '★' : '☆';
    $target.html(icon);
    $target.parent().toggleClass('off');
  });
  $('#submit-form').submit(function(e){
    e.preventDefault();
    
    var icon = $('<span class="fav-icon">☆</span> ');
    var title = $(`<span class="title"> ${$('#title').val()} </span>`);
    var url = $(`<span class="url">(<a href="#">${$('#url').val()}</a>)</span>`);
    var item = $('<li>', {
      html: [icon, title, url],
      class: 'off'
    });
    $('#links').append(item);
    $form.toggle(200);
  });
});