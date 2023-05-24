/* Intro to the use of "for" loops in js */

// First, we'll set an array to work with:
var players = [
	'Altuve',
	'Bregman',
	'Correa',
	'Springer'
  ];

// For loops are limited loops, that is, they are limited inside the loop.
// It has all the elements inside: initialize index; set condition for loop; create result to loop (++).
for (var index = 0; index < players.length; index++) {
	console.log(players[index]);
}

// There is a more interesting way of doing this. The "for in" loop.

// It's kind of like the one in python, dynamically allocates index:
for (player in players) {
	console.log(player);
	console.log(players[player]);
}

// There is one more loop type: the "for each" loop. It's pretty new.
players.forEach(function(element) {
	console.log(element);
})