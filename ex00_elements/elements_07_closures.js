/*
Closures - through a batting average program

Closures are a way to get more dynamic feel to programs. Elements that let you wrap-up an entire set of vehaviour.
Then we can call it and pass it around.
*/

function battingAverage() {
	var hits = 100; // stablish local variable.
	var atBats = 300;

	// Now 2 closures: one will get the current avg and the other will update our values.
	return {
		getCurrentAverage: function () {
			return (hits/atBats);
		},
		updateHitsandBats: function (hit, atBat) {
			hits += hit;
			atBats += atBat;
		}
	}
}

// Now we have a 'dynamic' variables or object:
// Now we can use it in very different ways:

var batter = battingAverage(); // now 'batter' is a variable, but it performs actions!

console.log(batter.getCurrentAverage()); // This will take the current batting data and return it's average. 0.33.
batter.updateHitsandBats(200, 400); // Now we'll use the enbedded update function we've created to change those values.
console.log(batter.getCurrentAverage()); // Now it will perform the same action with the updated values and return 0.42.
