/**

Problem 3: Two Sum (Medium)
Time: 20 minutes

Given an array of integers and a target sum, return the indices of two numbers that add up 
to the target. You may assume exactly one solution exists, and you cannot use the same element twice.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

Explanation: nums[0] + nums[1] = 2 + 7 = 9

Hint: Use a hash map for O(n) solution.

 */

export function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i);
    }

    throw new Error('No two sum solution found.');
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]