$(function() {

    let $submit = $('#submit');
    let submitToggle = false;

    let $section = $("#listContent");
    let $listSection = $("#theList");
    //$section.hide();

    $submit.on('click', function(e){


        if (submitToggle === false){
            submitToggle = true;
            // set visibility to true
            //$section.css("visibility","true");
            $section.slideDown();
        } else {
            submitToggle = false;
            $section.slideUp();
        }

    })

    $form= $("form");
    $form.on('submit',function(e){
        console.log(e);

        e.preventDefault();
        // create new div. as a new last child to
        $newDiv = $("<div>");
        $newSpan = $("<span>");
        $newA = $("<a>");
        
        $newDiv.text($("#theList>div").length+1 + ". "); // make this dynamic.

        $newSpan.attr('class', "glyphicon glyphicon-star-empty");
        $newA.attr('href', $("#url").val());
        $newA.attr('target', '_blank');
        $newA.text($("#site").val())

        $listSection.append($newDiv);
        $newDiv.append($newSpan);
        $newDiv.append($newA);

        $form.trigger("reset");

        submitToggle = false;
        $section.slideUp();

    })

    $icons = $(".glyphicon");

    $icons.on('click',function(e){
        if ($(e.target).hasClass("glyphicon-star-empty")){
            $(e.target).removeClass("glyphicon-star-empty");
            $(e.target).addClass("glyphicon-star");

        } else {
            $(e.target).removeClass("glyphicon-star");
            $(e.target).addClass("glyphicon-star-empty");
        }
    });

    let $faves = $("#favorites");
    let favesToggle = false;

    $faves.on('click',function(e){

        if (favesToggle === false){
            favesToggle = true;
            let $hide = $("span.glyphicon-star-empty");
            $hide.parent().css('display', 'none');
        } else {
            favesToggle = false;
            let $hide = $("span.glyphicon-star-empty");
            $hide.parent().css('display', '');
        }

    })


});