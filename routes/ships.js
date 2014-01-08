var GameManager = require('../lib/game-manager');

exports.create = function(req, res, next){
  GameManager.findById(req.params.id)
  .then(function(game) {
      game.placeShips(req.body.x, req.body.y, req.body.orientation);
      game.status = "inprogress";
      GameManager.updateGame(game).then(function(game) {
        res.send({ status: "OK" });
      }).fail(function(err) {
        res.status(400).send("Create ship failed: " + err);
      });
  });
};
