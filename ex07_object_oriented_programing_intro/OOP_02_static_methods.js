/* 

In oposition to instance methods, which are instance specific, they are static:
They don't need an instance to hace them work, that is, it makes the objects work more like functions:

*/

class Instructor {
	constructor({ name, role = "assistant" }) {
	  this.role = role;
	  this.name = name;
	}
  
	// Instance method - this will only work when instantiated
	renderDetails() {
	  console.log(`${this.name} - ${this.role}`);
	}
  
	// Base case static method - this will work as is
	static helloWorld() {
	  console.log('Hi there');
	}
  
	// Static method - another one, this will 
	static canTeach(instructor) {
	  return (instructor.role === 'classroom'); // This is just a true or false return. If role of the object is classroom it will be true.
	}
  }

/* Instructor.renderDetails(); */ // This will produce an error because there is no instance.
const instancePerson = new Instructor({name: 'instance person'}); // Now it will work.

Instructor.helloWorld(); // This will output "hello world", even if it hasn't been instantiated.

// Cool to check stuff
console.log(Instructor.canTeach(instancePerson)); // This will say false, because we haven't set role to "classroom".

