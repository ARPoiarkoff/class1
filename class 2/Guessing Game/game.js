// program data:
var number = 4;
var guess;
var limit = 5;
var won =  false;
var guesses = [];

for (i = 0; i <= limit; i++)
{
    // prompt user for their guess 
    guess = parseInt(prompt("Guess a number"));
    

    // if correct: let the user know they won
    if(guess == number)
    {
        document.write("Correct! You won.");
        won = true;
        break;
    }
    else if(isPreviousGuess(guess) == true)
    {
        i--;
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

function isPreviousGuess(number)
{
    for(x = 0; x < guesses.length; x++)
    {
        if(guesses[x] == number)
        {
            return true;
            break;
        }
      
        return false;  
    }
    
}
