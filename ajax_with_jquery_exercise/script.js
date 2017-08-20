"use strict"

// $(function(){

  //URLs
   var urls = {
    topStories : 'https://hacker-news.firebaseio.com/v0/topstories.json',
    newStories: 'https://hacker-news.firebaseio.com/v0/newstories.json',
    bestStories: 'https://hacker-news.firebaseio.com/v0/beststories.json',
    itemStories: 'https://hacker-news.firebaseio.com/v0/item/',      //  id + .json  --> get detail
    favoritesStories :  'https://hn-favorites.herokuapp.com/stories.json',
    favoritesAdd :  'https://hn-favorites.herokuapp.com/stories.json',
    favoritesDelete :  'https://hn-favorites.herokuapp.com/stories/',  // id + .json  --> delete + ID.json
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
  var numberGetStories = 20;
  var lastStoryDisplayed = 0;

//Buttons
  var $navLoginBtn = $('#loginSignUpBtn');
  var $mainLoginForm = $('#loginSignUpForm');
  var $dataDisplay = $('ol');
  var $navBtns = $('ul');

  //Login Sign Up Form Buttons
  var $loginSignUpTabs = $('.nav-tabs');
  var $formLogin =  $('#formLogin');
  var $formSignUp =  $('#formSignUp');

//Stored Items
  var favoritesList;
  var favoriteStoryIds;
  var auth_key = localStorage.getItem("auth_key");
  // var auth_key = false;
  var currentStory = localStorage.getItem("current_story") || 'top';
  var $errorMsgLoc = $('.error');

  //On  page refresh validate auth_key by getting favorites then generate page
  (function (){
      if(auth_key === 'undefined' || !auth_key){
        auth_key = false
        displayStories()
        return
      }

      getData('favorites', 'stories', function(result){
        if(result.status > 299){
          auth_key = false
          displayStories()
        } else {
          getFavoriteStoryIds(result)
          $('.loggedIn').toggleClass('display-hide')
          displayStories()
        }
      })
  })();

  function displayStories(type=currentStory){
    getData(type, 'stories', function(stories){
      var selectStoryIds = stories.slice(lastStoryDisplayed, lastStoryDisplayed+numberGetStories)

      selectStoryIds.map(story =>
            getData('item', 'stories', function(storyDetail){
              newData(storyDetail.title, storyDetail.url || 'http://rithmschool.com', storyDetail.time, storyDetail.by, storyDetail.id)
            }, story)
        )
    })
  }


// Signout hide, rest
  $('#signOutBtn').click(function(){
    var location = $('.glyphicon')
    $('.loggedIn').toggleClass('display-hide')
    localStorage.removeItem('auth_key')
    auth_key = false;
    favoriteStoryIds = {};

    location.removeClass("glyphicon-star-empty")
    location.removeClass("glyphicon-star")
  })

  // Hide/Show login form
  $navLoginBtn.click(function(){
      $errorMsgLoc.text('')
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
            $errorMsgLoc.text(errorMsgs.login)
          } else {
            localStorage.setItem("auth_key", result.auth_token)
            auth_key = result.auth_token

            getData('favorites', 'stories', function(result){
                getFavoriteStoryIds(result)
                $('.loggedIn').toggleClass('display-hide')
                displayGliphicon('justLogged')
                $errorMsgLoc.text('')
                $mainLoginForm.toggleClass('display-hide')
            })
          }
      }
      ,$email.val(), $password.val())

    //Reset form
    $email.val('')
    $password.val('')
  })


  $navBtns.click(function(e){
    currentStory = $(e.target).attr('id');

    $dataDisplay.empty()

    if(currentStory === 'favorites'){
      favoritesList.forEach(story =>{
        newData(story.title, story.url, story.created, story.by, story.story_id)
      })

    } else {
      if(auth_key === 'undefined' || !auth_key){
        auth_key = false
        displayStories(currentStory)
        return
      }

      getData('favorites', 'stories', function(result){
        if(result.status > 299){
          auth_key = false
          displayStories(currentStory)
          $('.loggedIn').toggleClass('display-hide')
        } else {
          getFavoriteStoryIds(result)
          displayStories(currentStory)
        }
      })

      localStorage.setItem("current_story", currentStory)
    }


  })

  //Select Favorite *STAR*
  $dataDisplay.on('click', '.glyphicon', function(e){
    var location = $(e.target);
    var locationParent = location.parent().children();
    var storyId = location.parent().attr('id').trim()

    e.preventDefault();

    if($(e.target).hasClass('glyphicon-star-empty')){
       var addFav = {
        hacker_news_story:{
            by: locationParent.eq(3).children().text().trim(),
            story_id: storyId,
            title: locationParent.eq(1).text().trim(),
            url: locationParent.eq(2).attr('href').trim()
          }
        }
        postData('favorites', 'add', function(result){
            if(result.status > 299){
              $errorMsgLoc.text(errorMsgs.favorites)
            } else {
              location.toggleClass('glyphicon-star-empty glyphicon-star')
              //Success full add does not return ID. Must refresh favorites to get id,
                getData('favorites', 'stories', function(result){
                if(result.status > 299){
                  auth_key = false
                } else {
                  getFavoriteStoryIds(result)
                }
              })
            }
      }, addFav)
    } else {
        deleteData('favorites', 'delete', function(result){
            if(result.status > 299){
              $errorMsgLoc.text(errorMsgs.favorites)
            } else {
              location.toggleClass('glyphicon-star-empty glyphicon-star')
              if(currentStory === 'favorites'){
                $('#'+ storyId).remove()
              }
            }
        }, favoriteStoryIds[location.parent().attr('id')])
    }
  })



  // })


