var view = function () {
        var getInitialNumberOfPieces = function () {
                return 4;
                },
        renderPieces = function(numberOfPieces){
            for(var i = 0; i <numberOfPieces();i++) {
                var piece = document.createElement("div");
                piece.id = i;
                piece.classList.add("square");
                document.getElementById("square_container").appendChild(piece);
            }
        },
        highlite =  function (pieces) {
            for(var i = 0; i <pieces.length;i++) {
                if(pieces[i].highlighted) {
                    piece = document.getElementById(i);
                    piece.style.backgroundColor = "#CD5C5C";
                }
            }
        };
    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlite': highlite
    };

}();
