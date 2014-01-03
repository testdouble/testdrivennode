"use strict";

function Board() {

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

  this.shoot = function(x, y) {
    if (this.grid[x][y] == 'ship') {
      this.grid[x][y] = 'hit';
    }
    else {
      this.grid[x][y] = 'miss';
    }
    return this.grid[x][y];
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

module.exports = Board;
