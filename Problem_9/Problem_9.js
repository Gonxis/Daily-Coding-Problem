/**
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. 
[5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
 */

/**
 * Find the max between the last inclue and the last exclude + the actual element number
 * @param {Number} lastInclude Number
 * @param {Number} lastExclude Number
 * @param {Number} element Number
 * @return {Number} Number
 */
let newInclude = (lastInclude, lastExclude, element) => {
    return Math.max(lastInclude, element + lastExclude)
}

/**
 * Find the max between the last include and the last exclude number
 * @param {Number} lastInclude Number
 * @param {Number} lastExclude Number
 * @return {Number} Number
 */
let newExclude = (lastInclude, lastExclude) => {
    return Math.max(lastExclude, lastInclude)
}

/**
 * Find the largest adjacent sum of non-adjacent numbers in an array passed by parameter
 * @param {Array} arr Array
 * @return {Function} Function
 */
let largestAdjacentSum = arr => {

    /**
     * 
     * @param {Number} i Number
     * @param {Number} include Number
     * @param {Number} exclude Number
     * @return {Function} Function
     */
    let loop = (i, include, exclude) => {
        if (i === arr.length) return Math.max(include, exclude);
        let nInclude = newInclude(include, exclude, arr[i]);
        let nExclude = newExclude(include, exclude);

        return loop(i + 1, nInclude, nExclude);
    }

    return loop(1, arr[0], 0);
}

module.exports = { largestAdjacentSum, newInclude, newExclude };