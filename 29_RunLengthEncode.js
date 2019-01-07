/*

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive 
characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.

*/
// FINISHED - Attempt 1
function runLengthEncode(code) {
	let encodedCode = '';
	let currentLetter = code[0];
	let counter = 0;

	for (let i = 0; i < code.length; i++ ) {
		if (code[i] === currentLetter) {
			counter++;
		} else {
			encodedCode += counter + currentLetter;
			currentLetter = code[i];
			counter = 1;
		}
	}
	encodedCode += counter + currentLetter;	
	return encodedCode;
}

let input = 'AAAABBBCCDAA';
let output = runLengthEncode(input);
console.log(output);

/**************************
******** Solution *********
***************************

We can implement encode by iterating over our input string and keeping a current count of whatever the current character is, 
and once we encounter a different one, appending the count (as a string) and the actual character to our result string.

*/