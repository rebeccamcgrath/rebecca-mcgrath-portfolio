var userWins = "Yay! You win!";
var computerWins = "Boo hiss! The computer wins!";
var roundCounter = 0;

//variables outside of the function

  var gameRound = function() {
    var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'.").toUpperCase();
    var computerChoice = "R";
    var rng = Math.random();


  if(rng > 0.66) {
    computerChoice = "P"
  } else if(rng > 0.33) {
    computerChoice = "S";
  }
  console.log(computerChoice);

  //Rules to keep in mind
  //Rock beats Scissors
  //Scissors beats Paper
  //Paper beats Rock

  if(computerChoice !== userChoice) {
    if(computerChoice === "R"){
      if(userChoice === "S") {
        alert(computerWins);
      } else {
          alert(userWins);
        }
      } else if(computerChoice === "P") {
        if(userChoice === "R") {
          alert(computerWins);
        } else {
          alert(userWins);
        }
      } else {
        if(userChoice === "P") {
          alert(computerWins);
        } else {
          alert(userWins);
        }
      }
  } else {
    alert("Tie!");
  }
}

while(roundCounter < 5) {
  gameRound();
  roundCounter++;
}
