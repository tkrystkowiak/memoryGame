var game = function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces = initialNumberOfPieces,
        highlitedPieces = 1,
        pieces = [],
        isHigligthed = function(id){
            return pieces[id].highlighted;
        },
        getNumberOfPieces = function () {
            return currentNumberOfPieces;
        },
        initializePieces = function () {
            var i;
            for(i=0;i<currentNumberOfPieces;i++){
                pieces[i]= {
                    id : i,
                    highlighted : false
                }
            }
        },
        markPiecesToHighlite = function() {
            var toHighlight = Math.floor((Math.random() * currentNumberOfPieces));
            pieces[toHighlight].highlighted = true;
            return pieces;
        };

    return {
        'getNumberOfPieces': getNumberOfPieces,
        'drawPieces': markPiecesToHighlite,
        'initializePieces': initializePieces,
        'isHighlighted': isHigligthed
    };
}();
