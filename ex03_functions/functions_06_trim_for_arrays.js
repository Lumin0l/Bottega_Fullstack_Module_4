/*
Like split.
*/

const string = "      content   ";
console.log(string.trim());

// Now we want to emulate this for an array:
// My try:
var my_array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

function my_trim(arr) {
	var new_arr = [];
	var counter_new = 0;
	var counter_old = 1;
	while (counter_old < (arr.length - 1)) {
		new_arr[counter_new] = arr[counter_old];
		counter_new++;
		counter_old++; 
	}

	return new_arr;
}

console.log(my_trim(my_array));
console.log(my_trim([1, 2, 3, 4]));
console.log(my_trim(["<h1>", "Some content", "</h1>"]));
console.log(my_trim(["Some content", "</h1>"]));

// After solution: it lacks an input control so we can¡t have anything shorter than len=3.
// Else, if it has only 2, it would remove the first and the last and leave us with nothing.
// That can be seen in last example.

// The Solution

const removeFirstAndLast = arr => {
	if (arr.length >= 3) {
	  return arr.slice(1, -1);
	} else {
	  throw "You need at least three elements in the array"; // this returns stuff as an error.
	}
  };
  
  console.log(removeFirstAndLast([1, 2, 3, 4]));
  console.log(removeFirstAndLast(["<h1>", "Some content", "</h1>"]));
  console.log(removeFirstAndLast(["Some content", "</h1>"])); 

  // It is actually my first attempt haha.
  // You can't use [1:-1] like in python, you need slice.