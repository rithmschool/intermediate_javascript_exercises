// var topStories = [];
// var myFavs = [];
$(function () {
    // checking if logged in
    var storage = localStorage.getItem("auth_token") || "";
    if (storage) {
        $(".login").text("logout");
    }

    var $ol = $("ol");

    // login aside
    $(".login").on("click", function (e) {
        e.preventDefault();
        $("aside").toggle();
        // logout functionality
        if ($(".login").text() === "logout") {
            $(".login").text("login/signup");
            localStorage.clear();
            $("aside").toggle();
        }
    });

    // login functionality
    $(".login-submit").on("click", function (e) {
        submitClick(e);
    });

    // signup functionality
    $(".signup-submit").on("click", function (e) {
        submitClick(e);
    });

    function submitClick(event) {
        event.preventDefault();
        var $user = $(".email").val();
        var $pass = $(".password").val();
        var url = 'https://hn-favorites.herokuapp.com/login';
        if ($(event.target) === $(".login-submit")) {
            url = 'https://hn-favorites.herokuapp.com/signup';
        }
        $.post(url,
            { "email": $user, "password": $pass }
        ).then(function (res) {
            $(".login-error").text("");
            $(".signup-error").text("");
            $(".login").text("logout");
            $("aside").toggle();
            // console.log(res);
            localStorage.setItem("auth_token", res.auth_token);
        }).catch(function (res) {
            if ($(event.target).val() === "login") {
                $(".login-error").text("login failed");
            } else {
                $(".signup-error").text("signup failed");
            }
        });
    }

    // populating ol with articles
    $.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(function (res) {
            for (var i = 0; i < 25; i++) {
                $.get(`https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`)
                    .then(function (res) {
                        //console.log(res);

                        var $resBy = $("<span>")
                            .append(res.by)
                            .toggle(false);
                        var $star = $("<span>")
                            .addClass("fa fa-star-o");
                        var $link = $("<a/>")
                            .attr("href", res.url)
                            .text(" " + res.title + " ");
                        var $linkTitle = $("<span>")
                            .addClass("link-title")
                            .append($link);
                        var $partialUrl = (res.url.split(/\/\//)[1]).split(/\//)[0];

                        if ($partialUrl.match(/^www/)) { // if www. start, remove "www."
                            $partialUrl = $partialUrl.substring(4);
                        }
                        var $pLink = $("<a/>")
                            .attr("href", "https://" + $partialUrl)
                            .text("(" + $partialUrl + ")");
                        var $linkUrl = $("<span>")
                            .addClass("link-url")
                            .append($pLink);
                        var $newLi = $("<li>")
                            .addClass(res.id.toString())
                            .append($star)
                            .append($linkTitle)
                            .append($linkUrl)
                            .append($resBy);
                        $ol.append($newLi);
                        //var article = res;
                        //topStories.push(article);
                    });
            }
        });

    // star functionality
    $ol.on("click", ".fa", function (e) {
        e.preventDefault();
        if ($(".login").text() === "logout") { // make sure logged in
            $(e.target).toggleClass('fa-star-o');
            $(e.target).toggleClass('fa-star');
            $.ajax({
                method: "POST",
                url: "https://hn-favorites.herokuapp.com/stories.json",
                contentType: "application/json",
                dataType: "json",
                headers: {
                    Authorization: storage,
                },
                data: JSON.stringify({
                    hacker_news_story: {
                        by: $(e.target).next().next().next().text(),
                        story_id: $(e.target).parent().attr('class'),
                        title: $(e.target).next().text().slice(1, -1),
                        url: $(e.target).next().children().attr('href')
                    }
                })
            }).then(function (res) {
                console.log(res);
                // what next? -> saving the data?
                //myFavs.push(res); 
            }).catch(function (res) {
                console.log("a mistake was made in POST fav");
            });
        }
    });

    $(".favs").on("click", function (e) {
        e.preventDefault();
        if ($(".favs").text() === "all" && $(".login").text() === "logout") { // showing all
            $(".favs").text("favorites");
            $(".fa-star-o").parent().toggle(true);
        } else if ($(".login").text() === "logout") { // showing favs
            $(".favs").text("all");
            $(".fa-star-o").parent().toggle(false);
            $.ajax({
                method: "GET",
                url: "https://hn-favorites.herokuapp.com/stories.json",
                headers: {
                    Authorization: storage,
                }
            }).then(function (res) {
                console.log(res); // an array of objects
                // $ol.empty(); // NO?s
                for (var key in res){
                    // console.log(res[key].by);
                    // console.log(res[key].story_id);
                    // console.log(res[key].title);
                    // console.log(res[key].url);
                     var $resBy = $("<span>")
                            .append(res[key].by)
                            .toggle(false);
                        var $star = $("<span>")
                            .addClass("fa fa-star");
                        var $link = $("<a/>")
                            .attr("href", res[key].url)
                            .text(" " + res[key].title + " ");
                        var $linkTitle = $("<span>")
                            .addClass("link-title")
                            .append($link);
                        var $partialUrl = (res[key].url.split(/\/\//)[1]).split(/\//)[0];

                        if ($partialUrl.match(/^www/)) { // if www. start, remove "www."
                            $partialUrl = $partialUrl.substring(4);
                        }
                        var $pLink = $("<a/>")
                            .attr("href", "https://" + $partialUrl)
                            .text("(" + $partialUrl + ")");
                        var $linkUrl = $("<span>")
                            .addClass("link-url")
                            .append($pLink);
                        var $newLi = $("<li>")
                            .addClass(res[key].id.toString())
                            .append($star)
                            .append($linkTitle)
                            .append($linkUrl)
                            .append($resBy);
                        $ol.append($newLi);
                }
            }).catch(function (res) {
                console.log("a mistake was made in GET fav");
            });
        }
    });
});