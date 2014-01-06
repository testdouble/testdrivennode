// Fake it til you make it
var inProgress = {
  id: "1",
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

var games = [inProgress];

var createGame = function(){
  var id = 1;
  var g = {
    id: (id++).toString(),
    status: 'setup'
  };
  games.push(g);
  return g;
};

var emptyGrid = [
  [{state:"none"}, {state:"none"}, {state:"none"}],
  [{state:"none"}, {state:"none"}, {state:"none"}],
  [{state:"none"}, {state:"none"}, {state:"none"}]
];


function findGame(id) {
  return games.filter(function (game) {
    return game.id === id;
  })[0];
}

exports.list = function(req, res){
  res.send(games);
};

exports.show = function(req, res, next){
  var game = findGame(req.params.id);
  if (game) {
    res.send(game);
  } else {
    res.status(404).send("Game not found");
  }
};

exports.create = function(req, res, next){
  res.send(createGame());
};

exports.update = function(req, res, next){
  var game = findGame(req.params.id);
  if (game) {
    game.primaryGrid = req.body.primaryGrid;
    game.trackingGrid = emptyGrid;
    game.status = "inprogress";
    game.turn = "yours";
    res.send(game);
  } else {
    res.status(404).send("Game not found");
  }
};