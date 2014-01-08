"use strict";
var Q = require('Q');
var Game = require('./game');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/battleship');
var conn = mongoose.connection;

var games = conn.collection('games');
var insertGame = Q.nfbind(games.insert.bind(games));
var update = Q.nfbind(games.update.bind(games));
var findOne = Q.nfbind(games.findOne.bind(games));

function createGame(game) {
  return insertGame(game);
}

function updateGame(game) {
  return update(
    {id: game.id},
    game,
    {upsert:false, multi: false}
  );
}

function findById(id) {
  return findOne({"id": id})
  .then(function(gameJSON){
    return new Game(gameJSON);
  });
}

module.exports = {
  createGame: createGame,
  findById: findById,
  updateGame: updateGame
};