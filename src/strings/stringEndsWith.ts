/**
 * 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
 
 */

function stringEndsWith(str: string, ending: string): boolean {
    if (ending === "")
        return false;
    return str.endsWith(ending); // method 1
    // return str.slice(-ending.length) === ending; // another alternative
    // return str.substring(str.length - ending.length) === ending; // another alternative
}

console.log(stringEndsWith("abc", "bc")); // true
console.log(stringEndsWith("abc", "d")); // false
console.log(stringEndsWith("abc", "")); // false