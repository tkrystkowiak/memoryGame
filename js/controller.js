var controller = function () {

    var startGame = function () {
            game.initializePieces();
            view.renderPieces(game.getNumberOfPieces());
        },
        resetGame = function () {
            view.removePieces(game.getNumberOfPieces());
            game.resetAll();
            view.setLevel(game.getUserLevel());
            view.setLeftToGuess(0);
            view.setAccuracy(game.getAccuracy());
            view.setPreviewTime(game.getPreviewTime());
            view.setMishitsAllowed(game.getMishitsAllowed());
            view.renderPieces(game.getNumberOfPieces());
        },

        highlightPieces = function () {
            view.setLevel(game.getUserLevel());
            view.setLeftToGuess(game.getLeftToGuess());
            game.resetCurrentLevel();
            var pieces = game.drawPieces();
            view.highlight(pieces);
            window.setTimeout(function () {
                view.resetColors(pieces);
                addListeners();
            }, game.getPreviewTime() * 1000);
        },
        increaseDifficulty = function () {
            view.resetColors(game.getPieces());
            game.increaseDifficulty();
            view.renderPieces(game.getPieces().length);
            highlightPieces();

        },
        addListeners = function () {
            var pieces = game.getPieces();
            for (var i = 0; i < pieces.length; i++) {
                var piece = document.getElementById(i);
                piece.addEventListener("click", validate);
            }
        },
        increasePreviewTime = function () {
            game.increasePreviewTime();
            view.setPreviewTime(game.getPreviewTime());
        },
        decreasePreviewTime = function () {
            game.decreasePreviewTime();
            view.setPreviewTime(game.getPreviewTime());
        },
        increaseMishitsAllowed = function () {
            game.increaseMishitsAllowed();
            view.setMishitsAllowed(game.getMishitsAllowed());
        },
        decreaseMishitsAllowed = function () {
            game.decreaseMishitsAllowed();
            view.setMishitsAllowed(game.getMishitsAllowed());
        },
        validate = function (event) {
            var id = event.target.id;
            if (game.validateColors(id)) {
                game.markGuessed(id);
                view.markCorrect(id);
                view.setLeftToGuess(game.getLeftToGuess());
                view.setAccuracy(game.getAccuracy());
            }
            else {
                view.markIncorrect(id);
                game.markMistake();
                view.setAccuracy(game.getAccuracy());
                if (game.isGameOver()) {
                    view.disableAllListeners();
                    window.setTimeout(function () {
                        view.resetColors(game.getPieces());
                        game.resetCurrentLevel();
                        highlightPieces();
                        view.enableAllListeners();
                    }, 1000);
                }
            }
            if (game.areAllGuessed()) {
                view.disableAllListeners();
                window.setTimeout(function () {
                    view.resetColors(game.getPieces());
                    game.nextLevel();
                    view.renderPieces(game.getPieces().length);
                    controller.highlightPieces();
                    view.enableAllListeners();
                }, 1000);
            }
        };

    return {
        'startGame': startGame,
        'highlightPieces': highlightPieces,
        'increaseDifficulty': increaseDifficulty,
        'resetGame': resetGame,
        'increasePreviewTime': increasePreviewTime,
        'decreasePreviewTime': decreasePreviewTime,
        'increaseMishitsAllowed': increaseMishitsAllowed,
        'decreaseMishitsAllowed': decreaseMishitsAllowed
    }
}();


