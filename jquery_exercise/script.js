// FIX THIS VALIDATION
// just for the demos, avoids form submit
// jQuery.validator.setDefaults({
//     debug: true,
//     success: "valid"
// });
// $("form").validate({
//     rules: {
//         field: {
//             required: true,
//             url: true
//         }
//     }
// });

$(document).ready(function () {
    // toggling submit form (WRONG)
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

    // var $favs = $(".favs");
    // $favs.on("click", function(e){
    //     e.preventDefault();

    // });

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

        var $mainList = $("ol");
        if (($postUrl.includes('http://') || $postUrl.includes('https://')) && (/\w+\./).test($postUrl)) {
            var html = '<li><span class="fa fa-star-o"></span> <span class="link-title"><a href="' + $postUrl + '">' + $postTitle + '</a></span> <span class="link-url">(' + $partialUrl + ')</span></li>';
            $mainList.append(html);
        }
    });


});