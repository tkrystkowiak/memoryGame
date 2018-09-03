var view = function () {
    var getInitialNumberOfPieces = function () {
            return 4;
        },
        renderPieces = function (numberOfPieces) {
            for (var i = 0; i < numberOfPieces; i++) {
                var piece = document.getElementById(i);
                if (piece == null) {
                    var piece = document.createElement("div");
                    piece.id = i;
                    piece.classList.add("square");
                    document.getElementById("square_container").appendChild(piece);
                }
            }
        },
        removePieces = function (numberOfPieces) {
            for (var i = 0; i < numberOfPieces; i++) {
                var piece = document.getElementById(i);
                piece.remove();
            }
        },
        highlight = function (pieces) {
            for (var i = 0; i < pieces.length; i++) {
                if (pieces[i].highlighted) {
                    piece = document.getElementById(i);
                    piece.style.backgroundColor = "#247BA0";
                }
            }
        },
        disableAllListeners = function () {
            document.addEventListener("click", handler, true);

        },
        enableAllListeners = function () {
            document.removeEventListener('click', handler, true)
        },
        handler = function (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        markCorrect = function (id) {
            piece = document.getElementById(id);
            piece.style.backgroundColor = "#1A936F";
        },
        markIncorrect = function (id) {
            piece = document.getElementById(id);
            piece.style.backgroundColor = "#E84855";
        },
        resetColors = function (pieces) {
            for (var i = 0; i < pieces.length; i++) {
                piece = document.getElementById(i);
                piece.style = undefined;
            }
        },
        setLevel = function (level) {
            piece = document.getElementById("level");
            piece.innerText = "Level: " + level;
        },
        setLeftToGuess = function (leftToGuess) {
            piece = document.getElementById("left");
            piece.innerText = "Left to Guess: " + leftToGuess;
        },
        setPreviewTime = function (previewTime) {
            piece = document.getElementById("time");
            piece.innerText = "Preview time: " + previewTime + "s";
        },
        setAccuracy = function (accuracy) {
            piece = document.getElementById("accuracy");
            piece.innerText = "Accuracy: " + accuracy + "%";
        },
        setMishitsAllowed = function (mishitsAllowed) {
            piece = document.getElementById("mishit");
            piece.innerText = "Mishits allowed: " + mishitsAllowed;
        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlight': highlight,
        'resetColors': resetColors,
        'markCorrect': markCorrect,
        'markIncorrect': markIncorrect,
        'disableAllListeners': disableAllListeners,
        'enableAllListeners': enableAllListeners,
        'setLevel': setLevel,
        'setLeftToGuess': setLeftToGuess,
        'removePieces': removePieces,
        'setPreviewTime': setPreviewTime,
        'setAccuracy': setAccuracy,
        'setMishitsAllowed': setMishitsAllowed
    };

}();
