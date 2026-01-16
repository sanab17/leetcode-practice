/**

Task: 
Write a function that takes a string and returns a new string 
that decorates the original string by surrounding it with asterisks (*) 
on all sides, forming a box around the text.

Example:
Input: "1234567890"

Output:
**************
* 1234567890 *
**************

Input: "Hello, World!"

Output:
*******************
* Hello, World! *
*******************
 */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const A: string = 'Hello, World!';

const centerLine = `* ${A} *`;
const border = '*'.repeat(centerLine.length);

console.log(border);
console.log(centerLine);
console.log(border);
