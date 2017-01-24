window.addEventListener("load", function() {

    let canvas = document.getElementById("shapes-game"),
        height = canvas.scrollHeight,
        width = canvas.scrollWidth,
        gameOn = false,
        expectedKey = undefined,
        ctx = canvas.getContext('2d'),
        expectedKeysMap = { white0: 38, red1: 40, red0: 37, white1: 39 },
        time = document.getElementById("time-remaining"),
        score = document.getElementById("score-val"),
        best = document.getElementById("best-score"),
        seconds = 3,
        bestScore = 0,
        expectedValue = 32,
        intervalId;

    canvas.width = width;
    canvas.height = height;

    const openingText = {
        draw: function() {
            ctx.font = "35px Comic Sans MS";
            ctx.fillStyle = "White";
            ctx.fillText("When the shapes come on the screen,", 100, 200);
            ctx.fillText("use the corresponding arrows --->", 100, 250);
            ctx.fillText("Press Space Bar to Start the Game!", 100, 450);
        }
    }

    openingText.draw();

    let redTriangle = {
        draw: function() {
            ctx.beginPath();
            let start = Math.random() * 650;
            ctx.fillStyle = "#3951d6";
            ctx.moveTo(start, start);
            ctx.lineTo(start, start + 100);
            ctx.lineTo(start + 100, start + 100);
            ctx.fill();
        }
    }

    let whiteTriangle = {
        draw: function() {
            ctx.beginPath();
            let start = Math.random() * 650;
            ctx.fillStyle = "white";
            ctx.moveTo(start, start);
            ctx.lineTo(start, start + 100);
            ctx.lineTo(start + 100, start + 100);
            ctx.fill();
        }
    }

    let redSquare = {
        corner: [650, 650],
        width: 100,
        height: 100,
        color: "#3951d6",
        draw: function() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(Math.random() * this.corner[0], Math.random() * this.corner[1], this.width, this.height);
        }
    }

    let whiteSquare = {
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

    function pickRandomShape() {
        let choice = Math.random();
        if (choice <= 0.25) {
            expectedValue = 37
            return redTriangle.draw();
        }
        if (choice <= 0.5) {
            expectedValue = 38;
            return whiteTriangle.draw();

        }
        if (choice <= 0.75) {
            expectedValue = 40;
            return redSquare.draw();
        }
        if (choice <= 1) {
            expectedValue = 39;
            return whiteSquare.draw();
        }
    }

    function correctScore() {
        score.innerText = Number(score.innerText) + 100;
    }

    function wrongScore() {
        score.innerText = Number(score.innerText) - 100;
    }




    function timer() {
        let start = 29;
        let timerId = setInterval(function() {
            time.innerText = start--;
        }, 1000);
        setTimeout(function() {
            clearInterval(timerId);
            if (bestScore === 0 || bestScore === Number(score.innerText)) {
                alert("Game Over! Wanna try again? You current best score: " + Number(score.innerText));
                bestScore = Number(score.innerText);
            }
            if (bestScore > Number(score.innerText)) {
                alert("Not your best, buddy. You should try again! Your current best score is: " + bestScore);
            }
            if (bestScore < Number(score.innerText)) {
                alert("You've beaten your best score!! Think you can do better? Your current best score is: " + Number(score.innerText));
                bestScore = Number(score.innerText);
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            score.innerText = 0;
            time.innerText = 30;
            gameOn = false;
            best.innerText = bestScore;
            return openingText.draw();
        }, 30999)
    }

    document.addEventListener("keyup", function(event) {
        if (event.which === 32 && !gameOn) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            gameOn = true;
            timer();
            return pickRandomShape();
        } else if (event.which != 32 && event.which === expectedValue) {
            correctScore();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return pickRandomShape();
        } else if (event.which != 32) {
            wrongScore();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return pickRandomShape();
        }
    })




});