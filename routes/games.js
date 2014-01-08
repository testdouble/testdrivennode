var Game = require('../lib/game');
var GameManager = require('../lib/game-manager');

exports.show = function(req, res, next){
  GameManager.findById(req.params.id)
  .then(function(game) {
    res.send(game);
  })
  .fail(function(err) {
    res.status(400).send("Unable to show game: " + err);
  });
};

exports.create = function(req, res, next){
  var game = new Game();
  GameManager.createGame(game)
  .then(function(games) {
    res.send(games[0]);
  });
};

exports.update = function(req, res, next){
  GameManager.findById(req.params.id)
  .then(function(game){
    game.setPrimaryGrid(req.body.primaryGrid);
    game.status = "inprogress";
    game.turn = "yours";
    GameManager.updateGame(game)
    .then(function(games) {
      res.send(games[0]);
    });
  })
  .fail(function(err) {
    res.status(400).send("Unable to update game: " + err);
  });
};
