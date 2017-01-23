$(document).ready(function () {
    let $title;
    //Add List Item
    $('button').click(function (e) {
        e.preventDefault();
        $title = $('#title-input').val();
        $('#links-ul').append('<li>' + $title + '</li>');
        $($title).val(" ");
    });

    //Show Form On click
})