/*
This problem was asked by Quora.

Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the 
word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one 
(the first one alphabetically).

For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the 
smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, 
but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".

I: string
O: new string (shortest palindrome)

Case 1:

input = 
r ace r
	ace
  acea - eace
  
*/
// 1st attempt with solution - naive solution.. 
function isPalindrome(string) {
	if ( string === string.split('').reverse().join('') ) {
		return true;
	} 
}

function makePalindrome(str) {
	if ( isPalindrome(str) ) {
		return str;
	} 

	if ( str[0] === str[str.length-1] ) {
		return str[0] + makePalindrome( str.substring(1, str.length-1)) + str[ str.length-1 ];
	} else {
		let str1 = str[0] + makePalindrome( str.substring(1) ) + str[0]; // makePalindrome(1 index to the end )
		let str2 = str[str.length-1] + makePalindrome( str.substring(0, str.length-1) ) + str[str.length-1]; // makePalindrome( 0 index to 2nd last)

		if ( str1.length < str2.length ) {
			return str1;
		} else if (str1.length > str2.length ) {
			return str2;
		} else {
			// return the string that is lexographically smallest
			return (str1 < str2) ? str1 : str2;
		}
	}
}

console.log(makePalindrome('abcd'))

// outputs elgoogle
// runs O(2^n) time because it makes two recursive calls each time/call stack

/**************************
******** Solution *********
***************************

Notice that whenever we add a character, it should ideally match the one on the other side of the string. We can use 
\the following recurrence to solve this problem:

If s is already a palindrome, then just return s -- it's already the shortest palindrome we can make
If the first character of s (let's call it a) is the same as the last, then return a + make_palindrome(s[1:-1]) + a
If the first character of s is different from the last (let's call this b), then return the minimum between:
a + make_palindrome(s[1:]) + a
b + make_palindrome(s[:-1]) + b or the lexicographically earliest one if their lengths are equal.
So a naive recursive solution might look like this:
----------------------------------------------------------------

def is_palindrome(s):
    return s == s[::-1]

def make_palindrome(s):
    if is_palindrome(s):
        return s
    if s[0] == s[-1]:
        return s[0] + make_palindrome(s[1:-1]) + s[-1]
    else:
        one = s[0] + make_palindrome(s[1:]) + s[0]
        two = s[-1] + make_palindrome(s[:-1]) + s[-1]
        if len(one) < len(two):
            return one
        elif len(one) > len(two):
            return two
        else:
            return min(one, two)
----------------------------------------------------------------
Recall that the min of two strings in python will return the lexicographically earliest one!

However, this algorithm runs in O(2^N) time, since we could potentially make two recursive calls each time. We can speed up using dynamic programming, as usual. We can either memoize our results so that we don't duplicate any work, or use a table and do bottom-up programming.

Let's start with memoization. We can keep a cache and store all our results when we compute them in the cache. If we come across a string we've seen before, then we just need to look it up in the cache.
*/
