var GameManager = require('../lib/game-manager');

exports.create = function(req, res, next){
  GameManager.findById(req.params.id)
  .then(function(game) {
    if (game) {
      res.send({
        x: req.body.x,
        y: req.body.y,
        hit: game.shoot(req.body.x, req.body.y)
      });
    } else {
      res.status(404).send("Game not found");
    }
  });
};
