var frisby = require('frisby');
var root = "http://localhost:3000";
var gamesURI = root + "/games";
var gameURI = gamesURI + "/" + gameId;
var shotsURI = gameURI + "/shots";
var gameId;

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
  .put(gameURI)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON({})
.toss();

frisby.create('Poll for game state via GET /games/:id')
  .get(gameURI)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();

frisby.create('Fire a shot via POST /games/:id/shots')
  .post(gamesURI + '/' + gameId + '/shots')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();
