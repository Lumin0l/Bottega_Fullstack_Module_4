/* While and Do while loops in js */

// In js they are not that popular but they exist.

/* While */
var players = [
	'Altuve',
	'Bregman',
	'Correa',
	'Springer'
];

// Here we need to declare the index outside of the scope of the function:
var index = 0;
while (index < players.length) {
	console.log(players[index]);
	index++;
}

/* Do while */
// The difference between these 2 is that in "do while" the actions happens first and the condition is checked after.
do {
	index--;
	console.log(players[index]);
} while (index > 0) // in this case it should stop once it got to 0 and not print that index, but it prints first and checks second.

// We use it to guarantee that a process will run at least 1 time. Very useful for games where you need to show scores or whatever.
