var Opponent = require('../../lib/opponent');
var Board = require('../../lib/board');

describe("Opponent", function() {
  var opponent;

  beforeEach(function(){
    opponent = new Opponent();
  });

  describe("placement", function() {
    var board = new Board();

    it("places the ship in the upper left, horizontally", function() {

      opponent.place3SpotShip(board);

      expect(board.grid[0][0]).toBe("ship");
      expect(board.grid[1][0]).toBe("ship");
      expect(board.grid[2][0]).toBe("ship");
      expect(board.grid[0][1]).toBe("empty");
      expect(board.grid[1][1]).toBe("empty");
      expect(board.grid[2][1]).toBe("empty");
      expect(board.grid[0][2]).toBe("empty");
      expect(board.grid[1][2]).toBe("empty");
      expect(board.grid[2][2]).toBe("empty");
    });
  });

  describe("firing", function() {
    var playersBoard = new Board();

    it('should start in the upper left', function() {
      opponent.shoot(playersBoard);
      expect(playersBoard.grid[0][0]).toBe('miss');
    });

    it('should proceed across the first row', function() {
      opponent.shoot(playersBoard);
      expect(playersBoard.grid[0][1]).toBe('miss');
      opponent.shoot(playersBoard);
      expect(playersBoard.grid[0][2]).toBe('miss');
    });

    it('should then move to the first column, next row', function() {
      opponent.shoot(playersBoard);
      expect(playersBoard.grid[1][0]).toBe('miss');
    })

    it('should finally fill the board with shots', function() {
      opponent.shoot(playersBoard);
      opponent.shoot(playersBoard);
      opponent.shoot(playersBoard);
      opponent.shoot(playersBoard);
      opponent.shoot(playersBoard);
      expect(playersBoard.grid[2][2]).toBe('miss');
    })
  });
});

