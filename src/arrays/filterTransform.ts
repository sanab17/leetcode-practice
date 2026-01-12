/**

Problem 2: Filter and Transform (Easy-Medium)
Time: 15 minutes

Given an array of strings, return a new array containing only strings that:

Have length greater than 3
Start with a vowel (a, e, i, o, u - case insensitive)
Convert each qualifying string to uppercase

Example:
Input: ["apple", "bat", "egg", "ox", "umbrella", "cat"]
Output: ["APPLE", "UMBRELLA"]

 */

export const filterAndTransform = (strArray: string[]) : string[] => {
    // const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const result : string[] = [];

    // Option 1: Using a for loop
    for (const str of strArray) {
        if (str.length > 3 && vowels.includes(str[0].toLowerCase())) {
            result.push(str.toUpperCase());
        }
    }

    return result;

    /*
    Option 2: Using filter and map
    return strArray
        .filter(str => str.length > 3 && vowels.has(str[0].toLowerCase()))
        .map(str => str.toUpperCase());

    Option 3: Using reduce
    return strArray.reduce((acc: string[], str: string) => {
        if (str.length > 3 && vowels.has(str[0].toLowerCase())) {
            acc.push(str.toUpperCase());
        }
        return acc;
    }, []);
    */
};

console.log('Filter and Transform: ', filterAndTransform(["apple", "bat", "egg", "ox", "umbrella", "cat"]));
