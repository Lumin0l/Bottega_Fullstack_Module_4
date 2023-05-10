/*
Declarations versus Expressions - or named anonymous function expressions.
*/

// Declaration:
function greeting() {
	return "Hello!";
}

// Expression - it is stored in a var:
var greeting_expression = function () { // once assigned it doesnt get named (function()), that's why anonymous.
	return "Hello expressed";
}; // since it is a var now, it needs ';' at the end.

// Usage is the same:
console.log(greeting());
console.log(greeting_expression());

/*
Let's delve deeper.
*/

// Example program: kids menu.
var age = 3;

if (age <= 10) {
	var buildMenu = function () {
		return "Kids menu";
	};
}

// This way a specific function is only going to trigger in the case the if is true. 
// You could declare it outside and then call it inside, but sometimes you are only going to use the function in one particular place, that is how it is done.

// Same in the case you wanna put functions inside of Objects, you can do that with expressions.
