/*
How to check data types with the Switch statement
*/

var dataPoint = 'Hi there!'

switch (typeof dataPoint) {
	case "string": 
		console.log('it is a string');
		break;
	case "number":
		console.log('it is a number');
		break;
	case "boolean":
		console.log('it is a boolean');
		break;
	default:
		console.log('no matches.');
}

/*
They work very similar to if / else.
*/