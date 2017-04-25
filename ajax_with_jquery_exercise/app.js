$(function() {
    var BASE_URL = "https://hacker-news.firebaseio.com/v0";
    var FAVORITES_BASE_URL = "https://hn-favorites.herokuapp.com";






    $("#submit").click(function() {
        if (!localStorage.getItem("token")) {
            $("#login-forms").slideToggle();
            $("#submit").toggleClass("white");
        } else {
            localStorage.removeItem('token');
            $("#submit").text("Login ");
            $("li > span").removeClass("glyphicon glyphicon-star-empty glyphicon-star");
        }
    })

    $("ol").on('click', '.glyphicon-star-empty', function(event) {
        let target = $(event.target);
        let creator = target.next().next().next().next().text().split(' ')[1];
        let story_id = target.next().attr('id');
        let title = target.next().text();
        let urlFavorite = target.next().attr('href');
        $.ajax({
            url: `${FAVORITES_BASE_URL}/stories.json`,
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem('token')
            },
            data: JSON.stringify({
                "hacker_news_story": {
                    "by": creator,
                    "story_id": story_id,
                    "title": title,
                    "url": urlFavorite
                }
            }),
            dataType: "json",
            contentType: "application/json"
        }).then(function(d) {
            target.toggleClass('glyphicon-star-empty glyphicon-star');
            target.attr('id', d.id);
        })

    })


    $("ol").on('click', '.glyphicon-star', function(event) {
        let target = $(event.target);
        let favorites_id = target.attr('id');
        $.ajax({
            url: `${FAVORITES_BASE_URL}/stories/${favorites_id}.json`,
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }).then(function() {
            target.toggleClass('glyphicon-star-empty glyphicon-star');
            target.removeAttr('id');
        })

    })





    $.get(`${BASE_URL}/topstories.json`)
        .then(function(story_ids) {
            var promises = story_ids.slice(0, 80)
                .map(id => $.get(`${BASE_URL}/item/${id}.json`));
            return Promise.all(promises);
        })
        .then(function(stories) {
            stories.forEach(story => {
                let $newLink = $("<a>", { href: story.url });
                let host = $newLink.prop('hostname').replace(/^(https?:\/\/)?(www\.)?/, '');
                $("ol").append(`<li><span></span><a href=${story.url} target="_blank" id="${story.id}">${story.title}</a><small> (${host})</small><br><small>by ${story.by} </small><small><a href="http://news.ycombinator.com/item?id=${story.id}">| comments</a></small></li>`);
                if (localStorage.getItem("token")) {
                    $("#submit").text("Logout ");
                    $("li > span").addClass("glyphicon glyphicon-star-empty");
                }
            });


        })


    $("#createbutton").on('click', function(e) {
        e.preventDefault();
        $.post({
            url: `${FAVORITES_BASE_URL}/signup`,
            data: {
                email: $("#email2").val(),
                password: $("#password2").val()
            }
        }).then(function(data) {
            localStorage.setItem('token', data.auth_token);
            $("#login-forms").slideToggle();
            $("#submit").text("Logout ");
            $("#submit").toggleClass("white");
            $("li > span").addClass("glyphicon glyphicon-star-empty");

        });
    })

    $("#loginbutton").on('click', function(e) {
        e.preventDefault();
        $.post({
            url: `${FAVORITES_BASE_URL}/login`,
            data: {
                email: $("#email").val(),
                password: $("#password").val()
            }
        }).then(function(data) {
            localStorage.setItem('token', data.auth_token);
            $("#login-forms").slideToggle();
            $("#submit").text("Logout ");
            $("#submit").toggleClass("white");
            $("li > span").addClass("glyphicon glyphicon-star-empty");


        });
    })








    // var BASE_URL = "https://hacker-news.firebaseio.com/v0";

    //    $.get(`${BASE_URL}/topstories.json?print=pretty`) 
    //    .then(function(story_id) {
    //    	var promises = story_id.slice(0,25).map(id => $.get(`${BASE_URL}/item/${id}.json?print=pretty`));
    //    	return Promise.all(promises);
    //    })	
    //    .then(function(stories){

    //    	stories.forEach(story => $("ol").append(`<li>${d.title}</li>`))


    //    	// for (var i = 0; i < 25; i++)
    //     //    $.get(`${BASE_URL}/item/${story_id[i]}.json?print=pretty`, function(d) {
    //     //    $("ol").append(`<li>${d.title}</li>`)


    //    })



})
