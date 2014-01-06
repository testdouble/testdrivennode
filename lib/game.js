"use strict";

var Opponent = require('./opponent');
var Board = require('./board');
var uuid = require('node-uuid');

function Game() {

  this.trackingGrid = new Board().grid;
  this.primaryGrid = new Board().grid;
  this.opponent = new Opponent();
  this.status = "setup";
  this.slug = uuid.v4();
  this.id = this.slug; //FIXME Decide on slug vs ID

}

module.exports = Game;
