/*
Variable Scope
*/

// When you define a 'var' it's called a global variable, available to the whole program.
var userObj = {
	email: 'sample@gmail.com',
	fullName: 'Sample Person'
}

function dashboardGreeting() {
	console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting();

/*
In our function we could call the var because it's global. 
The problem with this is: if we use the var for a function that does a specific action, and then we change the var, it's going to change.
*/

// To avoid that we can declare local vars in the functions:

function dashboardGreeting_local() {
	var userObj = {
		email: 'sample@gmail.com',
		fullName: 'I am a local var'
	}
	console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting_local();

console.log(userObj.fullName);

/*
A weird thing JS does is unless declared with the 'var' or 'let' keyword, it will hoist the variables out from the funtions into the global scope:
*/

function dashboardGreeting_hoisted() {
	userObj = {
		email: 'sample@gmail.com',
		fullName: 'I am a hoisted var'
	}
	console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting_hoisted();
console.log(userObj.fullName); // This will show the hoisted change, because the function "returns" (hoists) the change.
