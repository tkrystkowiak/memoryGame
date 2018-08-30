var controller = function () {

    var startGame = function () {
        game.initializePieces();
        view.renderPieces(game.getNumberOfPieces);
    },

    highlitePieces = function() {
        view.highlite(game.drawPieces());
    };

    return {
        'startGame': startGame,
        'highlitePieces' : highlitePieces
    }
}();
window.onload = function(){
    controller.startGame(),
        document.getElementById("start").onclick = function() {controller.highlitePieces()};
};