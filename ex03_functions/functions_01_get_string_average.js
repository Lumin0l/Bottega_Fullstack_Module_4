/*
How to get the average of an array of numbers
*/

/*
	// Solution: - I tried, but they haven't shown functions or collections or anything yet

	const getAverage = arr => {
		const total = 0;
		arr.array.forEach(Element => {
			total += Element;
		})
	}

	// :/
*/

// Solution 2: reduce

// The way I wanted to do it:
	// sum all values
	// get lenth
	// divide sum by length

const getAverage2 = arr => {
	const sum = arr.reduce((total, currentValue) => total + currentValue) // Special function that takes and adds elements in the function you pass, following some instructions.
	return sum / arr.length;
}

var average_number = getAverage2([1, 2, 3]);
console.log(average_number);
