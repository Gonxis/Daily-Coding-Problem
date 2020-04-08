/**
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

 */

/**
 *  Look for the first missing positive number
 * @param {Array} arr 
 * @return {Array}
 */

let firstPositiveNumberMissing = (arr) => {
    let result = -1;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i + 1] - arr[i]) >= 2 && i != arr.length - 1)
            result = arr[i] + 1;
    }
    if (result <= 0)
        result = arr[arr.length - 1] + 1;
    if (arr[arr.length - 1] + 1 <= 0)
        result = 1;
    return result;
};

module.exports = firstPositiveNumberMissing;