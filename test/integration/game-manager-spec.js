var GameManager = require('../../lib/game-manager');
var Game = require('../../lib/game');

describe("GameManager", function() {
  var game;
  beforeEach(function(){
    game = new Game();
  });

  describe("saveGame", function() {
    var result;
    beforeEach(function(done) {
      GameManager.saveGame(game)
      .then(function(insertedGame) {
        result = insertedGame;
        done();
      });
    });

    it("returns an array of inserted rows", function() {
      expect(result.length).toBe(1);
    });

    describe("findById", function() {
      beforeEach(function(done) {
        GameManager.findById(game.id)
        .then(function(game) {
          result = game;
          done();
        });
      });

      it("should retrieve the saved game", function(done) {
        expect(result.id).toBe(game.id);
      });
    });
  });
});
