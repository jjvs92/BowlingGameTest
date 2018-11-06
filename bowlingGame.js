// Creating bowling game constructor with an empty array to store the rolls

var BowlingGame = function(){
    this.rolls = [];
}; 

// Creating a Roll function that will work to take the pins dropped on each roll and push to the empty array to later use for score 

BowlingGame.prototype.roll = function (pins){
    this.rolls.push(pins);
}

// Creating the score prototype that will host multiple functions to take scores and treat as spare or strike when needed 

BowlingGame.prototype.score = function(){

    // Score begins at 0
    var result = 0;
    // rollIndex is the exact turn the ball was thrown in. Depending on the roll index the application knows if it is a strike, spare, or open frame
    var rollIndex = 0;
    // Set game equal to this for scope purposes 
    var game = this;

    // This forloop will go through the 10 frames in a bowling game
    for (var frame =0; frame < 10; frame++){

        // Check for a strike using the isStrike function

        if (isStrike()){

            // The result that began at 0 is manipulated by the getStrikeScore function. 
            result += getStrikeScore();
            // RollIndex goes up by one only due to the frame only needing the one roll
            rollIndex ++;
        }
        // check for a spare using the isSpare function
        else if(isSpare()){

            // The result is manipuladted by getSpareScore function 
            result += getSpareScore();
            // The rollIndex is added by two to get to the next frame in the rolls array
            rollIndex += 2;

        } else {
            // The result is manipulated by getRegularScore function 
            result += getRegularScore();
            // The rollIndex is added by two to get to the next frame in the rolls array like we do in the spare
            rollIndex += 2;

        }
    }
    // After looping through all the frames we return the score
    return result;

    // isStrike function checks in the rolls array the rollIndex. If the roll index equals 10, it is a strike 
    function isStrike(){
        return game.rolls[rollIndex] == 10;
    }
    // getStrikeScore function adds the current roll index's number in the rolls array, and adds it with the next two
    function getStrikeScore(){
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }
    // isSpare function takes the current roll index and the one that follows. if they add up to 10 then it is a spare
    function isSpare(){
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    }
    // getSpareScore function adds the current roll index's number in the rolls array, and adds it with the next two
    function getSpareScore(){
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2]   
    }
    // getRegularScore takes the current rollIndex and add the one that follows. 
    function getRegularScore(){
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1]
    }
}

// Exporting BowlingGame constructor to use in the testing file
module.exports.BowlingGame = BowlingGame;