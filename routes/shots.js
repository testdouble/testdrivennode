var gamesRoute = require('./games');

exports.create = function(req, res, next){
  var game = gamesRoute.findGame(req.params.id);

  if (game) {
    res.send({
      x: req.body.x,
      y: req.body.y,
      hit: game.shoot(req.body.x, req.body.y)
    });
  } else {
    res.status(404).send("Game not found");
  }
};
