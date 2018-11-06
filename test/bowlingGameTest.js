
// Using chai's assert library 
const assert = require("chai").assert;
const app = require("../bowlingGame.js");

describe("Bowling Game", function(){
    // Declaring game variable 
    var game; 

    // This is set to a new game before each test 
    beforeEach(function(){
        // Game is the object imported from our app.js
        game = new app.BowlingGame();
    });
    
    it("can roll all gutters", function(){
        // rollMany Function declared at the end of this file, it takes the number of pins dropped and rolls left. It then uses the constructors roll function to take the pins and push to rolls array. The score is then checked with the constructors score functoin "game.score()"

        rollMany(0, 20);
        assert.equal(game.score(), 0);
    })

    it("can roll all ones", function(){
        // Bowling ten frames with 1 pin on each roll should result in 20
        rollMany(1, 20);
        assert.equal(game.score(), 20)

    })

    it("can roll spares", function(){
        // The game.roll function pushes the pins to the "rolls" array that is then used to take find score with the game.score() function. 
        game.roll(4);
        game.roll(6);
        game.roll(5);
        rollMany(0, 17);

        assert.equal(game.score(), 20);
    })

    it("can roll a strike", function(){
        game.roll(10);
        game.roll(4);
        game.roll(4);
        rollMany(0, 16);

        assert.equal(game.score(), 26);
    })

    it("can roll a perfect game", function(){
        rollMany(10, 12);

        assert.equal(game.score(), 300);
    })

    it("Checking a random game score that should end in 69", function(){
        game.roll(4);
        game.roll(4);
        game.roll(10);
        game.roll(5);
        game.roll(3); 
        game.roll(10);
        game.roll(3);
        game.roll(5);
        game.roll(8);
        game.roll(1);
        rollMany(0, 8);

        assert.equal(game.score(), 69)
    })

    

    var rollMany = function(pins, rolls){
        for (var i = 0; i < rolls; i++){
            game.roll(pins)
        }
        
    }

});