/*
It is very powerfull and used in many modern JS frameworks.

The syntax is: three dots followed by a word -> ...<some_word>
*/

// Example 1: combining arrays:
// let's say a shopping cart array that stores product id. The buyer wants to add more:
let shoppingCart = [343, 374, 764, 123];
let newItems = [98, 987];
	// If we were to add this let's say with "push" it would push the arrray inside the array. We want only the elements.
	// We can use the spread operator to decompose the elements. It spreads them out of their array:
shoppingCart.push(...newItems);
console.log(shoppingCart);

// Example 2: copying arrays:
// A very common thing in Frameworks is not touching or change the stablised vars, you would copy them and create new vars to alter them not to leave trash or override vvalues.
const cartCopy = [...shoppingCart];
console.log(cartCopy);

// Example 3: use with function arguments
// We are going to use the math library for this.
console.log(Math.max(1, 5, 6, 2, 1, 13)); // max outputs the largest value, in this case 13.
	// Let's say we want to create a functionality that checks for the highest value.
	// the problem is, if we store the array of numbers in a var like numberArray = [1, 5, 6, 2, 1, 13]; and pass that, it won't do anything because they are not numbers, its an array.
	// With spread, we break the array and spread it's content
const numberArray = [1, 5, 6, 2, 1, 13];
console.log(Math.max(...numberArray));

// Example 4: working with object deconstruction
// It also works to deconstruct object as well as arrays.
// So, we have an object with several values, some are fixed, some are changing.
// If we want to stract them, the fixed can be accesed thorug their name and then we can use the spread to bunch everything else in a var:
const {starter, closer, ...relievers}= {
	starter: "Verlander",
	closer: "Giles",
	relief_1: "Morton",
	relief_2: "Gregerson"
}

console.log(starter);
console.log(closer); // The fixed are stored in their variables.
console.log(relievers); // All the rest get broken down and stored in another object.