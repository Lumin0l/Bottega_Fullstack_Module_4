/*
There is 2 types of variables - val and let. let's see the differences.
*/

var age = 12;
console.log(age);

var age = 15;
console.log(age);
// This, like in C, will reasign the value of "age" from 12 to 15.

// LEt works differently
let age = 12;
console.log(age);

let age = 15;
console.log(age);
// If we run this nothing will happen, because 'let' variables can't be re-written. It will show an error when debugging.

/* 
So we use let for stuff and elements that we want locked, like constant vars in C
*/