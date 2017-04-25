$(document).ready(function () {
    let $title;
    let $url;
    //Add List Item
    $('button').click(function (e) {
        e.preventDefault();
        $title = $('#title-input').val();
        $url = $('#url-input').val();

        //Validate URL and Add Item to List
        if ($url.indexOf('www') !== -1 && $url.indexOf('.com') !== -1) {

            let $domainIndex = $url.indexOf('.');
            let $domain = $url.slice($domainIndex + 1);


            $('#links-ol').append(`<li> <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><a href = ${$url} target="_blank"><span class="title-span"> ${$title} </a></span><span class="domain-span">( ${$domain} )</span></li>`);


            $('#title-input').val("");
            $('#url-input').val("");
            $('#error').hide();

        } else {
            $('#error').show();
        }


    });

    //Show Form On click
    $('#submit').click(function () {
        $('#story-form').slideToggle();
        $(this).hide();
    })

    //Close Form
    $('#close-story').click(function () {
        $('#story-form').slideToggle();
        $('#submit').show();
    });

    //Show Form On click
    $('#login').click(function () {
        $('#signup-form').slideToggle();
        $(this).hide();
    })

    //Close Form
    $('#close-login').click(function () {
        $('#signup-form').slideToggle();
        $('#login').show();
    });

    //Toggle Star Functionality
    /* $('body').on('click', '.glyphicon', function () {
         $(this).toggleClass('glyphicon-star-empty glyphicon-star');
     });

     //Show Favorites
     $('#favorites').click(function () {

         $("li").each(function (index) {
             if ($(".glyphicon").hasClass("glyphicon-star") === true) {
                 $('.glyphicon-star-empty').parent().hide();
                 $('#favorites').hide();
                 $('#all').show();
             }
         });
     })*/

    //Show All
    $('#all').click(function () {
        $('#favorites').show();
        $('#all').hide();
        $('ol').empty();
        $.get('https://hacker-news.firebaseio.com/v0/topstories.json', function (data) {
            var topStories = data.slice(0, 20);
            topStories.forEach(function (story_id) {
                $.get('https://hacker-news.firebaseio.com/v0/item/' + story_id + '.json', function (story) {
                    $('#links-ol').append(`<li data-id= ${story.id} data-by= ${story.by}> <span class=" star glyphicon glyphicon-star-empty" aria-hidden="true"></span><a href = ${story.url} target="_blank"><span class="title-span"> ${story.title} </a></span><span class="domain-span">( ${story.url} )</span></li>`);

                });
            });
        });
    })

    //Show only Items of clicked domain
    $('body').on('click', '.domain-span', function () {
        //hide all the domains
        $('.domain-span').parent().hide();
        $('#favorites').hide();
        $('#all').show();
        //Get current domain text then loop through domains and if it's a match show all matches. 
        let $domainName = $(this).text();
        $(".domain-span").each(function (index) {
            if ($(this).text() === $domainName) {
                $(this).parent().show();
            }
        });

    });

    //Make Ajax Request

    $.get('https://hacker-news.firebaseio.com/v0/topstories.json', function (data) {
        var topStories = data.slice(0, 20);
        topStories.forEach(function (story_id) {
            $.get('https://hacker-news.firebaseio.com/v0/item/' + story_id + '.json', function (story) {
                $('#links-ol').append(`<li data-id= ${story.id} data-by= ${story.by}> <span class="star glyphicon glyphicon-star-empty" aria-hidden="true"></span><a href = ${story.url} target="_blank"><span class="title-span"> ${story.title} </a></span><span class="domain-span">( ${story.url} )</span></li>`);

            });
        });
    });


    //Post data and get response token on signup
    $('#signup-submit').click(function (e) {
        e.preventDefault();

        let $email = $('#email').val();
        let $password = $('#password').val();
        $.post("https://hn-favorites.herokuapp.com/signup", {
            "email": $email,
            "password": $password
        }).then(function (auth) {
            console.log(auth)
            localStorage.removeItem('token');
            var setToken = localStorage.setItem('token ', auth.auth_token);
            $('#logout').show();
            $('#signup-form').hide();

        }).catch(function (error) {
            console.log(error);
        });
    });


    //Login
    $('#login-submit').click(function (e) {
        e.preventDefault();

        let $email = $('#email').val();
        let $password = $('#password').val();

        $.post("https://hn-favorites.herokuapp.com/login", {
            "email": $email,
            "password": $password
        }).then(function (auth) {
            console.log(auth.auth_token)
            console.log(auth);
            localStorage.setItem('token', auth.auth_token);
            $('#logout').show();
            $('#signup-form').hide();
            checkAndDisplayFavorites();
        }).catch(function (error) {
            console.log(error);
        });
    });






    //IF Star is clicked set item into favorites in hackernews
    $('body').on('click', '.star', function () {
        let $titleElement = $(this).next('a').find('span');
        let $url = $(this).next('a').attr('href');
        let $title = $titleElement.text();
        let $by = $(this).parent().attr('data-by');
        let $id = $(this).parent().attr('data-id');
        console.log(localStorage.getItem('token'));

        $(this).toggleClass('glyphicon-star-empty glyphicon-star');
        var getToken = localStorage.getItem('token');
        if ($(this).hasClass("glyphicon-star") === true) {
            $.ajax({
                dataType: 'json',
                url: "https://hn-favorites.herokuapp.com/stories.json",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token')
                },
                data: JSON.stringify({
                    hacker_news_story: {
                        by: $by,
                        story_id: $id,
                        title: $title,
                        url: $url
                    }
                })
            }).then(function (data) {
                console.log(data);

            }).catch(function (error) {
                console.log(error);
            });
        } else {
            //Delete Favorite

            let id = $(this).parent().data('id');
            $(this).removeClass('glyphicon-star');
            $(this).addClass('glyphicon-star-empty');
            $.ajax({

                url: `https://hn-favorites.herokuapp.com/stories/${id}.json`,
                method: "DELETE",
                headers: {
                    "Authorization": localStorage.getItem('token')
                },
                contentType: "application/json"

            }).then(function (data) {
                console.log("succes");

            }).catch(function (error) {
                console.log(error);
                console.log('fail');
            });


        }

    });

    //Get Favorites and start current list item favorites if favorite is on list
    // if Logged in
    if (localStorage.getItem('token')) {
        function checkAndDisplayFavorites() {
            $.ajax({
                url: 'https://hn-favorites.herokuapp.com/stories.json',
                dataType: 'json',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token')
                }
            }).then(function (story) {


                let favStories = story.slice(0, 20);
                let favIdArray = favStories.map(function (story) {
                    return story.story_id;
                })

                let currentShowing = $('li').map(function (idx, item) {
                    console.log(item);
                    return $(item).data('id');
                })
                console.log(currentShowing);

                currentShowing.forEach(function (id) {
                    if (favIdArray.indexOf(id) !== -1) {
                        $(id).children('.glyphicon').toggleClass('glyphicon-star glyphicon-star-empty');
                    }
                });

            }).catch(function (error) {
                console.log(error);
            });
        }
        checkAndDisplayFavorites();
    }

    //Get Favorites on click and display in 'ol'

    $('#favorites').click(function () {

        $.ajax({
            url: 'https://hn-favorites.herokuapp.com/stories.json',
            dataType: 'json',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            }
        }).then(function (story) {
            $('#favorites').hide();
            $('#all').show();
            let favStories = story.slice(0, 20);
            $("ol").empty();



            favStories.forEach(function (item) {
                $('#links-ol').append(`<li data-id= ${item.id} data-by= ${item.by}> <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><a href = ${item.url} target="_blank"><span class="title-span"> ${item.title} </a></span><span class="domain-span">( ${item.url} )</span></li>`);
            })
        }).catch(function (error) {
            console.log(error);
        });
    });

    //Login / Logout
    if (!localStorage.getItem('token')) {
        $('#login').show();
        $('#logout').hide();
    } else {
        $('#login').hide();
        $('#logout').show();
    }
    console.log(localStorage.getItem('token'));

    $('#logout').click(function () {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            $('#login').show();
            $('#logout').hide();
            console.log(localStorage.getItem('token'));

        } else {
            $('#login').show();
            $('#logout').hide();
        }

    })




});