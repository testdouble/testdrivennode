"use strict";

var Opponent = require('./opponent');
var Board = require('./board');
var uuid = require('node-uuid');

function Game() {

  this.trackingGrid = new Board();
  this.primaryGrid = new Board();
  this.opponent = new Opponent();
  this.status = "notstarted";
  this.slug = uuid.v4();

}

module.exports = Game;
