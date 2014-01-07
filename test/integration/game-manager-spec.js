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
      it("returns a single game object", function() {
        GameManager.findById(game.id)
          .then(function(queryResult) {
            expect(queryResult.id).toBe(game.id);
        });
      });
    });
  });
});
