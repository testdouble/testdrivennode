var Game = require('../lib/game');
// Fake it til you make it

var games = [new Game()];

var createGame = function(){
  var g = new Game();
  games.push(g);
  return g;
};


function findGame(id) {
  return games.filter(function (game) {
    return game.id === id;
  })[0];
}

exports.list = function(req, res){
  res.send(games);
};

exports.show = function(req, res, next){
  var game = findGame(req.params.id);
  if (game) {
    res.send(game);
  } else {
    res.status(404).send("Game not found");
  }
};

exports.create = function(req, res, next){
  res.send(createGame());
};

exports.update = function(req, res, next){
  var game = findGame(req.params.id);
  if (game) {
    game.primaryGrid = req.body.primaryGrid;
    game.status = "inprogress";
    game.turn = "yours";
    res.send(game);
  } else {
    res.status(404).send("Game not found");
  }
};
