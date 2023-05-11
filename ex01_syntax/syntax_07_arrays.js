/*
Arrays and their work in JS

JS will store collections of data in arrays.
So if you get a set of items from an API they will be stored in an array.
*/

// If you know the elements you can create it this way in a generated way.
var generatedArray = new Array('Altuve', 'Correa', 'Spring');

// You can also declare literal arrays by assigning the values in []
var literlaArray = [1, 2, 3, 4,];
var literalArray_two = ['Altuve', 'Correa', 'Spring'];

// You can also make arrays of mixed values.
// You can mix anything you want in the following way:
var mixedArray = ['Hi', 2, ['a', 'b'], { name: 'Kristal' }, function greeting() { console.log('Hello!');}];


// How to take the information from the arrays using indexes:
// Indexing the brackets []
console.log(literlaArray[0]);

// You can assign stuff with the index:
var playerOne = literlaArray[0];
console.log(playerOne);

/*
What to use arrays for:
	- Database queries, once you receive the data back arrays are the standard representation for that data.
*/

// How to work with the mixed arrays or more complex ones:
// For double arrays we can make double indexes:
console.log(mixedArray[2][0]);

// Objects like objects:
console.log(mixedArray[3].name);

// And functions like functions:
console.log(mixedArray[4]());
