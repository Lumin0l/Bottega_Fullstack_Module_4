/*
Functions related to strings.
We will use library functions included in JS to manipulate our functions.
*/

var str = 'The quick brown fox jumped over the lazy dog';

// Let's first find some atributes:

	// Length: .length - IMPORTANT! - it is not a function!
	console.log(str.length);

	// Character at: .charAt() - to know what is in a particular position:
	console.log(str.charAt(0));
	// If it doesn't fins anything it will return nothing, not null.

	// Check for words with includes: .includes() - it's a boolean.
	console.log(str.includes('quick'));

	// Check if it starts or ends with: .startsWith() / .endsWith() - boolean too.
	console.log(str.startsWith('The'));
	console.log(str.endsWith('is false'));

// other uses:

	// Concatenate: .concat('string') - add stuff at the end.
	console.log(str.concat(' again and again'));

	// Repeat: .repeat(number) - repeats the string as output, but doesn't change the var.
	console.log(str.repeat(3));

	// Match: .match('regular expression') - It's weird. It takes a regular expresion and tells if it matches with the str.
	console.log(str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)); // Don't panic. This is copy-pasted by some dude that made a pattern for phone numbers.
		// The return will be null, because it doesn't match with the pattern of a phone number.
		// As we see, it's looking for patterns of 3 numbers 'd{3}' followed by other 2 sets of 3 numbers and a last bunch of 4.
	
	// Replace: .replace('original', 'replacement');
	console.log(str.replace('fox', 'REPLACEMENT'));

	// Search: .search('string') - searches for a string inside the string and returns it's location in the index.
	console.log(str.search('fox')); // If it doesn't find it it will return -1.
	console.log(str.search('-1')); // If it doesn't find it it will return -1.

	// Find the index: .indexOf('string') - same but it can be manipulated better, and doesn't return anything id it doesn't find anything.
	console.log(str.indexOf('fox'));

		// We can check the last index of a thing if it repeats: .lastIndexOf('string):
		console.log(str.lastIndexOf(' '));
	
// Manipulate strings:

	// Slice: .slice('index') - it will return all to the right of the index value we give:
	console.log(str.slice(16)); // this starts at 'fox'.

		// We can start by the end like in python with negatives:
		console.log(str.slice(-8)); // this starts at 'the dog'.
	
		// We can also delimitate a region by adding a second index:
		console.log(str.slice(3, 10)); // this will return index 4 - 10 -> " quick ".

	// Trim: .trim('thing to clean') - like 'split', it takes space as default:
	var messy_string = "    Trim me    ";
	console.log(messy_string.trim());

		// We can use it to clean sliced strings:
		console.log(str.slice(3, 10).trim()); // This will return "quick".

	// Turn into Upper Case: .toUpperCase() - it will turn all to upper.
	console.log(str.toUpperCase());

	// Turn into Lower Case: .toLowerCase() - it will turn all to lower.
	console.log(str.toLowerCase());






