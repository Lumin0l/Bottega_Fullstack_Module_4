/* Before, JS didn't have OOP elements and capabilities */

/* 
First, we need to learn what OOP is. People think it's complicated because it uses very complicated terms. 


Class:
	-> A class is in itself not an object, but it's the 'blueprint' of an object, it determines how the object is going to behave, what vars and functionalities it's going to have etc...
	-> So for example, a login class that contains a set parameters of requirements that need filled: name, surname, email, password...
	-> For us to create an object we need to INSTANTIATE that class, that is: take the class and create a var that meets the elements stated in the class.
	-> The system will create a named object that contains all the values defined or set in the class.

	* Class example below: */

	// Let's create a class for an instructor in a scholl:
	
	class Instructor { 
		// let's create the object with a constructor function inside.
		// a constructor function runs all the processes and input needed to create the class-object any time it's instatiated.
		// kind of like __init__ in python
		constructor({ name }) {
			this.name = name; // What we're doing with this is tell: for THIS construction instance, i want a var called "name", with the value of the input "name".
		}
	}

	// So, let's create an Instructor, because untill now we just created a blueprint for future instructors:
	const jon = new Instructor({ name: 'Jon' });
	
	// If we call this, it will return an object, because it's what we just created. An instance of the "Instructor" class.
	console.log(jon);
	// if we want the content, we can now use jon as an object:
	console.log(jon.name);

	