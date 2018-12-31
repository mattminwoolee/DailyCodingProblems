/*
Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].


	I: dictionary, string sentence
	O: array of words in sentence order

	word: the

*/

function constructSentence ( dict, sentence ) {
	let output = [];
	let word = '';
	for (i = 0; i < sentence.length; i++) {
		word += sentence[i];

		if (dict.has(word)) {
			output.push(word);
			word = '';
		}
	}
	return output.length > 0 ? output : null;
}

let dict = new Set(['quick', 'brown' , 'the', 'fox']);
let sent = 'thequickbrownfox';
let output = constructSentence(dict, sent);
console.log(output);



