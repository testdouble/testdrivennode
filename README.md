# testdrivennode

## Test Driven Node.js Precompiler for Codemash 2014

[![Build Status](https://travis-ci.org/testdouble/testdrivennode.png)](https://travis-ci.org/testdouble/testdrivennode)

## Getting started

1. Install [Node.js](http://nodejs.org)
2. Clone this repo, change into the project directory, and run `npm install`
3. To run the server, open a new terminal and `nodemon app.js`
4. To run the tests, run `npm test`
5. To re-run the tests each time a file changes, open a new terminal and `nodemon --exec npm test`


## API

* POST `/games` `#create` - starts the game.
* GET `/games/:id` `#show` - game state
* PUT `/games/:id` `#update` - used once per game to place the ships
* POST `/games/:gameId/shots` `#create` - this is how the user ends a turn


## JSON Structure

### Game

```JavaScript
{
  status: ("setup" | "inprogress" | "won" | "lost"),
  turn: ("yours" | "opponents"),
  primaryGrid:
      [
        [{state:"none", ship: "ship"}, {state:"hit", ship:"ship"}, {state:"none", ship:"ship"}],
        [{state:"miss"}, {state:"miss"}, {state:"miss"}],
        [{state:"none"}, {state:"none"}, {state:"none"}]
      ]
  trackingGrid:
      [
...
      ]
}
```

### Shot

```JavaScript
{
  x: 0,
  y: 1,
  hit: [true | false],
  sunk: ["none sunk" | [shipType]]
}
```
