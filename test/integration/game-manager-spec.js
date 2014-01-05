var GameManager = require('../../lib/game-manager');
var Game = require('../../lib/game');

describe("GameManager", function() {
  var game;
  beforeEach(function(){
    game = new Game();
  });

  describe("saveGame" , function() {
    var result;
    beforeEach(function(done) {
      GameManager.saveGame(game)
      .then(function(insertedGame) {
        result = insertedGame;
        done();
      });
    });

    it("returns the game", function() {
      expect(result).not.toBe.null;
    });
    it("generates an id", function() {
      expect(result._id).not.toBe.null;
    });
  });
});
