/* Very common in react, normally in constructor functions */
/* 
constructor(){
    this.handleClick = handleClick.bind(this);
}
*/

// Let's develop an example, with a constructor function that makes full names.
// let's start 2 objects:
const userOne = {
    firstName: "Kristine",
    lastName: "Hudgens"
}

const userTwo = {
    firstName: "Tiffany",
    lastName: "Hudgens"
}

// Now a function expression (stored in a var)
const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
}

// We want to inject and bind the function and the object together. It doesn't have 'input' set, but whith bind it detects the keys:
const kristineFullName = fullName.bind(userOne);
const tiffanyFullName = fullName.bind(userTwo);

console.log(kristineFullName());
console.log(tiffanyFullName());

// They have turned into functions that include the object and the functionallity.


// Why not use an arrow function -> the arrow function doesn't allow the use of this (the scope)
