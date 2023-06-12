/* Moderate deconstruction in functions and combine objects and functions */

// let's get an object to deconstruct. Like, getting an object and quering it:
const user = {
	name: 'Kristine',
	email: 'kristine@devcamp.com'
  }

  // When working with objects we can't use the var names we want, they need to match with the keys:
const renderUser = ({ name, email }) => { // we set the keys as input, so we won't have to manually add it later on.
	console.log(`${name}: ${email}`);
}

// now that we have our render done, we can pas full objects and it will process all their content.
renderUser(user);
