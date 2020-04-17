/**
This problem was asked by Amazon.

Given an integer k and a string s, 
find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, 
the longest substring with k distinct characters is "bcb".
*/

/**
 * Helper to find how many items map have
 * @param {Object} map Object
 * @return {Number} Number
 */
let countMapSize = (map) => {
    let count = 0;
    for (_ in map) {
        count++;
    }
    return count;
}

/**
 * Function that find the length of the longest substring that contains at most k distinct characters
 * @param {Number} k Number
 * @param {String} s String
 * @return {Number} Number
 */
let lengthOfLongestSubstring = (k, s) => {
    let i = 0;
    let result = 0;

    let map = {};

    for (let j = 0; j < s.length; j++) {
        let char = s.charAt(j);

        if (map[char]) map[char] = map[char] + 1;
        else map[char] = 1;

        if (countMapSize(map) <= k) result = Math.max(result, j - i + 1);
        else {
            while (countMapSize(map) > k) {
                let l = s.charAt(i);
                let count = map[l];
                if (count === 1) delete map[l];
                else map[l] = map[l] - 1;
                i++;
            }
        }
    }
    return result;
}

module.exports = { countMapSize, lengthOfLongestSubstring };