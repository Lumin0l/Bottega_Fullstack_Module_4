/* The const var type */

/* 
Until now we have use both "var" and "let"
	- "var": global variable, can lead to conflicts as we manipulate the code.
	-"let": doesn't polute the code, it's not global, better.

Now we're going to introduce "const", the modern best practice for most uses.

*/

// Works the same:
const constCity_1 = "Miami";
console.log(constCity_1); // It will print Miami no problem.

// Difference with "let" is it can't be rewritten:
let city = "London";
console.log(city);
city = "Paris";
console.log(city); // This will type Paris.

// Now with const:
const constCity_2 = "London";
console.log(constCity_2);
constCity_2 = "Paris";
console.log(constCity_2); // This won't allow London to be changed with Paris. In fact VScode shows an error.