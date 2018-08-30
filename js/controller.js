var controller = function () {

    var startGame = function () {
        game.initializePieces();
        view.renderPieces(game.getNumberOfPieces());
    },
    highlitePieces = function() {
        var pieces = game.drawPieces();
        view.highlite(pieces);
        window.setTimeout(function() {
            view.resetColors(pieces);
            addListeners();

        }, 1000);
    },
    addListeners = function() {
        var pieces = game.getPieces();
        for(var i = 0;i<pieces.length;i++){
            var piece = document.getElementById(i);
            piece.addEventListener("click",validate);
        }
    },
    validate = function(event){
        var id = event.target.id;
        if(game.validateColors(id)){
            view.markCorrect(id);
            game.incrementGuessed();
        }
        else{
             view.markIncorrect(id)
        }
        if(game.areAllGuessed()){
            window.setTimeout(function() {
                view.resetColors(game.getPieces());
                game.nextLevel();
                view.renderPieces(game.getPieces().length);
                controller.highlitePieces();
            }, 1000);
        }
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