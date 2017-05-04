$(function(){
    var $submitLogin = $('.submitLogin');
    var $submitSignup = $('.submitSignup');
    var stories = [];
    var storiesListObj = {};
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
                storiesListObj[res.id] = res;
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
            return $.ajax({
                url:'https://hn-favorites.herokuapp.com/stories.json',
                method: 'get', 
                headers: { Authorization: authToken }
            })
        })
        .then(function(res) {
            for(var i=0; i<res.length; i++) {
                if(res[i].story_id in storiesListObj) {
                    var $targetA = $(`li .${res[i].story_id}`)
                    $targetA.siblings().removeClass()
                    $targetA.siblings().addClass('glyphicon glyphicon-star')
                    $targetA.siblings().data('deleteID', res[i].id)
                }
            }
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
                        by: storiesListObj[$(e.target).next().attr('class')].by, 
                        story_id: storiesListObj[$(e.target).next().attr('class')].id,
                        title: storiesListObj[$(e.target).next().attr('class')].title,
                        url: storiesListObj[$(e.target).next().attr('class')].url
                    }
                })
            }).then(function(res) {
                $(e.target).data('deleteID', res.id)
                debugger
                $(e.target).attr('class', option)
            })
        } else {
            /*  if($(e.target).next().attr('class') in storiesObjsList) {  */
                var deleteID = $(e.target).data('deleteID')               
                $.ajax({
                    url: `https://hn-favorites.herokuapp.com/stories/${deleteID}.json`,
                    method: 'delete',
                    contentType: 'application/json',
                    dataType: 'json',
                    headers: { Authorization: authToken },
                }).then(function(res) {
                    $(e.target).attr('class', option);
                })
           
        }


    })

})






