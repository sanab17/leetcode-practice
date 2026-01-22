/*

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"

*/

function getMiddle(s: string): string {
    const length = s.length;
    const middle = Math.floor(length / 2);

    const middleChars = length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s.charAt(middle)
    return middleChars;
};

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
