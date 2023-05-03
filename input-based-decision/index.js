let numberguess;
let guessText
let message;
document.getElementById("checkGuess").onclick = function(e){
    e.preventDefault()
    guessText = "Chocolate"
    numberguess = document.getElementById("decisionguess").value;
    message = document.getElementById("message");
    if (numberguess == guessText){
        message.innerHTML = "Correct!";
    } else if (numberguess != guessText ){
        message.innerHTML = "Incorrect Text, Try Again!";
    }
};