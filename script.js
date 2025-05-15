//your JS code here. If required.
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up to the root, counting levels
while (element) {
  level++;
  element = element.parentElement;
}

// Show the result in the required format
alert("The level of the element is: " + level);