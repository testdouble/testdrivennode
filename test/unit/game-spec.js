var Game = require('../../lib/game');

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
});

