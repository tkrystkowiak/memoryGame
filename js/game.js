var game = function () {

    var initialNumberOfPieces = 4,
        level = 0,
        currentNumberOfPieces = initialNumberOfPieces + 2 * level,
        toGuessPieces = currentNumberOfPieces/2 - 1,
        guessedPieces = 0,
        pieces = [],
        isHigligthed = function(id){
            return pieces[id].highlighted;
        },
        areAllGuessed = function(){
            if(toGuessPieces==guessedPieces){
                return true;
            }
            else{
                return false;
            }
        },
        nextLevel = function(){
            level++;
            currentNumberOfPieces = initialNumberOfPieces + 2 * level;
            toGuessPieces = currentNumberOfPieces/2 - 1;
            guessedPieces = 0;
            initializePieces();
        },
        incrementGuessed = function(){
            guessedPieces++;
        },
        getNumberOfPieces = function () {
            return currentNumberOfPieces;
        },
        initializePieces = function () {
            pieces.length = 0;
            for(var i=0;i<currentNumberOfPieces;i++){
                pieces[i]= {
                    id : i,
                    highlighted : false
                }
            }
        },
        getPieces = function() {
            return pieces;
        },
        drawPieces = function() {
            for(var i = 0;i<toGuessPieces;i++) {
                var toHighlight = Math.floor((Math.random() * currentNumberOfPieces));
                if(pieces[toHighlight].highlighted){
                    i--;
                } else{
                    pieces[toHighlight].highlighted = true;
                }
            }
            return pieces;
        },
        validateColor = function(id){
            if(pieces[id].highlighted){
                return true;
            }
            return false;
        };

    return {
        'getNumberOfPieces': getNumberOfPieces,
        'drawPieces': drawPieces,
        'initializePieces': initializePieces,
        'isHighlighted': isHigligthed,
        'getPieces': getPieces,
        'validateColors': validateColor,
        'areAllGuessed': areAllGuessed,
        'incrementGuessed' : incrementGuessed,
        'nextLevel' : nextLevel
    };
}();
