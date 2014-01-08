"use strict";

function Board() {

  this.rows = 3;
  this.columns = 3;
  this.hits = 0;
  this.grid = createGrid(this.rows, this.columns);

  this.place3SpotShip = function(x, y, orientation) {
    this.grid[x][y].ship = 'ship';
    if (orientation === 'horizontal') {
      this.grid[x+1][y].ship = 'ship';
      this.grid[x+2][y].ship = 'ship';
    }
    else {
      this.grid[x][y+1].ship = 'ship';
      this.grid[x][y+2].ship = 'ship';
    }
    return this;
  }

  this.shoot = function(x, y) {
    if (this.grid[x][y].ship === 'ship') {
      this.grid[x][y].state = 'hit';
      this.hits++;
    }
    else {
      this.grid[x][y].state = 'miss';
    }
    return this.grid[x][y].state;
  }

  this.shipIsSunk = function() {
    return (this.hits === 3);
  }

  function createGrid(rows, columns) {
    var grid = [];
    for(var i=0; i<columns; i++) {
      grid[i] = [];
      for(var j=0; j<rows; j++) {
        grid[i][j] = { state: 'none' };
      }
    }
    return grid;
  }
}

module.exports = Board;
