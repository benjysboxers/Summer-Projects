let randomNumber;
let numberguess;
let message;
let previousGuesses = [];
function validation() {
  //Generate a random number between 1 and 100
  randomNumber = parseInt(Math.random() * 100 + 1);
  numberguess = document.getElementById("inputfrm").value;
  message = document.getElementById("msg");
  if (isNaN(numberguess)) {
    alert('Please enter a valid number')
  }else if(numberguess < 1){
    alert('Please enter a number greater than 1')
  }
}