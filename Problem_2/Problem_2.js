/**
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the
new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

/**
 * Multiply all numbers in the array except the one you are managing and then return a new array with the results.
 * @param {Array} arr A numeric array
 * @return {Array} A new numeric array with results
 */

let productOfAllNumbsInArray = (arr) => {
    let result = [];
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j != i)
                count *= arr[j];
        }
        result.push(count);
        count = 1;
    }

    return result;
};

module.exports = productOfAllNumbsInArray;