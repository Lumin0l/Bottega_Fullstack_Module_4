/* Splice function and it's workings in js */

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

// splice takes 2 arguments: the index, how many elements we want to remove.

// So, if we wanted to remove 'Correa' alone, we would need to do arr.splice(2, 1).

// Indexof:
// We can dynamically find the array number with indexOf() as in:
var foundelement = arr.indexOf('Correa'); // this will return 2.
arr.splice(foundelement, 1); // this will have the same result as splice(2, 1) in our case.

// We can also eliminite many elements adding numbers to the second parameter:
arr.splice(1, 2);

