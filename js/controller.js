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
            view.renderPieces(game.getNumberOfPieces());
        },

        highlightPieces = function () {
            view.setLevel(game.getUserLevel());
            view.setLeftToGuess(game.getLeftToGuess());
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
            if (game.getPreviewTime() > 1) {
                game.decreasePreviewTime();
                view.setPreviewTime(game.getPreviewTime());
            }
        },
        validate = function (event) {
            var id = event.target.id;
            if (game.validateColors(id)) {
                game.markGuessed(id);
                view.markCorrect(id);
                game.incrementGuessed();
                view.setLeftToGuess(game.getLeftToGuess());
            }
            else {
                view.markIncorrect(id);
                view.disableAllListeners();
                window.setTimeout(function () {
                    view.resetColors(game.getPieces());
                    game.resetCurrentLevel();
                    highlightPieces();
                    view.enableAllListeners();
                }, 1000);

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
        'decreasePreviewTime': decreasePreviewTime
    }
}();
window.onload = function () {
    controller.startGame(),
        document.getElementById("start").onclick = function () {
            controller.highlightPieces()
        },
        document.getElementById("more").onclick = function () {
            controller.increaseDifficulty()
        },
        document.getElementById("reset").onclick = function () {
            controller.resetGame()
        },
        document.getElementById("time_plus").onclick = function () {
            controller.increasePreviewTime()
        },
        document.getElementById("time_minus").onclick = function () {
            controller.decreasePreviewTime()
        };

};