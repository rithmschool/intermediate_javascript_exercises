window.addEventListener("load", function() {
    var pong = new Pong("pong");
    pong.startGameLoop();

    document.getElementById('resetBtn').addEventListener('click', function(){
        var pong = new Pong("pong");
        pong.startGameLoop();
    });
});


