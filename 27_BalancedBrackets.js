/*
This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
I: string (of brackets);
O: boolen (are they balanced or not)
*/

function bracketBalance(str) {
	let openPairs = {
		'(' : ')',
		'[' : ']',
		'{' : '}'
	}

	let closedPairs = {
		')' : '(',
		']' : '[',
		'}' : '{'
	}

	let stack = [];

	for (let char of str ) {
		if ( openPairs[char] ) {
			stack.push( openPairs[char] );
		} else if ( closedPairs[char] ) {
			let topOfStack = stack.pop();

			if ( topOfStack !== char ) {
				console.log('stack: ', stack);
				console.log(closedPairs[char])
				return false;
			}
		}
	}
	return true;
}
let input = "([])[]({})"
let output = bracketBalance(input);
console.log(output);