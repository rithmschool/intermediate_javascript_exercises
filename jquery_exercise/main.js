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
        $('form').slideToggle();
        $(this).hide();
    })

    //Close Form
    $('#close-form').click(function () {
        $('form').slideToggle();
        $('#submit').show();
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
        $('.glyphicon-star-empty').parent().show();
        $('.domain-span').parent().show();
        $('#favorites').show();
        $('#all').hide();
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
                $('#links-ol').append(`<li> <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><a href = ${story.url} target="_blank"><span class="title-span"> ${story.title} </a></span><span class="domain-span">( ${story.url} )</span></li>`);
            });
        });
    });


    /* //Post data and get response token on signup
     $.post("https://hn-favorites.herokuapp.com/signup", {
         "email": "tostaylo1@gmail.com",
         "password": "aaaaa"
     }).then(function (auth) {
         console.log(auth)
         var setToken = localStorage.setItem('token ', auth);
     }).catch(function (error) {
         console.log(error);
     });*/


    //Login
    $.post("https://hn-favorites.herokuapp.com/login", {
        "email": "tostaylo1@gmail.com",
        "password": "aaaaa"
    }).then(function (auth) {
        console.log(auth.auth_token)
        localStorage.setItem('token', auth.auth_token);
    }).catch(function (error) {
        console.log(error);
    });




    var getToken = localStorage.getItem('token');
    console.log(getToken);

    //IF Star is clicked set item into favorites in hackernews
    $('body').on('click', '.glyphicon', function () {
        let $titleElement = $(this).next('a').find('span');
        let $url = $(this).next('a').attr('href');
        let $title = $titleElement.text();
        console.log($url);
        $(this).toggleClass('glyphicon-star-empty glyphicon-star');
        var getToken = localStorage.getItem('token');
        if ($(this).hasClass("glyphicon-star") === true) {
            $.ajax({
                dataType: 'json',
                url: "https://hn-favorites.herokuapp.com/stories.json",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getToken
                },
                data: JSON.stringify({
                    hacker_news_story: {
                        by: "Ray",
                        story_id: 48382,
                        title: $title,
                        url: $url
                    }
                })
            }).then(function (data) {
                console.log(data);

            }).catch(function (error) {
                console.log(error);
            });
        }

    });






});