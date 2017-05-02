jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
$("form").validate({
    rules: {
        field: {
            required: true,
            url: true
        }
    }
});

$(document).ready(function () {

    $(".submission").on("click", function (e) {
        e.preventDefault();
        $("aside").toggle();
    });

    var $ol = $("ol");
    $ol.on("click", ".fa", function (e) {
        e.preventDefault();
        if ($(e.target).hasClass('fa-star-o')) {
            $(e.target).removeClass('fa-star-o');  //missing . before removeClass
            $(e.target).addClass('fa-star');
        } else {
            $(e.target).removeClass('fa-star');
            $(e.target).addClass('fa-star-o');
        }
    });

    $(".favs").on("click", function(e){
        e.preventDefault();
        if ($(".favs").text() === "all"){
            $(".favs").text("favorites");
            $(".fa-star-o").parent().toggle(true);
        } else {
            $(".favs").text("all");
            $(".fa-star-o").parent().toggle(false); 
        }
    });

    // append new item to form
    // create a new item
    $(".post-submit").on("click", function (e) {
        e.preventDefault();
        var $postTitle = $(".post-title").val();
        var $postUrl = $(".post-url").val();
        var $partialUrl = $postUrl.match(/\w+\.\w+\.\w+/) || $postUrl.match(/\w+\.\w+/); // url after http:// and before path; something.something.something

        if ($partialUrl[0].match(/^www/)) { // if www. start, remove "www."
            $partialUrl[0] = $partialUrl[0].substring(4);
        }

        if (($postUrl.includes('http://') || $postUrl.includes('https://')) && (/\w+\./).test($postUrl)) {
            // var html = '<li><span class="fa fa-star-o"></span> <span class="link-title"><a href="' + $postUrl + '">' + $postTitle + '</a></span> <span class="link-url">(' + $partialUrl + ')</span></li>';
            // $ol.append(html);
            var $star = $("<span>").addClass("fa fa-star-o");
            var $link = $("<a/>")
                            .attr("href", $postUrl)
                            .text(" " + $postTitle + " ");
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
        }
    });


});