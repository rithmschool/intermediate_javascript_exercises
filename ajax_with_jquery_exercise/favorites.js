$(function() {

    var FAVORITES_BASE_URL = "https://hn-favorites.herokuapp.com";

    if(localStorage.getItem('token')){

    $("#submit").text("Logout ");	

    $.get({
        url: `https://hn-favorites.herokuapp.com/stories.json`,
        headers: {
            "Authorization": localStorage.getItem('token')
        }
    }).then(function(data) {
        data.forEach(favorite => {
            let $newLink = $("<a>", { href: favorite.url });
            let host = $newLink.prop('hostname').replace(/^(https?:\/\/)?(www\.)?/, '');
            $("ol").append(`<li><span class='glyphicon glyphicon-star' id='${favorite.id}'></span><a href=${favorite.url} target="_blank" id="${favorite.story_id}">${favorite.title}</a><small> (${host})</small><br><small>by ${favorite.by} </small><small><a href="http://news.ycombinator.com/item?id=${favorite.story_id}">| comments</a></small></li>`)

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
            target.parent().fadeOut();
        })

    })

}


})
