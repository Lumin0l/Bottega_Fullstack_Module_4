/*
How conditionals work in JS
*/

var age = 12;
var ageTwo = '12';
var ageThree = 15;

// Equality ==
if (age == ageTwo) {
	console.log("They are equal");
}

// Strict equality === -> Checks if they are equal not only in value but also in type
if (age === ageTwo) {
	console.log("They are equal") // This won't print because one is num and another is str
}

// Not Equal !=
if (age != ageThree) {
	console.log("They are NOT equal");
}

// Strict not equal !==
if (age !== ageTwo) {
	console.log("They are NOT equal: different type");
}

// Difference < / > / <= / >=
if (age >= 25){
	console.log("You can rent a car");
}


/*
If / Else reelations
*/

if (age >= 25) {
	console.log("You can rent a car");
} else {
	console.log("You cannot rent a car");
}


