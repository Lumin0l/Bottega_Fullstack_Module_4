/*
Ternary operators

Ternary operators let us create conditionals in a single line.
Particularly usefu for JSX and React stuff.

JSX example:
<div className={hasPermission ? 'active' : 'disabled'}>
</div>

*/

// In JS - normal syntax

function ageVerification(age) {
	if (age >= 25) {
		console.log("can rent a car");
	} else {
		console.log("is not old enough yet");
	}
}

// Now with a ternary
function ageVerification_ternary(age) {
	let answer = age >= 25 ? 'can rent a car' : 'is not old enough yet';
	console.log(answer);
}

ageVerification(55);
ageVerification_ternary(55);

/*
The mapping goes like this:
	- condition: age >= 25.
	- key: ? -> opens the 'true' part.
	- result to the key: 'can rent a car'
	- counter key: : -> acts like an else.
	- result to the counter: 'is not old enough yet'.
*/

/*
Compound ternary: is very weird.
*/

// No ternary
function adminCntrols(user) {
	if (user) {
		if (user.admin) {
			console.log('showing admin controls');
		} else {
			console.log('you need to be an admin');
		}
	} else {
		console.log('you need to log in first')
	}
}

// Lt's create test objects
let userOne = {
	name: 'Kristine',
	admin: true
}

let userTwo = {
	name: 'Tiffany',
	admin: false
}

let userThree = {
	name: 'Peter',
	admin: null
}

adminCntrols(userOne);
adminCntrols(userTwo);
adminCntrols(userThree);

// Now ternary
// Explanation: ? -> if true -> result to the latest case (second ?). : -> exception to the latest case. : -> exception to the previos case.
function adminCntrols_ternary(user) {
	let response = user ? user.admin ? 'Showing admin controls' : 'you need to be an admin' : 'you need too be logged in';
	console.log(response);
}

adminCntrols_ternary(userOne);
adminCntrols_ternary(userTwo);
adminCntrols_ternary(userThree);