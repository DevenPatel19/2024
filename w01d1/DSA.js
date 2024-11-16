/* 
  String: Reverse

  Given a string, return a new string that is
  the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    // PSEUDO CODE Create a place to put the reversed string and name it Reversed
    let reversed = "";

    /* 	For loop ## PSEUDO CODE
	Start:: at the last index(letter);
	Stop:: when index is >= 0 is no longer accurate;
	Afterthought:: decriment a single count;*/
    for (let char = str.length - 1; char >= 0; char--) {
        // PSEUDO CODE add charater of string at current iteration through loop to end of reversed string
        reversed += str[char];
    }
    return reversed;
}

/** IN PLACE METHOD!!!!!!  L33TCODE - Reverse string
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};

// Unit Tests::::
const result1 = reverseString(str1);
console.log(result1 + "is the reverse of " + str1);

const result2 = reverseString(str2);
console.log(result2 + "is the reverse of " + str2);

const result3 = reverseString(str3);
console.log(result3 + "is the reverse of " + str3);

const result4 = reverseString(str4);
console.log(result4 + "is the reverse of " + str4);
