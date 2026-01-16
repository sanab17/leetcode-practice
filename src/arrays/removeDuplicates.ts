/*

Problem 5: Remove Duplicates (Easy)
Time: 15 minutes

Write a function that takes a sorted array and removes duplicates 
in-place, returning the length of the modified array. The first part 
of the array should contain the unique elements.

Example:
Input: [1, 1, 2, 2, 3, 4, 4, 5]
Output: 5

Array becomes: [1, 2, 3, 4, 5, ...]

*/

export function removeDuplicates(nums: number[]) : number {

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            result.push(nums[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }

    return result.length;
};

console.log("Remove Duplicates from Sorted Array", removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));