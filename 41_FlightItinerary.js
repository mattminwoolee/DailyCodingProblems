/*

This problem was asked by Facebook.

Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, 
compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, 
return the lexicographically smallest one. All flights must be used in the itinerary.

For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 
'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the 
list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is 
lexicographically smaller.


I: [ [ origin, destination ], ... ]
O: [ location, ... ]
C: 
E: return lexographically smaller location path
	- It may be assumed that the input list of tickets is not cyclic and there is one ticket from every city except final destination.
ex)

Input: [ ['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A'] ] -> [ 'A', 'B', 'C', 'A', 'C']

*/

function printItinerary( flights ) {
	
	// create a dictionary of flights for constant look up time
	let dict = {};
	for (let flight of flights) {
		dict[flight[0]] = flight[1];
	}

}

