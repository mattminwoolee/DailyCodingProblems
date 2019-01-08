/*

This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so 
far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2


I: array of numbers
O: array of medians

Case 1:
[2, 1, 5, 7, 2, 0, 5]

// iterate over each element in the array accumulate total sum and divide by an incrementing number starting at 1
*/

// 1ST ATTEMPT - complete
function calculateMediansInList(arr) {
	let output = [];

	let buildingList = [];
	for ( let i = 0; i < arr.length; i++ ) {
		buildingList.push(arr[i]);
		let median = calculateMedian(buildingList);
		output.push(median);
	}
	return output;
}

function calculateMedian(arr) {
	arr.sort( (a,b) => a-b );
	if (arr.length % 2 === 0) {
		let left = arr.length/2 - 1;
		let right = arr.length/2
		return ( arr[left] + arr[right] )/ 2
	} else {
		let middle = Math.floor(arr.length/2);
		return arr[middle];
	}
}

let output = calculateMediansInList( [2, 1, 5, 7, 2, 0, 5] );
console.log(output);

/*
Time complexity inefficient
O(n*nlog(n))
*/


