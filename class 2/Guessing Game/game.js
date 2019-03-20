// program data:
var number = 4;
var guess;
var limit = 5;
var won =  false;
var guesses = [];
var previous = false;

for (i = 1; i <= limit; i++)
{
    // prompt user for their guess 
    guess = parseInt(prompt("Guess a number"));
    previous = isPreviousGuess(guess);

    // if correct: let the user know they won
    if(guess == number)
    {
        document.write("Correct! You won.");
        won = true;
        break;
    }
    else if(previous == true)
    {
        i=i-1;
        alert("You have already guessed this number"+ "\nTries remaining: " + (limit - i));
        
    }
     // if incorrect: add number to guesses array
    else
    {
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
}

// if the user ran out of tries, let them know the game is over
if(!won)
{
    document.write("Sorry, you ran out of tries. Game over.");
}

function isPreviousGuess(guess)
{
    for(i = 0; i < guesses.length; i++)
    {
        if(guesses[i] == guess)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
}
