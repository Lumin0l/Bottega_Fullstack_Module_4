/*
Very important functionality of javascript. Gives us the ability to query data.
*/

// They are declared with '{}'
var user = { name: 'Kristine' }

// Like in python dicts, we have key - value pairs:
console.log(user.name);

// We can manipulate the data in the objects using the keys too.
user.name = 'Jordan';
console.log(user.name);

// We create multiple values the following way:
var complex_user = {
	name: 'Kristine',
	age: 12,
	city: 'New York'
}
console.log(complex_user);

// We can also put objects inside of objects:
var complex_user = {
	name: 'Kristine',
	age: 12,
	city: 'New York',
	grades: {
		math: 90,
		science: 80,
		english: 70
	}
}
console.log(complex_user.grades);
// And we can be more specific, as well as adding:
console.log(complex_user.grades.math);
complex_user.grades.coding = 99;
console.log(complex_user.grades.coding);