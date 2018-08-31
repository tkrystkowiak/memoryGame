var game = function () {

    var initialNumberOfPieces = 4,
        userLevel = 0,
        difficultyLevel = 0,
        currentNumberOfPieces = initialNumberOfPieces + 2 * difficultyLevel,
        toGuessPieces = currentNumberOfPieces / 2 - 1,
        guessedPieces = 0,
        previewTime = 1,
        pieces = [],
        numberOfGuessed = 0,
        numberOfMistakes = 0,
        isHigligthed = function (id) {
            return pieces[id].highlighted;
        },
        increaseDifficulty = function () {
            difficultyLevel++;
            currentNumberOfPieces = initialNumberOfPieces + 2 * difficultyLevel;
            toGuessPieces = currentNumberOfPieces / 2 - 1;
            guessedPieces = 0;
            initializePieces();
        },
        areAllGuessed = function () {
            if (toGuessPieces == guessedPieces) {
                return true;
            }
            else {
                return false;
            }
        },
        nextLevel = function () {
            userLevel++;
            difficultyLevel++;
            currentNumberOfPieces = initialNumberOfPieces + 2 * difficultyLevel;
            toGuessPieces = currentNumberOfPieces / 2 - 1;
            guessedPieces = 0;
            initializePieces();
        },
        resetCurrentLevel = function () {
            guessedPieces = 0;
            initializePieces();
        },
        resetAll = function () {
            userLevel = 0;
            difficultyLevel = 0;
            currentNumberOfPieces = initialNumberOfPieces + 2 * difficultyLevel;
            toGuessPieces = currentNumberOfPieces / 2 - 1;
            guessedPieces = 0;
            initializePieces();
        },
        incrementGuessed = function () {
            guessedPieces++;
        },
        getNumberOfPieces = function () {
            return currentNumberOfPieces;
        },
        initializePieces = function () {
            pieces.length = 0;
            for (var i = 0; i < currentNumberOfPieces; i++) {
                pieces[i] = {
                    id: i,
                    highlighted: false
                }
            }
        },
        getPieces = function () {
            return pieces;
        },
        drawPieces = function () {
            for (var i = 0; i < toGuessPieces; i++) {
                var toHighlight = Math.floor((Math.random() * currentNumberOfPieces));
                if (pieces[toHighlight].highlighted) {
                    i--;
                } else {
                    pieces[toHighlight].highlighted = true;
                }
            }
            return pieces;
        },
        validateColor = function (id) {
            if (pieces[id].highlighted) {
                return true;
            }
            return false;
        },
        markGuessed = function (id) {
            pieces[id].highlighted = false;
        },
        getLeftToGuess = function () {
            return toGuessPieces - guessedPieces;
        },
        getUserLevel = function () {
            return userLevel;
        },
        getPreviewTime = function () {
            return previewTime;
        },
        increasePreviewTime = function () {
            previewTime++;
        },
        decreasePreviewTime = function () {
            previewTime--;
        },
        getPreviewTime = function () {
            return previewTime;
        };

    return {
        'getNumberOfPieces': getNumberOfPieces,
        'drawPieces': drawPieces,
        'initializePieces': initializePieces,
        'isHighlighted': isHigligthed,
        'getPieces': getPieces,
        'validateColors': validateColor,
        'areAllGuessed': areAllGuessed,
        'incrementGuessed': incrementGuessed,
        'nextLevel': nextLevel,
        'resetCurrentLevel': resetCurrentLevel,
        'increaseDifficulty': increaseDifficulty,
        'getUserLevel': getUserLevel,
        'getLeftToGuess': getLeftToGuess,
        'resetAll': resetAll,
        'getPreviewTime': getPreviewTime,
        'increasePreviewTime': increasePreviewTime,
        'decreasePreviewTime': decreasePreviewTime,
        'markGuessed': markGuessed
    };
}();
