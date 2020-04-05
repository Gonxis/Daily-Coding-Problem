/**
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

/**
 * Go through the array and sum all numbers from the list. 
 * If the sum of any two is equal to "k", then return true.
 * @param {Array} arr 
 * @param {Number} k
 * @return {Boolean} 
 */

let isThatTrue = (arr, k) => {
    result = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            result = (arr[j] + arr[i] === k && i != j);
            if (result) return result;
        }
    }
    return result;
}

module.exports = isThatTrue;