/* A way to adding behaviour into object in the shape of functions. */

// Let's add on to the 'Instructor' class:
class Instructor {
	// this way we also remember defaults: we can leave some input set in the class.
	constructor({ name, role = 'assistant' }) {
	  this.name = name;
	  this.role = role;
	}

	// now the method, so when we create the class first it will be constructed, and then it will run the method:
	// just a method that will print the name and it's role.
	renderDetails() {
		console.log(`${this.name}'s role is -> ${this.role}`);
	}
}

const jon = new Instructor({name: 'Jon'}); // by default is going to be 'assistant'
const claire = new Instructor({name: 'Claire', role: 'teacher'});

// Since they are not in the constructor on in the init, we need to call them, but now we have created a method to output the content of the object.
// We don't need to "console.log" anymore with any of the instances we create of this class:
jon.renderDetails();
claire.renderDetails();
