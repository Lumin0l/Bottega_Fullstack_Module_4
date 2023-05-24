/* How to loop through a JS object */
var student = {
	name: 'Kristine',
	age: 12,
	city: 'Scottsdale'
  };

// if we remember, objects are key-content pairs, so we just need to call the keys.
for (var key in student) {
	console.log(key + " -> " + student[key]);
}
