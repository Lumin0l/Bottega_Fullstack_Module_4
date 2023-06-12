/* The ability to flip variable values */

let playerOne = 'Tiffany';
let playerTwo = 'Christy';

/* 
Let's say we are playing and we switch controllers so one is Christty  and two is Tiffany 

Before we would need a temp var to store the value that we want to override:
let temp = playerOne;
playerOne = playerTwo;
playertwo = temp;
*/

// With variable deconstruction we can flip them without the need of a temp:
// It is done treating them "as an array".
[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(playerOne);
console.log(playerTwo);

// It's very usefull when implementing algorithms such as merge or quicksort or others.
