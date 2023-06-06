/* They are some of the most crytical thing to learn in modern JS */

// Review on functions:

	// first way: type function, introduce the input and done:
	function funcOne(fName, lName) {
		console.log(`${fName} ${lName}`);
	}

	funcOne('Kristine', 'Hudgens');

	// second way: with function expression (storing it in a var).
	funcTwo = function (fName, lName) {
		console.log(`${fName} ${lName}`);
	}

	funcTwo('Kristine', 'Hudgens');


/* The arrow functions add a third way to make them, and it's one of the most popular ways of declaring functions */

// The easiest:
helloWorld = () => { console.log("Hi World"); }
helloWorld();

// So, you create a var "helloWorld" and you make it equal to the input () + the function.

// With one arg:
firstName = fname => { console.log(fname); }
firstName('Imanol');

// With 2 args:
funcThree = (fName, lName) => {
	console.log(`${fName} ${lName}`);
}
funcThree('Kristine', 'Hudgens');

// So it's most similar to the function expression, a clean way to store a function. Specially useful for classes and objs.
