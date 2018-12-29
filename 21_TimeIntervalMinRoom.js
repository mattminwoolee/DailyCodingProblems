/*
Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), 
find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.


I: Array
O: number

	0 50
	 30   75
	 	 60	 150

	[ 150, 75 ]

	iterate over each time interval, if the start is greater than any of the rooms end time, replace the end time
	otherwise, create a new room

	at the end return the length of the array
*/

function findMinRoom (array) {
  let intervals = array.sort( (a,b) => a[0] - b[0] );

  var rooms = [ ]; // initalize first room
  console.log('rooms: ', rooms);
  for ( let interval of intervals ) {
  	if (rooms.length < 1) {
	  rooms.push(interval[1]);
  	} else {
	  	for ( let [index, roomEndTime] of rooms.entries() ) {
	  	  if ( interval[0] >= roomEndTime ) {
	  	  	rooms[index] = interval[1];
	  	  	break;
	  	  } else {
	  	  	rooms.push(interval[1]);
	  	  	break;
	  	  }
	  	}
  	}
  }
  console.log(rooms)
  return rooms.length
}

let input = [ [30, 75], [0, 50], [60, 150] ];
let output = findMinRoom(input);
console.log(output);
/*
	Time: O(n^2) since we're checking each interval pairwise..
*/


/**************************
******** Solution *********
***************************


First, notice that the minimum number of classroom halls is the maximum number of overlapping intervals.

One solution is to extract the start times and end times of all the intervals and sort them. 
Then we can start two pointers on each list, and consider the following:

If the current start is before the current end, then we have a new overlap. Increment the start pointer.
If the current start is after the current end, then our overlap closes. Increment the end pointer.
All that's left to do is keep a couple variables to keep track of the maximum number of overlaps we've seen so far and the current number of overlaps.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

----------------------------------------------------------------
def max_overlapping(intervals):
    starts = sorted(start for start, end in intervals)
    ends = sorted(end for start, end in intervals)

    current_max = 0
    current_overlap = 0
    i, j = 0, 0
    while i < len(intervals) and j < len(intervals):
        if starts[i] < ends[j]:
            current_overlap += 1
            current_max = max(current_max, current_overlap)
            i += 1
        else:
            current_overlap -= 1
            j += 1
    return current_max

----------------------------------------------------------------
This runs in O(n log n) time, since we have to sort the intervals.

/



