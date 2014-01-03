var url = require('url');
var frisby = require('frisby');
var root = "http://localhost:3000";
var gamesURI = root + "/games";
var gameId;
var fakeGrid = [
  [{state:"none", ship: "ship"}, {state:"none", ship:"ship"}, {state:"none", ship:"ship"}],
  [{state:"none"}, {state:"miss"}, {state:"none"}],
  [{state:"none"}, {state:"none"}, {state:"none"}]
]

function gameURI() {
  return gamesURI + "/" + gameId;
}

frisby.create('Game starts when a user POSTs a new game')
  .post(gamesURI)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    // .inspectJSON()
    .expectJSON({ status: "setup", })
    .expectJSONTypes({ id: Number })
    .afterJSON(function(data) {
      gameId = data.id;
    })
.toss();

frisby.create('Setup ends when a user updates game with PUT')
  .put(gameURI(), {
    id: gameId,
    status: "setup",
    primaryGrid: fakeGrid
  }, { json: true })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON({
      status: "inprogress",
      turn: "yours",
      trackingGrid: function(grid) { expect(grid.length).toBe(3) }
    })
    .afterJSON(function(data) {
      console.log(gameURI);
    })
.toss();

frisby.create('Poll for game state via GET /games/:id')
  .get(gameURI())
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();

frisby.create('Fire a shot via POST /games/:id/shots')
  .post(gameURI() + '/shots')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();
