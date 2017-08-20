"use strict";

function getFavoriteStoryIds(stories){
  //save favorites
  favoritesList = stories;

  //object with key as Hacker News Story ID and value as Favorite ID
  //key to look up gliphicons (stars)
  //value to delete favorites
  favoriteStoryIds = stories.reduce((acc, story) => {
    acc[story.story_id] = story.id;
    return acc
  },{});
}


function checkIfLoggedIn(){
    if(auth_key === 'undefined' || !auth_key){
      auth_key = false
      displayStories()
      return
    }

    getData('favorites', 'stories', function(result){
      if(result.status > 299){
        auth_key = false
        if($loggedInBtn.hasClass('display-hide')){
          $loggedIn.toggleClass('display-hide')
        }
        displayStories()
      } else {
        getFavoriteStoryIds(result)
          if($signOutBtn.hasClass('display-hide')){
            $loggedIn.toggleClass('display-hide')
          }
        displayStories()
      }
    })
}


function displayStories(){
  getData(currentStory, 'stories', function(stories){
    var selectStoryIds = stories.slice(lastStoryDisplayed, lastStoryDisplayed+numberGetStories)

    selectStoryIds.map(story =>
          getData('item', 'stories', function(storyDetail){
            newData(storyDetail.title, storyDetail.url || 'http://rithmschool.com', storyDetail.time, storyDetail.by, storyDetail.id)
          }, story)
      )
  })
}



function newData(title, url, time, author, id){
  $dataDisplay.append(
    `<li id=${id}>
      ${displayGliphicon(id)}
      <span>${title}</span> ${createUrl(url)}
      <p>submitted ${time} by <span> ${author} </span></p>
    </li>
    `)
}

function createUrl(url){
  url = url || 'http://rithmschool.com' //default URL when URL is not provided

  //short URL
    // Example - Full URL 'http://google.com' - Short URL - 'google.com'
  var rmHttp= url.indexOf('//')+2;
  var urlShort = url.slice(rmHttp,url.indexOf('/', rmHttp) === -1 ? url.length: url.indexOf('/', rmHttp));

  return `<a href=" ${url}" target="_blank"> (${urlShort}) </a>`
}

function displayGliphicon(input){
    if(input === 'justLogged'){
      $('ol li').each(function(){
        var location = $(this).children().eq(0)
        if(!jQuery.isEmptyObject(favoriteStoryIds) && favoriteStoryIds[$(this).attr('id')]){
          location.addClass('glyphicon-star')
        } else {
          location.addClass('glyphicon-star-empty')
        }
      })
      return
    }

    if(auth_key){
      if(favoriteStoryIds[input]){
        return'<a href="#" class="glyphicon glyphicon-star"> </a> '
      } else {
        return'<a href="#" class="glyphicon glyphicon-star-empty"> </a> '
      }
    }

    return `<a href="#" class="glyphicon"></a>`;

}