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

        if($favsLink.text() === 'all') {
           $('li').filter(function(i, el) {
                return $(el).find('span').hasClass('glyphicon-star-empty')
            }).show()  
            $favsLink.text('favorites')
        } else {        
            $('li').filter(function(i, el) {
                return $(el).find('span').hasClass('glyphicon-star-empty')
            }).hide()
            $favsLink.text('all')
        }
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


    // var $favsLink = $("#favsLink");
    // $favsLink.on("click", function(e){
    //     e.preventDefault();
    //     var $unfavList = $('li').filter(function(i, el) {
    //         return $(el).hasClass('glyphicon-star-empty')
    //     })
    //     $unfavList.hide();
    //     // var $content = $(".content");


    // })

