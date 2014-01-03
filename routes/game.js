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
  status: 'setup',
  id: 2,
};

var emptyGrid = [
  [{state:"none"}, {state:"none"}, {state:"none"}],
  [{state:"none"}, {state:"none"}, {state:"hit"}],
  [{state:"none"}, {state:"none"}, {state:"none"}]
];

var games = [inProgress, notStarted];
exports.list = function(req, res){
  res.send(games);
};

exports.loadById = function(req, res, next){
  var id = req.params.id;
  res.send(games[id] || games[0]);
};

exports.create = function(req, res, next){
  res.send(games[1]);
};

exports.update = function(req, res, next){
  games.filter(function(e) { return e.id === parseInt(req.params.id); });
  games[1].primaryGrid = req.params.primaryGrid;
  games[1].trackingGrid = emptyGrid;
  games[1].status = "inprogress";
  games[1].turn = "yours";
  res.send(games[1]);
};
