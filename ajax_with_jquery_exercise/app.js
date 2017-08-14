$(document).ready(function() {

  // do this
  fetchTopTwentyStories();

  var signUp;


$('#login').on('click', function(event) {
  if ($( this ).text() === "logout") {
    var email = $( ".navbar-right li" ).eq(1).text();
    // remove text on right
    $( ".navbar-right li" ).each(function() {
      $( this ).remove();
    });

    // toggle favorite
    $('.navbar-text text').eq(1).toggleClass('loginOnly');
    $('#fav').toggleClass('loginOnly');
    //$('.loginOnly').toggleClass('loginOnly');

    // remove auth token from local storage
    localStorage.removeItem(email);

    // change text back to login
    $( this ).text("login").wrapInner("<strong />");

    // empty stories list display
    $("ol").empty();
  }
  else {
    $('section').toggleClass('noShow');
    signUp = false;
  }
});

$('#signup').on('click', function(event) {
  $('section').toggleClass('noShow');
  signUp = true;
});

$('.form-horizontal').on('submit', function(event) {
  if(signUp) {
    loginOrSignUp("signup");
  }
  else {
    loginOrSignUp("login");
  }

  $('section').toggleClass('noShow');
  event.preventDefault();
});

$('#fav').on("click", function(e) {
  if ($( this ).text() === "all") {
    $( "li span" ).each(function( index ) {
      if($( this ).hasClass('glyphicon-star-empty') ) {
      $( this ).parent().show();
    }
  });
    $( this ).text("favorites").wrapInner("<strong />");
  }
  else if ( $( this ).text() === "favorites" ) {
    $( "li span" ).each(function( index ) {
    if($( this ).hasClass('glyphicon-star-empty') ) {
      $( this ).parent().hide();
    }
    });
    $( this ).text("all").wrapInner("<strong />");

  }

  });

  $("ol").on("click", ".glyphicon", function(e) {
    if( $(e.target).hasClass('glyphicon-star-empty') ) {

      $(e.target).toggleClass('glyphicon-star-empty glyphicon-star');
    }
    else {
      $(e.target).toggleClass('glyphicon-star glyphicon-star-empty');
    }
   });
});

function fetchTopTwentyStories() {
  $.get("https://hacker-news.firebaseio.com/v0/topstories.json")
  .then(function(stories) {
    return stories.slice(0, 20);
  })
  .then(function(tStories) {
    tStories.forEach(function(element) {
      $.get('https://hacker-news.firebaseio.com/v0/item/' + element + '.json')
      .then(function(storyDetail) {
        if ('url' in storyDetail) {
          var cutUrl = "";
          var iUrl = storyDetail.url;
          if (iUrl.includes("www.")) {
            cutUrl = iUrl.split('www.')[1].split('/')[0].split('.').slice(-2).join('.');
          }
          else {
            cutUrl = storyDetail.url.split('//')[1].split('/')[0];
            if (cutUrl.match(/(.*\.)+(.*\.)+.*/g)) {
              cutUrl = cutUrl.split('.').slice(-2).join('.');
            }
          }
          var element = '<li><span class="glyphicon glyphicon-star-empty' +
          '"></span> <a href="' + storyDetail.url + '"> ' + storyDetail.title + '</a> (' + 
          '<span class="cuthead"><a href="from?site=' + cutUrl + '"><span>' + cutUrl +
           '</span></a></span>)</li>';
          $('ol').append(element);
        }
      })
      .fail(function(error) {
        console.warn("Isuue encountered in item fetch api");
      });
    });
  })
  .fail(function(error) {
    console.warn("Isuue encountered in top stories fetch api");
  });
}

function loginOrSignUp(str) {
  var email = $('#email').val();
  var password = $('#password').val();
  $.ajax({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      url: 'https://hn-favorites.herokuapp.com/' + str + '',
      data: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(function(data) {
      if ( data.auth_token.length > 0 && data.auth_token.includes('.') ) {
        alert(str + " successful.");
        // save the auth token in local storage
        localStorage.setItem(email, data.auth_token);
        $('.form-horizontal').each(function() {
          this.reset();
        });

        // toggle login to logout and add text logged in as on right nav
        // and show the favorites tab/icon
        if(str === "login") {
          $('.navbar-text text').eq(1).toggleClass('loginOnly');
          $('#fav').toggleClass('loginOnly');
          //$('.loginOnly').toggleClass('loginOnly');
          var element = '<li><b>Logged in as:</b></li>' +
          '<li><b>' + email + '</b></li>';
          $('.navbar-right').append(element);
          $('#login').text("logout").wrapInner("<strong />");
        }
      }
    })
    .fail(function(err) {
      if( 'status' in err && 'statusText' in err )
      // if( err.status !== undefined && err.statusText !== undefined )
        alert(str + " not successful. " + err.status + ": " + err.statusText);
      else
        alert(str + " not successful.");
    });
}