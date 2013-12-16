var Battleship = require('../../lib/battleship');

describe("battleship", function() {
  var battleship;
  beforeEach(function(){
    battleship = new Battleship();
  });

  describe("initialization" , function() {
    it("has a blank 3x3 grid", function() {
      expect(battleship.grid[0][0]).toBe("empty");
      expect(battleship.grid[2][2]).toBe("empty");
      expect(battleship.grid[3]).toBe(undefined);
    });
  });

  describe("place3SpotShip", function() {
    var result, x = 0, y = 0, orientation = 'horizontal';

    beforeEach(function(){
      result = battleship.place3SpotShip(x, y, orientation);
    });

    it("is chainable (e.g. returns the battleship)", function () {
      expect(result).toBe(battleship);
    });

    it("marks the grid", function() {
      expect(battleship.grid[0][0]).toBe("ship");
      expect(battleship.grid[1][0]).toBe("ship");
      expect(battleship.grid[2][0]).toBe("ship");
    });

    // TODO: No placement off the board
  });

});
