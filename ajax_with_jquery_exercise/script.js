// $(function(){
  var $postUrlForm = $('#newPost');
  // var $togglePostFormBtn = $('#toggleFormBtn');
  var $toggleLoginSignUpFormBtn = $('#loginSignUpBtn');
  var $loginSignUpForm = $('#loginSignUpForm');
  var $dataDisplay = $('ol');
  var $loginSignUpTabs = $('.nav-tabs');
  // var $topNavFavoriteBtn = $('#topNavFavoriteBtn');
  var $isPostFormVisible = false;
  var $isLoginSignUpFormVisible = false;
  // var showFavorites = false;
  var isLoggedin = false;
  // var $formLogin = $('#formLogin');
  // var $formSignUp = $('#formSignUp');
  var numberItemsDisplayed = 0;
  var $navBtns = $('.navbar-nav')
  var loggedIn = $('.loggedIn')
  var auth_key;
  var favorites = JSON.parse(localStorage.getItem("favorites"));
  var urls = {
    topStories : 'https://hacker-news.firebaseio.com/v0/topstories',  // + .json
    newsStories: 'https://hacker-news.firebaseio.com/v0/newstories', // + .json
    bestStories: 'https://hacker-news.firebaseio.com/v0/beststories', // + .json
    favorites :  'https://hn-favorites.herokuapp.com/stories',  // + .json  --> delete + ID.json
    favoritesLogin: 'https://hn-favorites.herokuapp.com/login'
  }

  $postUrlForm.hide()
  $loginSignUpForm.hide()
  // $loggedIn.hide()

  generateContent(urls.topStories)

  $navBtns.click(function(e){
    console.log()
  })


  function generateContent(url){
    $.get(url+'.json')
    .then(stories=> {
      var getStoryDetails = stories.map(story =>
           $.get(`https://hacker-news.firebaseio.com/v0/item/${story}.json`))
            .slice(0+numberItemsDisplayed, 20 + numberItemsDisplayed)

      return  Promise.all(getStoryDetails).then(storyDetails => {
              storyDetails.forEach(storyDetail => {
              newData(storyDetail.title, storyDetail.url || 'http://rithmschool.com', storyDetail.time, storyDetail.by, storyDetail.id)
              })
            }).catch(err => console.log("error"))
      })
      .fail(err => $('#main').append(
        $('<h1>', {text: 'Uh oh.... something went wrong :(' })
        )
      )
  }


  // Hide/Show URL form
  // $togglePostFormBtn.click(function(e){
  //   if($isPostFormVisible) $postUrlForm.show()
  //    else $postUrlForm.hide()
  //     $isPostFormVisible = !$isPostFormVisible;
  // })



  //Post Form
  $postUrlForm.on('submit', function(e){
    var $url=  $('#url'),
    $titleVal =  $('#title');

    e.preventDefault();

    newData($titleVal, $url)

    $url.val('')
    $titleVal.val('')
    $postUrlForm.hide()
    $isPostFormVisible = false;
  })

  //Hide/Show login sign up form
  $toggleLoginSignUpFormBtn.click(function(e){
    if($isLoginSignUpFormVisible) $loginSignUpForm.show()
     else $loginSignUpForm.hide()
      $isLoginSignUpFormVisible = !$isLoginSignUpFormVisible;
  })

  //login sign up toggle between tabs
  $loginSignUpTabs.on('click', function(e){
    $formLogin.toggleClass('active')
    $formSignUp.toggleClass('active')
  })

  // Login Sign up Form
  $loginSignUpForm.on('submit', function(e){
    var $email=  $('#email');
    var $password =  $('#password');

    e.preventDefault();

    $.ajax({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      url: loginSignUpURL(),
      data: JSON.stringify({
        email: $email.val(),
        password: $password.val()
      })
    })
    .then(function(data) {
      localStorage.setItem("auth_key", data.auth_token)
      auth_key = localStorage.getItem("auth_key")
      isLoggedin = true;
      getFavorites()
      $('.loggedIn').show()
      $('#loginSignUpBtn').text('logout')

    })
    .fail(err => $('#main').prepend($('<h4>', {text: '------- Please try again /Login failed ----------'})))

      $email.val('')
      $password.val('')
      $loginSignUpForm.hide()
      $isLoginSignUpFormVisible = false;
  })

 function getFavorites(){
    console.log(isLoggedin)
    if(isLoggedin){
      $.ajax({
              method: "GET",
              headers: {
                  "Authorization": auth_key
                },
              'url': 'https://hn-favorites.herokuapp.com/stories.json',
          })
          .then(function(data) {
            localStorage.setItem("favorites", JSON.stringify(data))
            favorites = data;
            $dataDisplay.children('li').each(function () {
                  this.append(`<a href="#" class="glyphicon glyphicon-star-empty loggedIn"> </a>`)
              });
            })
            .fail(err => $('#main').prepend($('<h4>', {text: '------- Please try again /Login 2----------'})))
    }
}
  //Select Favorite *STAR*
  $dataDisplay.on('click', '.glyphicon', function(e){
    $(e.target).toggleClass('glyphicon-star glyphicon-star-empty')
  })

  // Show only favorite
  // $topNavFavoriteBtn.on('click',function(e){
  //   var $starEmpty = $('.glyphicon-star-empty').parent();
  //   if(showFavorites) $starEmpty.hide()
  //    else $starEmpty.show()
  //     showFavorites = !showFavorites;
  // })

  //Add new data to DOM
  function newData(title, url, time, author, id){
    // console.log(title)
    $dataDisplay.append(
      `<li id=${id}>
        ${displayGliphicon()}
        ${title} ${createUrl(url)}
        ${isLoggedin ? '<p class= "pad-left">' : '<p>'} submitted ${time} by ${author}</p>
      </li>
      `)
  }

  function createUrl(url){
    var rmHttp= url.indexOf('//')+2;
    var urlShort = url.slice(rmHttp,url.indexOf('/', rmHttp) === -1 ? url.length: url.indexOf('/', rmHttp));
    return `<a href=" ${url}" target="_blank"> (${urlShort}) </a>`
  }

  function displayGliphicon(){
    if(isLoggedin) return '<a href="#" class="glyphicon glyphicon-star-empty loggedIn"> </a>'
      return '';
  }

  function loginSignUpURL(){
    return urls.favoritesLogin
  }
  // })


