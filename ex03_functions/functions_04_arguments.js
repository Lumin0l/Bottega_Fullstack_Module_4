/*
How to pass arguments or parameters to functions
*/

function fullName(firstName, lastName) {
	return lastName.toUpperCase() + ", " + firstName.toUpperCase();
}

console.log(fullName("Person", "McPerson"));

// In JS we have to be careful because it allows lot's of things.
// If you create a function with arguments and you call it in void, it is going to allow it.

/*
Default Args - arguments that will be contained in the function if nothing is introduced, but can be overwritten.
*/

// Let's say we use a function to concatenate name, surname and the language, but that language is optional and will take english as default if nothing is stated.

function fullName_language(firstName, lastName, language) {
	var language = language || 'English'; // This is basically: 'language' is 'language' (the parameter) or 'English'. So if it's not defined, it will get into the 'or'.
	return lastName.toUpperCase() + ", " + firstName.toUpperCase() + ' - ' + language.toUpperCase();
}

console.log(fullName_language('Person', 'McPerson'));
console.log(fullName_language('Persona', 'Personez', 'Español'));