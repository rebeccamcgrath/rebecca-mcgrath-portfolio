// // Example 1
//
// // var n = 0;
// //
// // console.log("Start the count.");
// // while (n < 10) {
// // 	console.log(n, "This is a counter.");
// //   n++
// // }
// //
// // console.log('fin!');
//
// // Exercise 1
// //Create a while loop that logs numbers 1-10 to the console
// // var n = 1;
// // console.log("Start the count.");
// // while (n < 11) {
// // 	console.log(n, "This is a counter.");
// //   n++
// // }
// // console.log('fin!');
//
// //Exercise 2
// //Create a while loop that logs every even number from 2-20 to the console
// // var n = 2;
// // console.log("Start the count.");
// // while (n <= 20) {
// // 	console.log(n, "These are even numbers.");
// //   n += 2;
// // }
// // console.log('fin!');
//
// //Exercise 3
// //create a while loop that console.logs a running total of the cumulative sum of numbers from 1 to n
//
// var i = 1;
// //starting value for the counter is 1
// //we'll want this to change inside of our loop
//
// var n = 50;
// //variable that wont change throughout the loop
//
// var sum = 0;
// //the value we want to track and log
//
//      //the condition we check to see if it is true
//      //is our counter less than 50
// while (i<n) {
//   //every time we go through the loop (the condition is met) do all of the following:
//   //1. add the value of counter to sum
//   sum = sum + i;
//   //2. console.log the new value of sum
//   console.log(sum);
//   //3. incriment the counter by 1
//   i = i + 1;
// }

//Exercise 4
//In your HTML document, create a separate div for each exercise.
//Then, in addition to consol.log-ing each iteration, append all of the results to their
//respective divs using an unordered list.
////////Ex 1
var n = 1;
var outputTarget = document.querySelector("#exerciseOne");
var outputHtml  = "<ul>";
//
while(n <= 10) {
  console.log(n);
  outputHtml += "<li>" + n + "</li>";
  n++;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;


/////////Ex 2
var m = 2;
var targetTwo = document.querySelector("#exerciseTwo");
var outputTwo  = "<ul>";
//
console.log("Start the count.");
while (m <= 20) {
	console.log(n, "These are even numbers.");
  outputTwo += "<li>" + m + "</li>";
  m += 2;
}

outputTwo += "</ul>";
targetTwo.innerHTML = outputTwo;

/////////Ex 3
var i = 1;
var b = 50;
var sum = 0;
var targetThree = document.querySelector("#exerciseThree");
var outputThree  = "<ul>";
//

while (i<b) {
  sum = sum + i;
  console.log(sum);
  outputThree += "<li>" + sum + "</li>";
  i = i + 1;
}

outputThree += "</ul>";
targetThree.innerHTML = outputThree;

////////Ex 5
//count down from 15 by ones. For each number, log "even" or "odd" to the console and to a new div
var c = 15;
var targetFive = document.querySelector("#exerciseFive");
var outputFive = "<ul>";
//

  while(c > 0) {
    console.log(c);
    if(c % 2 === 0){
      outputFive += "<li> even </li>"
    } else {
      outputFive += "<li> odd </li>"
    }
    c--;
  }

outputFive += "</ul>";
targetFive.innerHTML = outputFive;
