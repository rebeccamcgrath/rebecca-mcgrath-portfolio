var firstName = prompt('Hello! What is your first name?')|| "Visitor";
var lastName = prompt('What is your last name?')|| "McDefaultson";

var output = document.querySelector('#greeting');


if(firstName && lastName) {
  output.innerHTML = "<p>Thanks for visiting, " + firstName + lastName + ".</p>";
} else {
  output.innerHTML ="<p>Please tell us your name!</p>";
}



var richardFood = "sushi";
var simoneFood = "Pho";
var genaFood = "pasta";

var myFoodArray = ["Tacos", "Burriotos", richardFood, "curry", simoneFood, genaFood];

var classCity =
{
  "gena": "Ashland", "rebecca": "Memphis", "wayne": "Manchester", "richard": "Galveston", "simone": "Louisville"
}

var cityOutput = document.querySelector('#myCity');
cityOutput.innerHTML = "<p>" + classCity.rebecca + "</p>";

var foodOutput = document.querySelector('#favFood');
foodOutput.innerHTML = "<p>" + myFoodArray[0] + "</p>";



// Access your city and display it in <p></p> inside a div with the id “myCity” on your media page.

// var btn = document.querySelector('#userButton');
//
// btn.addEventListener('click', function(event) {
//   alert("Hey, don't do that.")
// });
