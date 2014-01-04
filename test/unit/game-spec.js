var Game = require('../../lib/game');

describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("has a board for the player", function(){
    expect(game.playerBoard).not.toBe(null);
  });
});

