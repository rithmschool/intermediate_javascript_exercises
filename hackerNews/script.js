 $(function(){
    var $form = $('form');
   
    var $submitLink = $("#submitLink");
    $submitLink.on("click", function(e){
        e.preventDefault();
        $form.show();
    })


    var $favsLink = $("#favsLink");
    $favsLink.on("click", function(e){
        e.preventDefault();
        var $newList = $('li').filter(function(i, el) {
            return $(el).hasClass('glyphicon-star-empty')
        })
        console.log($newList);
        $('.favsList').append($newList)
        // var $content = $(".content");


    })

    $form.on('submit', function(e){
        e.preventDefault();
        var $titleInput = $('.titleInput').val();
        var $urlInput = $('.urlInput').val();

        var $listOfEntries = $('.listOfEntries');

        $newLi = $('<li>').text($titleInput);
        var $newA = $('<a>', {
            href: `http://${$urlInput}`,
            text: " " + $urlInput
        })
        var $span = $('<span>', {class:'glyphicon glyphicon-star-empty'});
        $newLi.prepend($span).append($newA);
        $listOfEntries.append($newLi);
        $form.hide();
        $form.trigger('reset')
    })

    $('.listOfEntries').on('click', 'span', function(e){
        e.preventDefault();
        var option = $(e.target).hasClass('glyphicon-star') ?
             'glyphicon glyphicon-star-empty' :
             'glyphicon glyphicon-star';

        $(e.target).attr('class', option)

    })
})






        // valid url checker
        // toggle switch (submit vs all)