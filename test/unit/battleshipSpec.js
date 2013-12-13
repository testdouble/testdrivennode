"use strict";

var Battleship = function() {

  this.grid = createGrid(3,3);

  this.place3SpotShip = function(x, y, orientation) {
    this.grid[x][y] = 'ship';
    if (orientation == 'horizontal') {
      this.grid[x+1][y] = 'ship';
      this.grid[x+2][y] = 'ship';
    }
    else {
      this.grid[x][y+1] = 'ship';
      this.grid[x][y+2] = 'ship';
    }
    return this;
  }

  function createGrid(rows, columns) {
    var grid = [];
    for(var i=0; i<columns; i++) {
      grid[i] = [];
      for(var j=0; j<rows; j++) {
        grid[i][j] = 'empty';
      }
    }
    return grid;
  }

} 

// Constraints
// Single ship
// 3x3 grid
// ship length of 3


// Container is Battleship
// Tests around placing off the board


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

    // Exercise for the reader
    // No placement off the board
  });

});