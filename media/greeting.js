var name = prompt('Hello! What is your name?');
var output = document.querySelector('#greeting');

output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";
