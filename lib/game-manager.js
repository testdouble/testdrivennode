"use strict";
var Q = require('Q');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/battleship');
var conn = mongoose.connection;

var games = conn.collection('games');
var insertGame = Q.nfbind(games.insert.bind(games));
var findOne = Q.nfbind(games.findOne.bind(games));

function saveGame(game) {
  return insertGame(game);
}

function findById(id) {
  return findOne({"id": id});
}

module.exports = {
  saveGame: saveGame,
  findById: findById
};