function findGame(gameId) {
  return true;
}

exports.create = function(req, res, next){
  var game = findGame(parseInt(req.params.id));

  if (game) {
    res.send({
      x: req.body.x,
      y: req.body.y,
      hit: false,
      sunk: "none sunk"
    });
  } else {
    res.status(404).send("Game not found");
  }
};
