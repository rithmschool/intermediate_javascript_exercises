$(document).ready(function () {
    let $title;
    let $url;
    //Add List Item
    $('button').click(function (e) {
        e.preventDefault();
        $title = $('#title-input').val();
        $url = $('#url-input').val();
        $('#links-ol').append('<li> <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>' + $title + $url + '</li>');
        $($title).val(" ");
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
            }
        });
    })
})