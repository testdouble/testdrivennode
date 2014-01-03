var frisby = require('frisby');
var root = "http://localhost:3000";
var gamesPath = "/games"

frisby.create('Game starts when a user POSTs a new game')
  .post(root + gamesPath)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  // .inspectJSON()
  .expectJSON({ status: "setup" })
  .expectJSONTypes({ id: Number })
.toss();

frisby.create('Setup ends when a user updates game with PUT')
  .put(root + gamesPath + "2")
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({})
// .toss();
