"use strict";

var Opponent = require('./opponent');
var Board = require('./board');
var uuid = require('node-uuid');

function Game(gameJSON) {
  // Keep the board instance classes private to maintain
  // fine grain control over JSON structure.
  var primaryBoard = new Board();
  var trackingBoard = new Board();
  var self = this;

  if (gameJSON) {
    this.trackingGrid = gameJSON.trackingGrid;
    this.primaryGrid = gameJSON.primaryGrid;
    trackingBoard.grid = this.trackingGrid;
    primaryBoard.grid = this.primaryGrid;
    this.status = gameJSON.status;
    this.id = gameJSON.id;
  }
  else {
    this.trackingGrid = trackingBoard.grid;
    this.primaryGrid = primaryBoard.grid;
    this.status = "setup";
    this.id = uuid.v4();
  }

  this.opponent = new Opponent();

  this.setPrimaryGrid = function(grid) {
    primaryBoard.grid = grid;
    self.primaryGrid = grid;
    return self;
  };

  this.shoot = function(x, y) {
    var result = trackingBoard.shoot(x, y);
    if (trackingBoard.shipIsSunk()) {
      this.status = "won";
    }
    else {
      self.opponent.shoot(primaryBoard);
      if (primaryBoard.shipIsSunk()) {
        this.status = "lost";
      }
    }
    return result;
  };

  this.placeAiShip = function() {
    trackingBoard.place3SpotShip(0, 0);
    return self;
  };

}

module.exports = Game;
