/*
Give them amount of guesses
*/

//initialize variables
//target word
const correctWord = "Chocolate";
let numGuesses =10;
let guessWord = "";
let message = "";
const messageContainer = document.getElementById("messageContainer");

//function to check the similarity of the guess to the target word

function checkGuess(guess) {
    if(guess === correctWord){
    message = "Congratulations! Word guessed correctly!"
    }else{
        let count = 1;

        //comparing each character of the guess with the target word
        for (let i = 0; i < correctWord.length; i++){
            if (guess[i] && guess[i] === correctWord[i]){
                count++;
            }
        }
        
        //providing feedback based on similarity
        if (count === 0){
            message= "You are getting colder";
        }else if (count ==- correctWord.length){
            message-"you are getting hotter.";
        }else{
            message = "you are getting warmer.";
        }
    }
}

//function to handle the guess submission
document.getElementById("guessWord").onclick = function(e){
    e.preventDefault();
    guessWord = document.getElementById("guessInput").value;
    checkGuess(guessWord);
    messageContainer.textContent = message;
    if(guessWord === correctWord){
        messageContainer.textContent = "Congratulations! Word guessed correctly"
    }
    numGuesses--;
    if(numGuesses === 0 && guessWord != correctWord){
        messageContainer.textContent = `Game over. You have run out of guesses, Correct word was ${correctWord} `;
    }
}


