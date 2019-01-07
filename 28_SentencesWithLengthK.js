/*
This problem was asked by Palantir.

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, 
fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. 
Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, 
with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, 
you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly

I: [ words ], integer k
O: [ sentences with the length of k ]


'the quick brown' -> 15
'fox jumps over' -> 14

// keep concating until length > 16,
// get length of sentence
// while the length is less than 16


*/
// UNFINISHED.
function sentenceWithLengthK(words, k) {
	let output = [];

	let unjustified = '';
	// store words that need to be justified 
	for ( let i = 0; i < words.length; i++ ) {
		let compare;
		if (i === 0) { // if first iteration
			compare = words[i];
		} else {
			compare = unjustified + ' ' + words[i];
		}
		
		// if the length is about to be greater than k
		if (compare.length > k) {
			// justify the words, then push into the output;
			// let justified = justify(unjustified);
			output.push(unjustified);
			unjustified = words[i];
		} else {
			if (i === 0) {
				unjustiied = words[i];
			} else {
				unjustified += ' ' + words[i];
			}
		}
	}

	return output;
}

function justify(words) {

}

let words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
let k = 16;
let output = sentenceWithLengthK(words, k) 
console.log(output);

/**************************
******** Solution *********
***************************

It seems like the justification algorithm is independent from the groupings, so immediately we should figure out two things:

How to group lines together so that it is as close to k as possible (without going over)
Given a grouping of lines, justifying the text by appropriately distributing spaces
To solve the first part, let's write a function group_lines that takes in all the words in our input sequence as well as out target line length k, 
and return a list of list of words that represents the lines that we will eventually justify. Our main strategy will be to iterate over all the words, 
keep a list of words for the current line, and because we want to fit as many words as possible per line, estimate the current line length, 
assuming only one space between each word. Once we go over k, then save the word and start a new line with it. So our function will look something like this:

Then, we'll want to actually justify each line. We know for sure each line we feed from group_lines is the maximum number of words we can pack into a line and no more. 
What we can do is first figure out how many spaces we have available to distribute between each word. Then from that, we can calculate how much base space we 
should have between each word by dividing it by the number of words minus one. If there are any leftover spaces to distribute, then we can keep track of that in a counter, 
and as we rope in each new word we'll add the appropriate number of spaces. We can't add more than one leftover space per word.


*/

