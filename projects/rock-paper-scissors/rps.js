var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'.").toUpperCase();
console.log(userChoice);
var rng = Math.random();
var computerChoice = "R";

if(rng > 0.66) {
  computerChoice = "P"
} else if(rng > 0.33) {
  computerChoice = "S";
}
console.log(computerChoice);
//Rock beats Scissors
//Scissors beats Paper
//Paper beats Rock

var userWins = "You win!";
var computerWins = "The computer wins!";

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
