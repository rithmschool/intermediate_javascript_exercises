 "use strict";

 //URLs//
  //NOTE!!!
  //Keys must be in the follow format 'name + type' eg (top + Stories), must be camel cased.
  //See Ajax getData Url (name + type)
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

  //Error messages//
  var $errorMsgLoc = $('.error');  // Error message placement in HTML

  var errorMsgs ={
    favoritesNone: "No favorites selected.",

    //Ajax error messages
    favorites : "Could not load favorites at this time. Please try logging in again.",
    login : "Invalid username or password. Please try again.",
    stories: "Could not load stories. Please check your internet connection or try back later."
  }

//Content Display Settings//
  var numberGetStories = 20; //number of request made
  var lastStoryDisplayed = 0; //starting number

//Buttons//
  var $navLoginBtn = $('#loginSignUpBtn');
  var $mainLoginForm = $('#loginSignUpForm');
  var $dataDisplay = $('ol');
  var $navBtns = $('.navbar-nav');
  var $signOutBtn = $('#signOutBtn');
  var $loggedInBtn = $('#loginSignUpBtn');

  //Login Sign Up Form Buttons
  var $loginSignUpTabs = $('.nav-tabs');
  var $formLogin =  $('#formLogin');
  var $formSignUp =  $('#formSignUp');

//Stored Items//
  var favoritesList;
  var favoriteStoryIds;
  var auth_key = localStorage.getItem("auth_key");
  var currentStory = localStorage.getItem("current_story") || 'top';

  //Hide Show Toggle  logged in content
  var $loggedIn =  $('.loggedIn');
