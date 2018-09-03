describe('Game', function () {

    beforeEach(function () {
        game.resetAll();
    });

    it('should draw and highlight one piece', function () {
        var pieces = game.drawPieces(),
            highligthed = 0;
        for (var i = 0; i < pieces.length; i++) {
            if (pieces[i].highlighted) {
                highligthed++;
            }
        }
        expect(highligthed).toBe(1);
    });

    it('should draw and highlight two pieces after next level', function () {
        game.nextLevel();
        var pieces = game.drawPieces(),
            highligthed = 0;
        for (var i = 0; i < pieces.length; i++) {
            if (pieces[i].highlighted) {
                highligthed++;
            }
        }
        expect(highligthed).toBe(2);
    });

    it('should increase difficulty', function () {
        game.increaseDifficulty();

        expect(game.getNumberOfPieces()).toBe(6);
    });

    it('should show that not all are guessed', function () {
        game.drawPieces();

        expect(game.areAllGuessed()).toBe(false);
    });

    it('should increment variables on next level', function () {
        game.nextLevel();

        expect(game.getUserLevel()).toBe(1);
        expect(game.getNumberOfPieces()).toBe(6);
    });

    it('should reset variables on reset current level', function () {
        game.drawPieces();
        game.markGuessed(1);
        game.markMistake();
        game.resetCurrentLevel();


        expect(game.isGameOver()).toBe(false);
    });

    it('should show that game is over on first level', function () {
        game.initializePieces();
        game.markMistake();


        expect(game.isGameOver()).toBe(true);
    });

    it('should show that game is over on second level', function () {
        game.nextLevel();
        game.markMistake();
        game.markMistake();


        expect(game.isGameOver()).toBe(true);
    });

    it('should show that all pieces are guessed', function () {
        game.initializePieces();
        game.markGuessed(1);
        expect(game.areAllGuessed()).toBe(true);
    });

    it('should show that not all pieces are guessed', function () {
        game.initializePieces();
        expect(game.areAllGuessed()).toBe(false);
    });

    it('should show accuracy 100()', function () {
        game.initializePieces();
        game.markGuessed(1);
        expect(game.getAccuracy()).toBe(100);
    });

    it('should show accuracy 50 ', function () {
        game.initializePieces();
        game.markGuessed(1);
        game.markMistake();
        expect(game.getAccuracy()).toBe(50);
    });

    it('should increment preview time', function () {
        var initial = game.getPreviewTime();
        game.increasePreviewTime();
        expect(game.getPreviewTime()).toBe(initial + 1);
    });

    it('should decrement preview time', function () {
        var initial = game.getPreviewTime();
        game.increasePreviewTime();
        game.decreasePreviewTime();
        expect(game.getPreviewTime()).toBe(initial);
    });

    it('should not decrement preview time below initial', function () {
        var initial = game.getPreviewTime();
        game.decreasePreviewTime();
        expect(game.getPreviewTime()).toBe(initial);
    });

    it('should increment mishits allowed', function () {
        var initial = game.getMishitsAllowed();
        game.increaseMishitsAllowed();
        expect(game.getMishitsAllowed()).toBe(initial + 1);
    });

    it('should decrement mishits allowed', function () {
        var initial = game.getMishitsAllowed();
        game.increaseMishitsAllowed();
        game.decreaseMishitsAllowed();
        expect(game.getMishitsAllowed()).toBe(initial);
    });

    it('should not decrement mishits allowed below initial', function () {
        var initial = game.getMishitsAllowed();
        game.decreaseMishitsAllowed();
        expect(game.getMishitsAllowed()).toBe(initial);
    });

    it('should correctly validate number of highlighted pieces piece', function () {
        var pieces = game.drawPieces(),
            highligthed = 0;
        for (var i = 0; i < pieces.length; i++) {
            if (game.validateColors(i)) {
                highligthed++;
            }
        }
        expect(highligthed).toBe(1);
    });

});

