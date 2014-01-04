"use strict";

function Opponent(board) {

  this.board = board;

  this.place3SpotShip = function() {
    board.place3SpotShip(0, 0, 'horizontal');
  }

  this.shoot = function(playersBoard) {
    for (var x=0; x<playersBoard.columns; x++) {
      for (var y=0; y<playersBoard.rows; y++) {
        if (playersBoard.grid[x][y] == "empty") {
          playersBoard.shoot(x,y);
          return;
        }
      }
    }
  }
} 

module.exports = Opponent;
