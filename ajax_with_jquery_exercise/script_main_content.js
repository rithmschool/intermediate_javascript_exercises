"use strict"


function getFavoriteStoryIds(stories){
  favoriteStoryIds = stories.reduce((acc, story) => {
    acc[story.story_id] = story.id
    return acc
  },{})
}

function newData(title, url, time, author, id){
  $dataDisplay.append(
    `<li id=${id}>
      ${displayGliphicon(id)}
      ${title} ${createUrl(url)}
      <p>submitted ${time} by ${author}</p>
    </li>
    `)
}

function createUrl(url){
  var rmHttp= url.indexOf('//')+2;
  var urlShort = url.slice(rmHttp,url.indexOf('/', rmHttp) === -1 ? url.length: url.indexOf('/', rmHttp));
  return `<a href=" ${url}" target="_blank"> (${urlShort}) </a>`
}

function displayGliphicon(input){

    if(input === 'justLogged'){
      for(key in favoriteStoryIds){

        $('.glyphicon').removeClass('glyphicon-star-empty')
        $('.glyphicon').addClass('glyphicon-star')
      }
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