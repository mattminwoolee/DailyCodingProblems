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


