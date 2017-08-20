"use strict"

// $(function(){

  //URLs
   var urls = {
    topStories : 'https://hacker-news.firebaseio.com/v0/topstories.json',
    newsStories: 'https://hacker-news.firebaseio.com/v0/newstories.json',
    bestStories: 'https://hacker-news.firebaseio.com/v0/beststories.json',
    itemStories: 'https://hacker-news.firebaseio.com/v0/item/',      //  id + .json  --> get detail
    favoritesStories :  'https://hn-favorites.herokuapp.com/stories.json',
    favoritesDelete :  'https://hn-favorites.herokuapp.com/stories',  // id + .json  --> delete + ID.json
    favoritesLogin: 'https://hn-favorites.herokuapp.com/login',
    favoritesSignup: 'https://hn-favorites.herokuapp.com/signup'
  }

  //Error messages
  var errorMsgs ={
    //Ajax error messages
    favorites : "Could not load favorites at this time. Please try logging in again.",
    login : "Invalid username or password. Please try again.",
    stories: "Could not load stories. Please check your internet connection or try back later."
  }

//Content Display Settings
  var numberGetStories = 5;
  var lastStoryDisplayed = 0;

//Buttons
  var $postUrlForm = $('#newPost');
  var $navLoginBtn = $('#loginSignUpBtn');
  var $mainLoginForm = $('#loginSignUpForm');
  var $dataDisplay = $('ol');

  //Login Sign Up Form Buttons
  var $loginSignUpTabs = $('.nav-tabs');
  var $formLogin =  $('#formLogin');
  var $formSignUp =  $('#formSignUp');

//Stored Items
  var favorites;
  var favoriteStoryIds;
  var auth_key = localStorage.getItem("auth_key");
  // var auth_key = false;
  var currentStory = localStorage.getItem("current_story") || 'top';


  //On  page refresh validate auth_key by getting favorites then generate page
  (function (){
      if(auth_key === 'undefined' || !auth_key){
        auth_key = false
        onRefresh()
        return
      }

      getData('favorites', 'stories', function(result){
        if(result.status > 299){
          auth_key = false
          onRefresh()
        } else {
          getFavoriteStoryIds(result)
          $('.loggedIn').toggleClass('display-hide')
          onRefresh()
        }
      })
  })();

  function onRefresh(){
    getData(currentStory, 'stories', function(stories){
      var selectStoryIds = stories.slice(lastStoryDisplayed, lastStoryDisplayed+numberGetStories)

      selectStoryIds.map(story =>
            getData('item', 'stories', function(storyDetail){
              newData(storyDetail.title, storyDetail.url || 'http://rithmschool.com', storyDetail.time, storyDetail.by, storyDetail.id)
            }, story)
        )
    })
  }


// Signout hide
  $('#signOutBtn').click(function(){
    $('.loggedIn').toggleClass('display-hide')
    localStorage.removeItem('auth_key')
    auth_key = false;
    favoriteStoryIds = {};
  })

  // Hide/Show login form
  $navLoginBtn.click(function(){
      $mainLoginForm.toggleClass('display-hide')
  })

  //login sign up toggle between tabs
  $loginSignUpTabs.on('click', function(){
    $formLogin.toggleClass('active')
    $formSignUp.toggleClass('active')
  })

  // Login Sign up Form
  $mainLoginForm.on('submit', function(e){
    var $email=  $('#email');
    var $password =  $('#password');
    var $loginSignup = $('.active').text() === 'login'? 'login' : 'signup';

    e.preventDefault();

    postData('favorites', $loginSignup ,
      function(result){
          if(result.status > 299){
            $('.error').text(errorMsgs.login)
          } else {
            localStorage.setItem("auth_key", result.auth_token)
            auth_key = result.auth_token

            getData('favorites', 'stories', function(result){
                getFavoriteStoryIds(result)
                $('.loggedIn').toggleClass('display-hide')
                displayGliphicon('justLogged')
                $mainLoginForm.toggleClass('display-hide')
            })

          }
      }
      ,$email.val(), $password.val())

    $email.val('')
    $password.val('')
  })


  //Select Favorite *STAR*
  $dataDisplay.on('click', '.glyphicon', function(e){
    $(e.target).toggleClass('glyphicon-star glyphicon-star-empty')
  })



  // })


