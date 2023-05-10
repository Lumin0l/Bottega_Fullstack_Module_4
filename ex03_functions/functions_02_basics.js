/*
Yes, basics goes now in the course...

Funtions in JS

*/

// Syntax - it is different than other programming languages, more flexible:
// Syntax - "function 'name_of_function' ('input) {}"

function hiThere () { // This is a 'void' function.
	console.log('Henloo!');
}

hiThere(); // This call will print, but return nothing.

// Now a non-void
function hiThere_nonVoid() {
	return 'Henloo'; // No parenthesis for return.
}

hiThere_nonVoid();
