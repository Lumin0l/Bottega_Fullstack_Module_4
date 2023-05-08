/*
JS is very forgiving and it automatically casts the type of the data. But we can also do it ourselves in case we want to be more precise.
*/

// Let's showcase the first with an example:

	// string - number:
	console.log('100' - 42); // Here JS will automatically cast the data and return 58.
	
	// number + null:
	console.log(100 - null); // Same, it will return 100.

	// string + number: 
	console.log('100' + 42); // Here it will go a bit crazy and since it doesn't have a specific order, it will asume we want to upend the string and return 10042.

/*
So,  how we do manual type casting?
*/

var ageOne = 12;

// We can cast it just with te type function:
	var ageOne_string = String(ageOne);
	console.log(ageOne_string);

	// We can also use 'tostring'
		var ageOne_tostring = ageOne.toString();
		console.log(ageOne_tostring);

// It also works the other way around: strings to numbers, but we don't have 'tonumber':
	var ageTwo = '15';
	var ageTwo_number = Number(ageTwo);
	console.log(ageTwo_number);

	// We can also use 'parseInt' / 'parseFloat'
	var ageTwo_parsed = parseInt(ageTwo);
	console.log(ageTwo_parsed);

		// We can use this parse function to take numbers out of strings if they stasrt by said number, otherwise not.
		console.log(parseInt('568934759 is my phone number')); // This will return 568934759.
		console.log(parseInt('I said: 568934759 is my phone number')); // This will return NaN (not a number).

	// We can also use them with unary operators:
	var unary_op = + ageTwo;
	console.log(unary_op);

/*
Why is this importat? normally JS will work as an API, so they will send and receive data from different sources.
In this case we need the ability to manipulate this data so it has the rught type regardless of the source.
Knowing this it is a good practice to cast the main elements we use if we know we will work with APIs.
*/

// We can even cast booleans in case we aren't sure we'll be working with a program that supports them and turn them into 1/0:
var truth = true;
var not_truth = false;

console.log(Number(truth)); // this will be 1.
console.log(Number(not_truth)); // this will be 0.




