describe('Controller', function () {

    beforeEach(function () {
        game.resetAll();
    });

    it('should call initializing functions in model and view in startGame', function () {
        spyOn(game, 'initializePieces');
        spyOn(view, 'renderPieces');
        controller.startGame();
        expect(game.initializePieces).toHaveBeenCalled();
        expect(view.renderPieces).toHaveBeenCalledWith(game.getNumberOfPieces());
    });

    it('should call correct functions in resetGame', function () {
        spyOn(view, 'removePieces');
        spyOn(game, 'resetAll');
        spyOn(view, 'setLevel');
        spyOn(view, 'setLeftToGuess');
        spyOn(view, 'setAccuracy');
        spyOn(view, 'setPreviewTime');
        spyOn(view, 'setMishitsAllowed');
        spyOn(view, 'renderPieces');
        controller.resetGame();
        expect(view.removePieces).toHaveBeenCalledWith(game.getNumberOfPieces());
        expect(game.resetAll).toHaveBeenCalled();
        expect(view.setLevel).toHaveBeenCalledWith(game.getUserLevel());
        expect(view.setLeftToGuess).toHaveBeenCalledWith(0);
        expect(view.setAccuracy).toHaveBeenCalledWith(game.getAccuracy());
        expect(view.setMishitsAllowed).toHaveBeenCalledWith(game.getMishitsAllowed());
        expect(view.setPreviewTime).toHaveBeenCalledWith(game.getPreviewTime());
        expect(view.renderPieces).toHaveBeenCalledWith(game.getNumberOfPieces());
    });

    it('should call methods to increase preview time', function () {
        spyOn(game, 'increasePreviewTime');
        spyOn(view, 'setPreviewTime');
        controller.increasePreviewTime();
        expect(view.setPreviewTime).toHaveBeenCalledWith(game.getPreviewTime());
    });

    it('should call methods to decrease preview time', function () {
        spyOn(game, 'decreasePreviewTime');
        spyOn(view, 'setPreviewTime');
        controller.decreasePreviewTime();
        expect(view.setPreviewTime).toHaveBeenCalledWith(game.getPreviewTime());
    });

    it('should call methods to increase mishits allowed', function () {
        spyOn(game, 'increaseMishitsAllowed');
        spyOn(view, 'setMishitsAllowed');
        controller.increaseMishitsAllowed();
        expect(view.setMishitsAllowed).toHaveBeenCalledWith(game.getMishitsAllowed());
    });

    it('should call methods to decrease mishits allowed', function () {
        spyOn(game, 'decreaseMishitsAllowed');
        spyOn(view, 'setMishitsAllowed');
        controller.decreaseMishitsAllowed();
        expect(view.setMishitsAllowed).toHaveBeenCalledWith(game.getMishitsAllowed());
    });

});