"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostFrequentNumber = exports.frequencyCounter = void 0;
var frequencyCounter = function (numArray) {
    var freq = {};
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var num = numArray_1[_i];
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
};
exports.frequencyCounter = frequencyCounter;
var mostFrequentNumber = function (numArray) {
    var freq = (0, exports.frequencyCounter)(numArray);
    var maxCount = 0;
    var mostFrequent = numArray[0];
    for (var num in freq) {
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            mostFrequent = Number(num);
        }
    }
    return mostFrequent;
};
exports.mostFrequentNumber = mostFrequentNumber;
console.log('Freq counter: ' + (0, exports.frequencyCounter)([1, 2, 2, 3, 3, 3, 4]));
console.log('Most frequent number: ' + (0, exports.mostFrequentNumber)([1, 2, 2, 3, 3, 3, 4]));
