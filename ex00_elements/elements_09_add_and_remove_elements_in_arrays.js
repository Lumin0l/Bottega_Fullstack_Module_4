/* In Js, .length is not a function! */

var arr = ['altuve', 'correa', 'springer'];

console.log(arr.len); // This will print 4.

/* We have some functions to manipulate the content of arrays */

// Pop: This will take the last element of the array, delete it from the array and return it.
var popped_element = arr.pop();
consoloe.log(popped_ekement);

// Push: does the opposite, takes an element and attaches it at the end of the array
arr.push('Boggwell');
console.log(arr);

// Shift: same as pop, but for the beginning of the list.
// Unshift: same as push but for the beginning of the list.
