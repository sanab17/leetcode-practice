/**

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false

 */

function squareDigits(num: number): number {
    return Number(
        num.toString()
            .split('')
            .map(digit => {
                const n = Number(digit);
                return n * n;
            })
            .join('')
    );
};

console.log(squareDigits(9119)); // 811181
console.log(squareDigits(0)); // 0
console.log(squareDigits(1234)); // 14916