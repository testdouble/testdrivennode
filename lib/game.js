"use strict";

var Opponent = require('./opponent');
var Board = require('./board');

function Game() {

  this.opponentBoard = new Board();
  this.opponent = new Opponent(this.opponentBoard);
  this.playerBoard = new Board();
  this.status = "notstarted"
} 

module.exports = Game;
