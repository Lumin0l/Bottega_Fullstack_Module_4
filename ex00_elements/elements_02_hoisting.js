/*
Hoisting is a very that the javascript interpreter reads vars.
This should help define where we put the vars.
*/

name = 'Kristine';
console.log(name);
// This will print 'Kristine.

var name;

/*
If we do this, the interpreter will read it as if we declared the variable on top:
var name;

name = 'kristine';
console.log(name);

Even then, it doesn't recognize values and assignments, so as a best practice it is recommended to list vars at the top.
 */