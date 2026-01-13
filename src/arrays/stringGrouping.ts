/**

Problem 4: String Grouping (Medium)
Time: 20 minutes

Given an array of strings, group anagrams together. 
Anagrams are words that contain the same characters in different orders.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

Note: Order of groups and words within groups doesn't matter.

 */

export function groupAnagrams(stringAnagrams: string[]): string[][]{
    const anagramMap = new Map<string, string[]>();

    for (const str of stringAnagrams) {
        const sortedStr = str.split('').sort().join('');
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr)!.push(str);
    }

    return Array.from(anagramMap.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
