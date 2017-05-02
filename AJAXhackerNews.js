$(function(){
    var $login = $('#login');
    var $signup = $('#signup');
    var stories = [];
    var $topStories = $('.topStories')
    var $title = $('title');

    $.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(function(res){
        stories = res.slice(0, 20);
        console.log(stories);
    }).then(function(res) {
        $.get(`https://hacker-news.firebaseio.com/v0/item/${stories[0]}/title.json`).then(function(res) {
            var newLi = $('<li>').text(res);
            $topStories.append(newLi)    
            })    
    })

    



})



    // var $topStories = $('#topStories');
    // var stories = [];

    // $.get('https://hacker-news.firebaseio.com/v0/item')
    // .then(function(res){
    //     stories = stories.concat(res.results);
    // })

    // $topStories.append(stories)
