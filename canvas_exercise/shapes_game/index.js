window.addEventListener("load", function() {


    // function clear(ctx, width, heigt) {}

    // function drawRandomShape(ctx, width, height) {}

    // function drawGameStartText(ctx, width, height, score) {}

    // function restartGame(ctx, width, height) {}



    var canvas = document.getElementById("shapes-game"),
        height = canvas.scrollHeight,
        width = canvas.scrollWidth,
        gameOn = false,
        expectedKey = undefined,
        ctx = canvas.getContext('2d'),
        // white triangle = up, red square = down,
        // red triangle = left, white square = right
        expectedKeysMap = { white0: 38, red1: 40, red0: 37, white1: 39 },
        timerSpan = document.getElementById("time-remaining"),
        scoreSpan = document.getElementById("score-val"),
        seconds = 3,
        intervalId;

    canvas.width = width;
    canvas.height = height;

    var openingText = {
        draw: function() {
            ctx.font = "35px Comic Sans MS";
            ctx.fillStyle = "White";
            ctx.fillText("Press Space Bar to Start the Game!", 100, 400);
        }
    }

    openingText.draw();

    var redTriangle = {
        draw: function() {
            ctx.beginPath();
            var start = Math.random() * 650;
            ctx.fillStyle = "red";
            ctx.moveTo(start, start);
            ctx.lineTo(start, start + 100);
            ctx.lineTo(start + 100, start + 100);
            ctx.fill();
        }
    }

    var whiteTriangle = {
        draw: function() {
            ctx.beginPath();
            var start = Math.random() * 650;
            ctx.fillStyle = "white";
            ctx.moveTo(start, start);
            ctx.lineTo(start, start + 100);
            ctx.lineTo(start + 100, start + 100);
            ctx.fill();
        }
    }

    var redSquare = {
        corner: [650, 650],
        width: 100,
        height: 100,
        color: "red",
        draw: function() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(Math.random() * this.corner[0], Math.random() * this.corner[1], this.width, this.height);
        }
    }

    var whiteSquare = {
        corner: [650, 650],
        width: 100,
        height: 100,
        color: "white",
        draw: function() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(Math.random() * this.corner[0], Math.random() * this.corner[1], this.width, this.height);
        }
    }
    var bestScore = 0;
    var expectedValue = 32;

    function pickRandomShape() {
        var choice = Math.random();
        if (choice <= 0.25) {
            redTriangle.draw();
            expectedValue = 37
        }
        if (choice > 0.25 && choice <= 0.5) {
            whiteTriangle.draw();
            expectedValue = 38
        }
        if (choice > 0.5 && choice <= 0.75) {
            redSquare.draw();
            expectedValue = 40
        }
        if (choice > 0.75 && choice <= 1) {
            whiteSquare.draw();
            expectedValue = 39
        }
    }


    // var scoreValue = 0
    var score = document.getElementById("score-val");

    function correctScore() {
        score.innerText = Number(score.innerText) + 100;
    }

    function wrongScore() {
        score.innerText = Number(score.innerText) - 100;
    }

    var gameOn = false;
    var time = document.getElementById("time-remaining");


    function timer() {
        var start = 29;
        var timerId = setInterval(function() {
            time.innerText = start--;
        }, 1000);
        setTimeout(function() {
            clearInterval(timerId);
            if (bestScore === 0 || bestScore === Number(score.innerText)) { alert("Game Over! Wanna try again? You current best score: " + Number(score.innerText));
                bestScore = Number(score.innerText); }
            if (bestScore > Number(score.innerText)) { alert("Not your best, buddy. You should try again! Your current best score is: " + bestScore); }
            if (bestScore < Number(score.innerText)) { alert("You've beaten your best score!! Think you can do better? Your current best score is: " + Number(score.innerText));
                bestScore = Number(score.innerText); }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            score.innerText = 0;
            time.innerText = 30;
            openingText.draw();
            gameOn = false;
        }, 30999)
    }

    document.addEventListener("keyup", function(event) {
        if (event.which === 32 && !gameOn) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameOn = true;
            timer();
            pickRandomShape();
        } else if (event.which != 32 && event.which === expectedValue) {
            correctScore();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pickRandomShape()
        } else if (event.which != 32) {
            wrongScore();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pickRandomShape()
        }
    })




});
