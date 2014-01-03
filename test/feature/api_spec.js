var frisby = require('frisby');
var root = "http://localhost:3000";
var gamesPath = "/games";
var id = 2;

frisby.create('Game starts when a user POSTs a new game')
  .post(root + gamesPath)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  // .inspectJSON()
  .expectJSON({ status: "setup" })
  .expectJSONTypes({ id: Number })
.toss();

frisby.create('Setup ends when a user updates game with PUT')
  .put(root + gamesPath + "/" + id)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();

frisby.create('Poll for game state via GET /games/:id')
  .get(root + gamesPath + "/" + id)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();

frisby.create('Fire a shot via POST /games/:id/shots')
  .post(root + gamesPath + '/' + id + '/shots')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();
