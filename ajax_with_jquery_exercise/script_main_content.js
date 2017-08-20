"use strict"


function getFavoriteStoryIds(stories){
  favoritesList = stories
  favoriteStoryIds = stories.reduce((acc, story) => {
    acc[story.story_id] = story.id;
    return acc
  },{})
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
  url = url || 'http://rithmschool.com'
  var rmHttp= url.indexOf('//')+2;
  var urlShort = url.slice(rmHttp,url.indexOf('/', rmHttp) === -1 ? url.length: url.indexOf('/', rmHttp));
  return `<a href=" ${url}" target="_blank"> (${urlShort}) </a>`
}

function displayGliphicon(input){

    if(input === 'justLogged'){
      $('ol li').each(function(){
        var location = $(this).children().eq(0)
        if(favoriteStoryIds[$(this).attr('id')]){
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