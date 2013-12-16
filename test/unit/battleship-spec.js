var Battleship = require('../../lib/battleship');

describe("battleship", function() {
  describe("initialization" , function() {
    var battleship = new Battleship();

    it("exists", function() {
      expect(battleship).not.toBe(undefined);
    });

    it("has a blank 3x3 grid", function() {
      expect(battleship.grid[0][0]).toBe("empty");
      expect(battleship.grid[2][2]).toBe("empty");
      expect(battleship.grid[3]).toBe(undefined);
    });
  });

  describe("place3SpotShip", function() {
    var x = 0;
    var y = 0;
    var orientation = 'horizontal';
    var battleship = new Battleship();

    it("allows you to place a ship", function() {
      expect(battleship.place3SpotShip.bind(null, x, y, orientation)).not.toThrow(Error);
    });

    it("returns the battleship", function () {
      var result = battleship.place3SpotShip(x, y, orientation);
      expect(result).toBe(battleship);
    });

    it("marks the grid", function() {
      var result = battleship.place3SpotShip(0,0, "horizontal");
      var grid = battleship.grid;
      expect(grid[0][0]).toBe("ship");
      expect(grid[1][0]).toBe("ship");
      expect(grid[2][0]).toBe("ship");
    });

    // TODO: No placement off the board
  });

});
