/* 
Exercise: manual exponent.

It takes to arguments, one the number and the other the exponent. Returns the result.
*/

// The teacher recommends reduce.

// My attempt.
function myExponentAttempt(num, exp) {
	var temp;
	temp = num;
	while (exp > 1) {
		temp *= num;
		exp--;
	}
	return temp;
}


console.log(myExponentAttempt(2, 3));

// His attempt:
const toThePowerOf = (num, exp) => {
	const items  = Array(exp).fill(num); // if we passed Array(2).fill(3) we would create [2. 2. 2].
	const reducer = (total, currentValue) => total * currentValue; // reducer is an anonymous function. Because "reduce" needs 2 values.
	return items.reduce(reducer); // it automatically works with 2 args -> accumulator and value. In an analogy to my func. the accumulator is the temp and the value is what it multiplies (following the instructions of reducer) the accumulator with the value.
}

console.log(toThePowerOf(2,3));