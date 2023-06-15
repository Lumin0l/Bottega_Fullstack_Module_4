/* Let's see how to check the values of objects */

const obj1 = {
	name: "Kristine",
	age: 13,
	favorites: {
	  food: "Pizza",
	  vacation: "Disneyland"
	}
};
  
 const obj2 = {
	name: "Kristine",
	age: 13,
	favorites: {
	  food: "Pizza",
	  vacation: "Disneyland"
	}
};

// Believe it or not, this is not the same to JS, if we run obj1 === obj2 it will say false.
// JS takes values as a whole: name, place in memory and so on included, so by it's standars they are of course different.
// We still need some functionality to see if it's content is equal.

const isEqual = (obj1, obj2) => {
	// We start extracting the content with the keys:
	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);
	// we first check the length as a stopgap:
	if (obj1Keys.length !== obj2Keys.length) {
		return false;
	}

	// if it passes, we need to check if the values of those keys are the same:
	for (let obj1Key of obj1Key) {
		if (obj1[objKey] !== obj2[objKey]) {
			return false;
		}
	};

	// If both the keys and the content are the same, it is true:
	return true;
}

console.log(isEqual(obj1, obj2));


// This will work with simple objects, but not with complex (objects with objects inside)
// To make it work there we can keep adding layers to the function, but there is a library for this:
// The "Lodash" library has a super complex "isEqual".


/* 
import "lodash";
*/

