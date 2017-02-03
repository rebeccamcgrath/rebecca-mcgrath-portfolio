//Example of adventure

// var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze out the window and sigh");
//
// if (response === "sit") {
//   response = prompt("New prompt, new options")
// }
// // else if (response === "gaze") {
// //   response = prompt("Different prompt, different options");
//         if (response === "gaze") {
//           response = prompt();
//         }
// }
// else {
//   alert("Please type in a valid input! Refresh the page to try agan.");
// }


//Begin my choose your own adventure
var response = prompt("Welcome to the Choose Your Own Adventure Game:  Vacation Edition. Type 'play' to get started.");

if (response === "play") {
  response = prompt("Vacations are always fun. Deciding where to vacation can be hazardous. Would you like to head north or south?");
    if (response === "north") {
      response = prompt("You go north and find yourself standing in the snowy tundra of Canada. Brr...It's cold. Did you bring beer, coffee, or whiskey to keep warm?");


        if (response === "coffee" || response === "whiskey") {
        response = prompt("Good choice! That will keep you warm! You look at your watch and exclaim 'Look at the time! I have to be back to my igloo before sunset!' What time is it? (24 hour Clock)");
          if (response <= '17') {
            response = prompt("You have plenty of time to get back to your igloo. You snuggle in for a good night's sleep with your sled dogs. THE END.");
          }
          else if (response >='17'){
            response = alert("The sun went down and you turn into a snowman. Refresh to play again.")
          }
          else {
            response = alert("You sat in the snow thinking for too long and froze to death. Refresh to play again.")
          }
        }
        else if (response === "beer") {
        response = alert("You drank a cold beer in freezing conditions and froze to death. Refresh to play again.");
        }
        else {
        response = alert("You decided not to drink anything. You die of dehydration. Refresh to play again.");
        }
    }

    else if (response === "south") {
      response = prompt("You go south and find yourself in Pensacola. Ahh... sand and sea. Which one do you go for first?");

      if (response === "sand") {
      response = prompt("The sand is so relaxing. However the sun can get hot! Do you put on shoes, sunscreen or shoes and sunscreen?");

        if (response === "shoes and sunscreen") {
          response = prompt("You have a fabulous time at the beach. THE END.")
        }
        else if (response === "shoes") {
          response = alert("Shoes are only helpful to your feet! You get third-degree burns and die. Refresh to play again.");
        }
        else if (response === "sunscreen") {
          response = alert("Sunscreen doesnt hide you from the heat! You get heat exhaustion and die. Refresh to play again.");
        }
      }
      else if (response === "sea") {
      response = alert("'AHH! SHARK!' You get eaten. Refresh to play again.");
      }
      else {
      response = alert("You couldn't choose an activity and sat in your hotel alone. Refresh to play again.");
      }
    }

    else {
      alert("You decided to stay put. You are now in Nashville. Please refresh the page and choose to go north or south to continue.");
    }
}
else {
  alert("In life you must always choose yes or no. Refresh the page to play.")
}
