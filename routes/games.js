var Game = require('../lib/game');
var GameManager = require('../lib/game-manager');

// TODO: Kill these in favor of GameManager
var games = []
function findGame(id) {
  return games.filter(function (game) {
    return game.id === id;
  })[0];
}

exports.games = games;
exports.findGame = findGame;

exports.list = function(req, res){
  res.send(games);
};

exports.show = function(req, res, next){
  var game = findGame(req.params.id); //TODO: kill
  // GameManager.findByID(req.params.id).then(function(result){});
  if (game) {
    res.send(game);
  } else {
    res.status(404).send("Game not found");
  }
};

exports.create = function(req, res, next){
  var game = new Game();
  game.placeAiShip();
  games.push(game); //TODO: kill
  // GameManager.save(game);
  res.send(game);
};

exports.update = function(req, res, next){
  var game = findGame(req.params.id); //TODO: kill
  // GameManager.findByID(req.params.id).then(function(result){});
  if (game) {
    game.setPrimaryGrid(req.body.primaryGrid);
    game.status = "inprogress";
    game.turn = "yours";
    res.send(game);
  } else {
    res.status(404).send("Game not found");
  }
};
