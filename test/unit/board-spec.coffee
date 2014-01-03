Board = require("../../lib/board")

describe "Board", ->
  Given -> @subject = new Board()

  describe "initial state", ->
    Then -> @subject.grid[0][0] == "empty"
    And -> @subject.grid[2][2] == "empty"
    And -> @subject.grid[3] == undefined

  describe "#place3SpotShip", ->
    Given -> [@x, @y] = [0, 0]
    Given -> @orientation = "horizontal"

    When -> @result = @subject.place3SpotShip(@x, @y, @orientation)
    Then -> @result == @subject
    And -> @subject.grid[0][0] == "ship"
    And -> @subject.grid[1][0] == "ship"
    And -> @subject.grid[2][0] == "ship"

# TODO: No placement off the board
