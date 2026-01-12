/**

Problem 1: Array Frequency Counter (Easy)
Time: 15 minutes

Write a function that takes an array of integers and returns a dictionary/map where 
keys are the numbers and values are their frequencies.

Example:
Input: [1, 2, 2, 3, 3, 3, 4]
Output: {1: 1, 2: 2, 3: 3, 4: 1}
Follow-up: Return the number that appears most frequently.

 */

export const frequencyCounter = (numArray: number[]): Record<number, number> => {

    const freq: Record<number, number> = {};
    for (const num of numArray) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return freq;
};

export const mostFrequentNumber = (numArray: number[]) : number => {
    const freq = frequencyCounter(numArray);

    let maxCount = 0;
    let mostFrequent = numArray[0];

    for (const num in freq) {
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            mostFrequent = Number(num);
        }
    }

    return mostFrequent;
};

console.log('Freq counter: ', frequencyCounter([1, 2, 2, 3, 3, 3, 4]));
console.log('Most frequent number: ', mostFrequentNumber([1, 2, 2, 3, 3, 3, 3, 4]));
