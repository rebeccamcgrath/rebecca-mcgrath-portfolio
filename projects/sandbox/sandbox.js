$("body").prepend('<div id="everything"></div>');
$("#everything").prepend("<h1>A heading!</h1>");
$("#everything").append("<p>Here's some text!</p>");
$("#everything").append("<p>Here's a second set of text!</p>");
$("#everything").append('<div class="holder"></div>');
$(".holder").append('<ul> <li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li> </ul>');
//   This div is missing from the HTML $("#everything").append('<div class="holder"></div>');
$(".holder").append('<ol> <li>List Item 4</li> <li>List Item 5</li> <li>List Item 6</li> </ul>');
$("body").append('<div id="change-me"> This part needs to change!</div>');
$("body").append('<div id="secret"> We should hide this!</div>');


// <body>
//   <div id="everything">
//       <h1>A heading!</h1>
//       <p>Here's some text!</p>
//       <p>Here's a second set of text!</p>
//       <div class="holder">
//           <ul>
//               <li>List Item 1</li>
//               <li>List Item 2</li>
//               <li>List Item 3</li>
//           </ul>
//       </div>
//       <div class="holder">
//           <ol>
//               <li>List Item 4</li>
//               <li>List Item 5</li>
//               <li>List Item 6</li>
//           </ol>
//       </div>
//       <div id="change-me">This part needs to change!</div>
//       <div id="secret">We should hide this!</div>
//   </div>
//   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
// </body>
