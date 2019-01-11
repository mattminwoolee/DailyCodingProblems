/*
This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, 
the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].



I: [ Rs or Gs or Bs ]
O: [ Rs or Gs or Bs ] in order R -> G -> B


['G', 'B', 'R', 'R', 'B', 'R', 'G']
  
// since theres only three, we can focus on pushing the B's to the right and the R's to the left and Gs will naturally align itself

R index = 0;
G index = length-1;

iterate over the array linearly and if you come across an R, place it into the first index, swap out with the el residing there

*/
// 1st attempt - solved with pia's help but incomplete
function rgbSwap(arr) {
	let r_index = 0,
		b_index = arr.length-1;

	for (let i = 0; i < arr.length; i++ ) {
		if ( arr[i] === 'R') {
			// first check if the r_index already has a 'R' or not
			while ( arr[r_index] === 'R' ) {
				r_index++;
			}

			let temp = arr[r_index];
			arr[r_index] = arr[i];
			arr[i] = temp;

			r_index++;
		} else if ( arr[i] === 'B') {
			// first check if the b_index already has a 'B' or not
			while ( arr[b_index] === 'B' ) {
				b_index--;
			}

			let temp = arr[b_index];
			arr[b_index] = arr[i];
			arr[i] = temp;

			b_index--;
		}
	}

	return arr;
}

// console.log(rgbSwap(['G', 'B', 'R', 'R', 'B', 'R', 'G']))

/**************************
******** Solution *********
***************************

It may be easier to first consider an easier problem: one with only two possible values, say 'R' and 'G'. 
Then we could maintain the following loop invariant quite easily:

Maintain three sections of the array using two indices, low and high:
Strictly 'R's: array[:low]
Unknown: array[low:high]
Strictly 'G's: array[high:]
Initially, low will be 0 and high will be len(array) - 1, since the whole array is unknown. As we iterate over the array, 
we'll swap any 'G's we see to the third section and decrement high. If we see an 'R', then we just need to increment low, 
since that's where it belongs. We can terminate once low crosses high. So we can gradually shrink our unknown section through 
the following algorithm:
----------------------------------------------------------------

def partition(arr):
    low, high = 0, len(arr) - 1
    while low <= high:
        if arr[low] == 'R':
            low += 1
        else:
            arr[low], arr[high] = arr[high], arr[low]
            high -= 1
----------------------------------------------------------------

This correctly partitions our array into two separate categories. How can we extend this to three partitions? 
Let's maintain four sections using 3 indices, low, mid, and high:

Strictly 'R's: array[:low]
Strictly 'G's: array[low:mid]
Unknown: array[mid:high]
Strictly 'B's: array[high:]
We'll initialize low and mid both to 0, and high to len(array) - 1 so that our unknown section is the whole array, as before. 
To maintain this invariant, we should do the following:

Look at array[mid]:
If it's R, then swap array[low] with array[mid] and increment low and mid
If it's G, then just increment mid; it's where it should be
If it's B, then swap array[mid] with array[high] and decrement high
Once mid crosses over with high, then our unknown section is gone and we can terminate.

Our solution looks like this:
----------------------------------------------------------------

def partition(arr):
    low, mid, high = 0, 0, len(arr) - 1
    while mid <= high:
        if arr[mid] == 'R':
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 'G':
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
----------------------------------------------------------------

*/

// 2nd Attempt - with solution
function partition(arr) {
	let low = 0,
		mid = 0,
		high = arr.length-1;

	while (mid <= high) {
		if (arr[mid] === 'R') {
			let temp = arr[low];
			arr[low] = arr[mid];
			arr[mid] = temp;

			low++, mid++;
		} else if ( arr[mid] === 'G') {
			mid++;
		} else {
			let temp = arr[high];
			arr[high] = arr[mid];
			arr[mid] = temp;

			high--
		}
	}
	return arr;
}

console.log(partition(['G', 'B', 'R', 'R', 'B', 'R', 'G']))