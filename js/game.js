var game = function () {

    var initialNumberOfPieces = 4,
        userLevel = 0,
        difficultyLevel = 0,
        currentNumberOfPieces = initialNumberOfPieces + 2 * difficultyLevel,
        toGuessPieces = currentNumberOfPieces / 2 - 1,
        guessedPieces = 0,
        previewTime = 1,
        pieces = [],
        totalGuessed = 0,
        totalMistakes = 0,
        mishitsAllowed = 0,
        mishits = 0,
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
            mishits = 0;
            initializePieces();
        },
        resetAll = function () {
            userLevel = 0;
            difficultyLevel = 0;
            currentNumberOfPieces = initialNumberOfPieces + 2 * difficultyLevel;
            toGuessPieces = currentNumberOfPieces / 2 - 1;
            guessedPieces = 0;
            previewTime = 1;
            totalGuessed = 0;
            totalMistakes = 0;
            mishits = 0;
            mishitsAllowed = 0;
            initializePieces();
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
            totalGuessed++;
            guessedPieces++;
        },
        markMistake = function () {
            totalMistakes++;
            mishits++;
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
            if (game.getPreviewTime() > 1) {
                previewTime--;
            }
        },
        increaseMishitsAllowed = function () {
            mishitsAllowed++;
        },
        decreaseMishitsAllowed = function () {
            if (mishitsAllowed > 0) {
                mishitsAllowed--;
            }
        },
        getPreviewTime = function () {
            return previewTime;
        },
        isGameOver = function () {
            if (mishits > mishitsAllowed) {
                return true;
            }
            return false;
        },
        getAccuracy = function () {
            if (totalGuessed + totalMistakes == 0) {
                return 0;
            }
            else {
                var accuracy = 100 * totalGuessed / (totalGuessed + totalMistakes);
                return Math.round(accuracy);
            }
        },
        getMishitsAllowed = function () {
            return mishitsAllowed;
        };

    return {
        'getNumberOfPieces': getNumberOfPieces,
        'drawPieces': drawPieces,
        'initializePieces': initializePieces,
        'isHighlighted': isHigligthed,
        'getPieces': getPieces,
        'validateColors': validateColor,
        'areAllGuessed': areAllGuessed,
        'nextLevel': nextLevel,
        'resetCurrentLevel': resetCurrentLevel,
        'increaseDifficulty': increaseDifficulty,
        'getUserLevel': getUserLevel,
        'getLeftToGuess': getLeftToGuess,
        'resetAll': resetAll,
        'getPreviewTime': getPreviewTime,
        'increasePreviewTime': increasePreviewTime,
        'decreasePreviewTime': decreasePreviewTime,
        'markGuessed': markGuessed,
        'getAccuracy': getAccuracy,
        'markMistake': markMistake,
        'isGameOver': isGameOver,
        'increaseMishitsAllowed': increaseMishitsAllowed,
        'decreaseMishitsAllowed': decreaseMishitsAllowed,
        'getMishitsAllowed': getMishitsAllowed
    };
}();
