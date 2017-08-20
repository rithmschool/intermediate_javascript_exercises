"use strict";
//////EVENT LISTENERS //////

// $(function(){

//On  page refresh validate auth_key by getting favorites then last viewed page or top stories
  checkIfLoggedIn()


//// Top nav Login/Sign Up and  Sign out BUTTONS////
  // Signout hide, reset
  $('#signOutBtn').click(function(){
    var gliphicons = $('.glyphicon')

    //reset to log out display
    $loggedIn.toggleClass('display-hide')
    gliphicons.removeClass("glyphicon-star-empty")
    gliphicons.removeClass("glyphicon-star")

    //clear stored data
    localStorage.removeItem('auth_key')
    auth_key = false;
    favoriteStoryIds = {};

    if(currentStory === 'favorites'){
      currentStory = 'top'
      displayStories()
    }


  })

  // Hide/Show login form
  $navLoginBtn.click(function(){
      $errorMsgLoc.text('')
      $mainLoginForm.toggleClass('display-hide')

  })


//// MAIN  Login / Sign up FORM ////
  //Toggle between login and sign up.
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

    postData('favorites', $loginSignup , //login or signup request
      function(result){

          if(result.status > 299){ //If error, display error message.
            $errorMsgLoc.text(errorMsgs.login)
          } else {
            //store auth key
            localStorage.setItem("auth_key", result.auth_token)
            auth_key = result.auth_token

            //get favorites
            if($loginSignup === 'login' ){
              getData('favorites', 'stories', function(result){ // get favories
                  getFavoriteStoryIds(result) //Store favorites
              })
            }
            $loggedIn.toggleClass('display-hide') // show logged in content (link to favorites, log out button)
            displayGliphicon('justLogged') // display star gliphicon
            $errorMsgLoc.text('') //clear error message
            $mainLoginForm.toggleClass('display-hide') // hide login form
          }
      }
      ,$email.val(), $password.val())

    //Clear email and password form.
    $email.val('')
    $password.val('')
  })

//// END MAIN  Login / Sign up FORM ////


/// TOP NAV BUTTONS ////
  $navBtns.click(function(e){
    currentStory = $(e.target).attr('id');
    localStorage.setItem("current_story", currentStory)

    $dataDisplay.empty()

    if(currentStory === 'favorites'){
      favoritesList.forEach(story =>{
        newData(story.title, story.url, story.created, story.by, story.story_id)
      })
    } else {
      checkIfLoggedIn()
    }
  })
/// END TOP NAV BUTTONS ////

///Star Buttons - select favorites ///
  $dataDisplay.on('click', '.glyphicon', function(e){
    var location = $(e.target);
    var locationParent = location.parent().children();
    var storyId = location.parent().attr('id').trim()

    e.preventDefault();

    //Add favorite
    if($(e.target).hasClass('glyphicon-star-empty')){
       //Fav object. content scrapped from HTML
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
              //Returning 'undefined' should return ID. Must refresh favorites to get id,
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
    //Remove favorite
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

///End Star Buttons - select favorites ///



// })




