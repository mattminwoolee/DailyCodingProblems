/*
This problem was asked by Google.

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, 
find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.

I: [ integers ]
O: integer (non duplicate)

Ex)
[6, 1, 3, 3, 3, 6, 6] -> 1


*/
// 1st attempt - complete
function nonDuplicateInteger(arr) {
  let dict = {};

  for (let i = 0; i < arr.length; i++) {
  	if (dict[arr[i]]) {
  		dict[arr[i]]++;

  		if (dict[arr[i]] === 3) delete dict[arr[i]]; // if it reaches 3, delete the key value pair
  	} else {
  		dict[arr[i]] = 1;
   	}
  }

  return Object.keys(dict)[0];
}

console.log(nonDuplicateInteger([6, 1, 3, 3, 3, 6, 6]))

// time - O(n)
// space - O(n)