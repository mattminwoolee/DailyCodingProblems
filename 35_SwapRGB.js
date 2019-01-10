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

console.log(rgbSwap(['G', 'B', 'R', 'R', 'B', 'R', 'G']))