$(function(){
    var $submitLogin = $('.submitLogin');
    var $submitSignup = $('.submitSignup');
    var stories = [];
    var storiesObjsList = {};
    var $topStories = $('.topStories')
    var $title = $('title');
    var authToken;

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
                }).addClass(res.id);
                $newLi.append($newA);
                $topStories.append($newLi);
                storiesObjsList[res.id] = 'res';
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

            $('li').map(function(i, el) {
                // return
                if($(el).text() in localStorage) {
                    $(el).children().first().removeClass()
                    $(el).children().first().addClass('glyphicon glyphicon-star')
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
                method: 'post',
                url: 'https://hn-favorites.herokuapp.com/stories.json',
                headers: { Authorization: authToken },
                data: JSON.stringify({ 
                    hacker_news_story: {
                        by: storiesObjsList[$(e.target).next().class].by, 
                        story_id: storiesObjsList[$(e.target).next().class].id,
                        title: storiesObjsList[$(e.target).next().class].title,
                        url: storiesObjsList[$(e.target).next().class].url
                    }
                })
            })
        } else {
            if($(e.target).next().class in storiesObjsList) {
                $.ajax({
                    method: 'post',
                    url: 'https://hn-favorites.herokuapp.com/stories/${$(e.target).next().class}.json',
                    headers: { Authorization: authToken },
                    data: JSON.stringify({ 
                        hacker_news_story: {
                            by: storiesObjsList[$(e.target).next().class].by, 
                            story_id: storiesObjsList[$(e.target).next().class].id,
                            title: storiesObjsList[$(e.target).next().class].title,
                            url: storiesObjsList[$(e.target).next().class].url
                        }
                    })
                })
            }
        }

        $(e.target).attr('class', option)
    })


})


