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
        $('form').show();
        $(this).hide();
    })

    //Toggle Star Functionality
    $('body').on('click', '.glyphicon', function () {
        $(this).toggleClass('glyphicon-star-empty glyphicon-star');
    });

    //Show Favorites
    $('#favorites').click(function () {

        $("li").each(function (index) {
            if ($("span").hasClass("glyphicon-star") === true) {
                $('.glyphicon-star-empty').parent().hide();
                $('#favorites').hide();
                $('#all').show();
            }
        });
    })

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

    })


})