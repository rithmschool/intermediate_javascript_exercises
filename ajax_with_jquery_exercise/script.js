$(function () {
    var $ol = $("ol");

    // login aside
    $(".login").on("click", function (e) {
        e.preventDefault();
        $("aside").toggle();
    });

    // login functionality
    $(".login-submit").on("click", function (e) {
        e.preventDefault();
        var $user = $(".email").val();
        var $pass = $(".password").val();
        $.post('https://hn-favorites.herokuapp.com/login', 
            { "email": $user, "password": $pass }
        ).then(function (res) {
            console.log(res);
            $(".login").text("logout");
        }).catch(function (res) {
            console.log("login failed");
        });
    });

    // signup functionality
    $(".signup-submit").on("click", function (e) {
        e.preventDefault();
        var $user = $(".email").val();
        var $pass = $(".password").val();
        $.post('https://hn-favorites.herokuapp.com/signup', 
            { "email": $user, "password": $pass }
        ).then(function (res) {
            console.log(res);
            $(".login").text("logout");
        }).catch(function (res) {
            console.log("signup failed");
        });
    });

    // populating ol with articles
    $.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(function (res) {
            for (var i = 0; i < 20; i++) {
                $.get(`https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`)
                    .then(function (res) {
                        //console.log(res);
                        var $partialUrl = (res.url.split(/\/\//)[1]).split(/\//)[0];

                        if ($partialUrl.match(/^www/)) { // if www. start, remove "www."
                            $partialUrl = $partialUrl.substring(4);
                        }

                        var $star = $("<span>").addClass("fa fa-star-o");
                        var $link = $("<a/>")
                            .attr("href", res.url)
                            .text(" " + res.title + " ");
                        var $linkTitle = $("<span>")
                            .addClass("link-title")
                            .append($link);
                        var $linkUrl = $("<span>")
                            .addClass("link-url")
                            .text("(" + $partialUrl + ")");
                        var $newLi = $("<li>")
                            .append($star)
                            .append($linkTitle)
                            .append($linkUrl);
                        $ol.append($newLi);
                    });
            }
        });

    // star functionality
    $ol.on("click", ".fa", function (e) {
        e.preventDefault();
        if ($(e.target).hasClass('fa-star-o')) {
            $(e.target).removeClass('fa-star-o');
            $(e.target).addClass('fa-star');
        } else {
            $(e.target).removeClass('fa-star');
            $(e.target).addClass('fa-star-o');
        }
    });

    // $(".favs").on("click", function (e) {
    //     e.preventDefault();
    //     if ($(".favs").text() === "all") {
    //         $(".favs").text("favorites");
    //         $(".fa-star-o").parent().toggle(true);
    //     } else {
    //         $(".favs").text("all");
    //         $(".fa-star-o").parent().toggle(false);
    //     }
    // });
});