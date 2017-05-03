$(function(){
    var $submitLogin = $('.submitLogin');
    var $submitSignup = $('.submitSignup');
    var stories = [];
    var storiesObjsList = {};
    var $topStories = $('.topStories')
    var $title = $('title');
    var authToken;
    var deleteID;

    $.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(function(res){
        stories = res.slice(0, 20);
        // console.log(stories);
    })
    .then(function(res) {
        var i = 0;
        while(i < 20) {
            $.get(`https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json`)
            .then(function(res) {
                var $newLi = $('<li>').text(res.title);
                var $newA = $('<a>', {
                    href: res.url,
                    text: res.url,
                    class: res.id
                });
                $newLi.append($newA);
                $topStories.append($newLi);
                storiesObjsList[res.id] = res;
            })  

        i++
        }
    })


    $submitLogin.on("click", function(e){
        e.preventDefault();
        // if() {
        //     WHEN NOT CORRECT INPUT 
        // }
        var $usernameLogin = $('.usernameLogin').val();
        var $passLogin = $('.passLogin').val();
        
        $.ajax({
            method: 'post',
            url: 'https://hn-favorites.herokuapp.com/login',
            data: {
                email: $usernameLogin,
                password: $passLogin
            }})
        .then(function(res){
            authToken = res.auth_token;

            $('#login').hide().trigger('reset');
            $('#signup').hide();

            $('li').map(function(i, el) {
                return $(el).prepend($('<span>', {class:'glyphicon glyphicon-star-empty'}))
            })

            // $('li').map(function(i, el) {
            //     // $.get(`https://hacker-news.firebaseio.com/v0/item/${$(el:last-child).attr('class')}.json` )
            $.get('https://hn-favorites.herokuapp.com/stories.json',
                { Authorization: authToken } )
            .then(function(res) {
                var starredList = [];
                for(var i=0; i<res.length; i++) {
                    if(storiesObjsList.includes(res[i].id)) {
                        var $targetLi = $('li').attr(res[i].id)
                        $targetLi.children().first().removeClass()
                        $targetLi.children().first().addClass('glyphicon glyphicon-star')  
                    }
                }
            })
        })
    })   



    $submitSignup.on("click", function(e){
        e.preventDefault();
        // if() {
        //     WHEN NOT CORRECT INPUT 
        // }
        var $usernameSignup = $('.usernameSignup').val();
        var $passSignup = $('.passSignup').val();
        
        $.ajax({
            method: 'post',
            url: 'https://hn-favorites.herokuapp.com/signup',
            data: {
                email: $usernameSignup,
                password: $passSignup
            }})
        .then(function(res){
            authToken = res.auth_token;

            $('#login').hide().trigger('reset');
            $('#signup').hide();

            $('li').map(function(i, el) {
                return $(el).prepend($('<span>', {class:'glyphicon glyphicon-star-empty'}))
            })
        })   
    })


    // $topStories.on('click', 'span', function(e){
    //     e.preventDefault();
    //     var option = $(e.target).hasClass('glyphicon-star') ?
    //          'glyphicon glyphicon-star-empty' :
    //          'glyphicon glyphicon-star';

    //     if(option === 'glyphicon glyphicon-star') {
    //         localStorage.setItem($(e.target).parent().text(), $(e.target).next().text())
    //     } else {
    //         if($(e.target).parent().text() in localStorage) {
    //             localStorage.removeItem($(e.target).parent().text())
    //         }
    //     }

    //     $(e.target).attr('class', option)
    // })



    $topStories.on('click', 'span', function(e){
        e.preventDefault();

        var option = $(e.target).hasClass('glyphicon-star') ?
             'glyphicon glyphicon-star-empty' :
             'glyphicon glyphicon-star';

        if(option === 'glyphicon glyphicon-star') {
            $.ajax({
                url: 'https://hn-favorites.herokuapp.com/stories.json',
                method: 'post',
                contentType: 'application/json',
                dataType: 'json',
                headers: { Authorization: authToken },
                data: JSON.stringify({ 
                    hacker_news_story: {
                        by: storiesObjsList[$(e.target).next().attr('class')].by, 
                        story_id: storiesObjsList[$(e.target).next().attr('class')].id,
                        title: storiesObjsList[$(e.target).next().attr('class')].title,
                        url: storiesObjsList[$(e.target).next().attr('class')].url
                    }
                })
            }).then(function(res) {
                deleteID = res;
            })
        } else {
            /*  if($(e.target).next().attr('class') in storiesObjsList) {  */
                $.ajax({
                    url: `https://hn-favorites.herokuapp.com/stories/${deleteID}.json`,
                    method: 'post',
                    contentType: 'application/json',
                    dataType: 'json',
                    headers: { Authorization: authToken },
                })
           /* } */
        }

        $(e.target).attr('class', option)
    })

})






