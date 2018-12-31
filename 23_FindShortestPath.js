/*
You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

I: matrix, start coordinates, end coordiates
O: number (min num of steps)

*/

function findShortestPath(matrix, start, end) {
	let queue = [ { coord: start, count: 0 } ];
	let seen = new Set();

	while (queue.length > 0) {
		let { coord, count } = queue.shift();
		
		if (`${coord}` === `${end}`) {
			return count;
		}

		seen.add(coord)

		// find walkable neighbors and push up into the queue
		let walkableNeighbors = getWalkableNeighbors(matrix, coord[0], coord[1])
		for (let neighbor of walkableNeighbors) {
			if ( seen.has(neighbor) ) continue;
			queue.push({ coord: neighbor, count: count + 1});
		}
	}
	return null
}

function getWalkableNeighbors(matrix, row, col) {
	let neighbors = [];

	if ( isWalkable(matrix, row+1, col) ) neighbors.push([row+1, col])
	if ( isWalkable(matrix, row-1, col) ) neighbors.push([row-1, col])		
	if ( isWalkable(matrix, row, col+1) ) neighbors.push([row, col+1])
	if ( isWalkable(matrix, row, col-1) ) neighbors.push([row, col-1])

	return neighbors;		
}

function isWalkable(matrix, row, col) {
	if (!matrix[row]) return false;
	if (row < 0 || row > matrix.length-1 ) return false;
	if (col < 0 || col > matrix.length-1 ) return false;

	return !matrix[row][col];
}

let matrix = [
	[false, false, false, false],
	[false, true, true, false],
	[false, false, true, false],
	[false, false, false, false]]
let start = [3, 0], end = [ 0, 0];
let output = findShortestPath(matrix, start, end); 
console.log(output);

/**************************
******** Solution *********
***************************

The idea here is to use either BFS or DFS to explore the board, starting from the start coordinate, and keep track of what we've seen so far as well as the steps from the start until we find the end coordinate.

In our case, we'll use BFS. We'll create a queue and initialize it with our start coordinate, along with a count of 0. We'll also initialize a seen set to ensure we only add coordinates we haven't seen before.

Then, as long as there's something still in the queue, we'll dequeue from the queue and first check if it's our target coordinate -- if it is, then we can just immediately return the count. Otherwise, we'll get the valid neighbours of the coordinate we're working with (valid means not off the board and not a wall), and enqueue them to the end of the queue.

To make sure the code doesn't get too messy, we'll define some helper functions: walkable, which returns whether or not a tile is valid, and get_walkable_neighbours which returns the valid neighbours of a coordinate.
*/
