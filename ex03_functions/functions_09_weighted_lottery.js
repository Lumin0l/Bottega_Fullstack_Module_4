/* Exercise on a weighted lottery. */

// It works with random numbers, but it is weighted.

// We'll be given a set of weights. Like, the odds 1 win in a 1000 games.

/* Important stuff:
	- object.keys
	- bitwise operators
*/


// No idea how to do it myself.

// Solution:

// Stablish weights, that means there will be 3 times the chances of red happening and 2 of yellow as much as green.
const weights = {
    green: 1,
    yellow: 2,
    red: 3
}

const wightedLottery = weights => {
	// keep track of the weights. With a data collection, an array for example.
	let containerArray = [];

	// Now we need to iterate through the object and grab those key values from the object.
	// A bit crazy: the for Each will be triggered for each key it finds, in this case 3. 
	// Then, in each trigger it will find a for loop and since the keys are paired to a number, it will push the key as many times as that number.
	Object.keys(weights).forEach(key =>{ 
		for (let i = 0; i < weights[key]; i++) {
			containerArray.push(key);
		}
	})

	// now we want to return a random element from that array.
	// We'll do it with the Math.random() functions. The "| 0" is a bitwise operator in case it can't find anything.
	return containerArray[(Math.random() * containerArray.length) | 0]; 
}