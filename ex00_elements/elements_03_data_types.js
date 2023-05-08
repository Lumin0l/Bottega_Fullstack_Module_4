/*
Let's see the different data types in JS
*/

// Boolean
var the_truth = true;
var not_the_truth = false;
console.log(the_truth);

// Null - the absence of something, emptyness in a value. '\0' in C.
var null_thing = null;
console.log(null_thing);

// Undefined - when we declare but don't define something. It's not empty, it's just undefined.
var not_defined;
console.log(not_defined);
// The difference with 'null' is cool to differenciate what things have been defined on purpose and what hasn't.

// Number
var a_number = 12;
console.log(a_number);
// JS is not a statically-type-language. In those you need 'int', 'float'...
// In JS, like python or ruby, the parser will automatically decide what type that number is.

// String
var a_name = "Kristine";
var full_name = 'Kristine Hudgens';
// "" or '', doesn't matter in JS.

// Symbol - It's new in ES6. They are similar to tuples or othe immutable objects.
var my_symbol = Symbol('this is a symbol');
console.log(my_symbol);