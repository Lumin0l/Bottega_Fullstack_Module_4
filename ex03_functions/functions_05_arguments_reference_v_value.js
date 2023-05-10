/*
Reference vs Value - sort of a version of pointers? 

Objects -  are treated by reference, acting over the original object itself.
Variables - when used around we actually use a copy of that variable and use the content.

Kind of like in C. 

*/

// Examples:
// Let's make an Object and a variable
var someObject = {
	name: "Object"
}

var someVar = "variable";

// Now functions that change the names:
function formatterOne(the_object) {
	return the_object.name = "I changed";
}

function formatterTwo(the_var) {
	return the_var = "I also changed";
}

// Let's check the things before formatting, when formatting and after formatting:
console.log(someObject.name);
console.log(someVar);
console.log("\n");
console.log(formatterOne(someObject));
console.log(formatterTwo(someVar));
console.log("\n");
console.log(someObject.name);
console.log(someVar);

// When reprinting the content, the object will stay as "I changed", because objects are use as pointers.
// The var will show "Variable", because when we used it as input it's used as a 'copy'.

/*
We can use objects as vars by passing the object itself, not it's elements:
*/
function formatterThree(the_object) {
	return the_object = "Variable";
}

console.log(someObject.name);
console.log(formatterThree(someObject));
console.log(someObject.name);

// In this last example it will change but  then go back, because we used it as a 'var' and not an object.
