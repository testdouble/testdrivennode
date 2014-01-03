var Board = require('../../lib/board');

describe("Board", function() {
  var board;
  beforeEach(function(){
    board = new Board();
  });

  describe("initialization" , function() {
    it("has a blank 3x3 grid", function() {
      expect(board.grid[0][0]).toBe("empty");
      expect(board.grid[2][2]).toBe("empty");
      expect(board.grid[3]).toBe(undefined);
    });
  });

  describe("place3SpotShip", function() {
    var result, x = 0, y = 0, orientation = 'horizontal';

    beforeEach(function(){
      result = board.place3SpotShip(x, y, orientation);
    });

    it("is chainable (e.g. returns the board)", function () {
      expect(result).toBe(board);
    });

    it("marks the grid", function() {
      expect(board.grid[0][0]).toBe("ship");
      expect(board.grid[1][0]).toBe("ship");
      expect(board.grid[2][0]).toBe("ship");
    });

    // TODO: No placement off the board
  });

  describe("shoot", function() {
    beforeEach(function() {
      board.place3SpotShip(0,0, 'horizontal');
    });

    it("returns the result of a fire", function() {
      expect(board.shoot(0,0)).toBe("hit");
      expect(board.shoot(2,2)).toBe("miss");
    });

    it("mutates the state of the board on hits", function() {
      expect(board.grid[0][0]).toBe("ship");
      board.shoot(0,0);
      expect(board.grid[0][0]).toBe("hit");
    });

    it("mutates the state of the board on hits", function() {
      expect(board.grid[2][2]).toBe("empty");
      board.shoot(2,2);
      expect(board.grid[2][2]).toBe("miss");
    });
  });

});
