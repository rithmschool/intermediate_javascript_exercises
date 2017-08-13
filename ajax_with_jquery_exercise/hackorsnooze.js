$(function() {

  // UI stuff
  $form = $('#form-container-wrapper');
  $('#login').click(() => $form.slideToggle(200));
  $('#favorites').click(() => $('#links > li').filter('.off').toggle(false));
  $('#top-stories').click(() => $('#links > li').filter('.off').toggle(true));

  // Ajax
  // Top stories
  $.get('https://hacker-news.firebaseio.com/v0/topstories.json')
   .then(function(res){
      storyIds = Array.from(res);
      console.log(storyIds.length);
      return storyIds;
   })
   .then(function(storyIds) {
    storyIds.slice(0,20).forEach(function(id) {
      $.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(function(res) {
        renderLinks([res]);
      })
    })
   });

   // Favorites
   $('#links').on('click', '.fav-icon', function(e){
     var $target = $(e.target);
     if ($target.parent().hasClass('off')) {
       // if not faved, save it
       $.ajax({
         url: 'https://hn-favorites.herokuapp.com/stories.json',
         method: 'POST',
         beforeSend: function(xhr){
           xhr.setRequestHeader('Authorization', localStorage.getItem('auth_token'));
         },
         data: $(this).parent().data()
       })
       .then(function(res){
         $target.parent().data('id', res.id);
         console.log(res);
       });
     } else {
       // else remove from faves
       $.ajax({
         url: `https://hn-favorites.herokuapp.com/stories/${$target.parent().data('id')}.json`,
         method: 'DELETE',
         beforeSend: function(xhr){
           xhr.setRequestHeader('Authorization', localStorage.getItem('auth_token'));
         }
       })
       .then(function(res){
         // remove fave stuff from ui
       });
     }
     var icon = $target.html() == '☆' ? '★' : '☆';
     $target.html(icon);
     $target.parent().toggleClass('off');
   });

   // Sign in / Sign up
   $('#signup-form').submit(function(e) {
     e.preventDefault();
     $.post('https://hn-favorites.herokuapp.com/signup', $(this).serialize(), function(res){
       localStorage.setItem('auth_token', res.auth_token);
     });
   });
   $('#login-form').submit(function(e){
     e.preventDefault();
     $.post('https://hn-favorites.herokuapp.com/login', $(this).serialize(), function(res){
       localStorage.setItem('auth_token', res.auth_token);
       displayFavIcons();
       $form.toggle(200);
     });
   });

   function displayFavIcons() {
     $('.fav-icon').each(function(){
       $(this).fadeToggle(200).css('display','inline');
     });
   }

   function renderLinks(items) {
     items.forEach(function(item) {
       var shortUrl = item.url.match(/([a-z]+\.)?[a-z]+\.[a-z]+/i)[0];
       var icon = $('<div class="fav-icon">☆</div> ');
       var title = $(`<div class="title"> ${item.title} </div>`);
       var url = $(`<div class="url">(<a href="${item.url}">${shortUrl}</a>)</div>`);
       var li = $('<li>', {
         html: [icon, title, url],
         class: 'off'
       });
       li.data('hacker_news_story', {
         by: item.by,
         story_id: item.id,
         title: item.title,
         url: item.url
       });
       $('#links').append(li);
     });
   }
});