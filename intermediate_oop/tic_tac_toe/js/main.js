document.addEventListener("DOMContentLoaded", function() {
    let game = new Grid();
    let $square = $(".square-set");
    let $result = $(".result");
    let $reset = $("#new-game")

    //Move
    $square.on("click",function(event) {
        if($(event.target).text() === "" && game.on) {
            if (game.move % 2) {
                $(event.target).text("O");
                game.addResult("O",$(event.target)[0].id);
                game.increaseMove();
                if (game.testWin("O")) {
                    game.createPage($result, "win", "O");
                    $square.removeClass("square-set");
                    game.turnOff();
                } else if (game.move === 9) {
                    game.createPage($result, "tie");
                    $square.removeClass("square-set");
                    game.turnOff();
                }
            } else {
                $(event.target).text("X");
                game.addResult("X",$(event.target)[0].id);
                game.increaseMove();
                if (game.testWin("X")) {
                    game.createPage($result, "win", "X");
                    $square.removeClass("square-set");
                    game.turnOff();
                } else if (game.move === 9) {
                    game.createPage($result, "tie");
                    $square.removeClass("square-set");
                    game.turnOff();
                }
            }
        }
    });

    //Reset game
    $reset.on("click", function(event) {
        $square.text("");
        game.reset();
        $result.empty();
    })

});
