var GameManager = require('../lib/game-manager');

exports.create = function(req, res, next){
  GameManager.findById(req.params.id)
  .then(function(game) {
    var result = {
      x: req.body.x,
      y: req.body.y,
      hit: game.shoot(req.body.x, req.body.y)
    };
    GameManager.updateGame(game).then(function(game) {
      res.send(result);
    }).fail(function(err) {
      res.status(400).send("Shot failed: " + err);
    });
  });
};
