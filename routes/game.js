// Fake it til you make it
var inProgress = {
  status: 'inprogress',
  turn: "yours",
  boards: {
    yours: [
      ["hit", "ship", "ship"],
      ["empty", "miss", "empty"],
      ["empty", "empty", "empty"]
    ],
    opponents: [
      ["empty", "hit", "empty"],
      ["empty", "hit", "empty"],
      ["empty", "empty", "miss"]
    ]
  }
};
var notStarted = {
  status: 'setup'
};

var games = [inProgress, notStarted];
exports.list = function(req, res){
  res.send(games);
};

exports.loadById = function(req, res, next){
  var id = req.params.id;
  res.send(games[id] || games[0]);
};