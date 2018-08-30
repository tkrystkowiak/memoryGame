var view = function () {
        var getInitialNumberOfPieces = function () {
                return 4;
                },
        renderPieces = function(numberOfPieces){
            for(var i = 0; i <numberOfPieces;i++) {
                var piece = document.getElementById(i);
                if (piece == null) {
                    var piece = document.createElement("div");
                    piece.id = i;
                    piece.classList.add("square");
                    document.getElementById("square_container").appendChild(piece);
                }
            }
        },
        highlite =  function (pieces) {
            for(var i = 0; i <pieces.length;i++) {
                if(pieces[i].highlighted) {
                    piece = document.getElementById(i);
                    piece.style.backgroundColor = "#cdc23f";
                }
            }
        },
        markCorrect = function (id) {
            piece = document.getElementById(id);
            piece.style.backgroundColor = "#27cd4f";
        },
        markIncorrect = function (id) {
            piece = document.getElementById(id);
            piece.style.backgroundColor = "#cd344c";
        },
        resetColors = function(pieces){
            for(var i = 0; i <pieces.length;i++) {
                piece = document.getElementById(i);
                piece.style = undefined;
            }
        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlite': highlite,
        'resetColors' : resetColors,
        'markCorrect' : markCorrect,
        'markIncorrect' : markIncorrect
    };

}();
