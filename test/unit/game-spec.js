var Game = require('../../lib/game');
var sandbox = require('sandboxed-module');

describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("has a grid for the player", function(){
    expect(game.primaryGrid).toBeDefined();
  });

  it("has a grid for the opponent", function(){
    expect(game.trackingGrid).toBeDefined();
  });

  it("has a unique id", function(){
    expect(game.id).not.toBe(new Game().id);
  });

  describe("unique id", function() {
    var mockUUID = {v4: jasmine.createSpy("v4").andReturn(13)};
    var MockedGame = sandbox.require('../../lib/game', {
      requires: {
        'node-uuid': mockUUID
      }
    });

    it("should pull the unique id from the v4 function of UUID", function() {
      game = new MockedGame();
      expect(game.id).toBe(13);
      expect(mockUUID.v4).toHaveBeenCalled();
    });
  });
});

