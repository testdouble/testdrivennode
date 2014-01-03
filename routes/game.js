// Fake it til you make it
var inProgress = {
  status: 'inprogress',
  turn: "yours",
  primaryGrid: [
    [{state:"hit", ship: "ship"}, {state:"none", ship:"ship"}, {state:"none", ship:"ship"}],
    [{state:"none"}, {state:"miss"}, {state:"none"}], 
    [{state:"none"}, {state:"none"}, {state:"none"}]
  ],
  trackingGrid: [
    [{state:"none"}, {state:"hit"}, {state:"none"}],
    [{state:"none"}, {state:"hit"}, {state:"miss"}], 
    [{state:"none"}, {state:"none"}, {state:"none"}]
  ]
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