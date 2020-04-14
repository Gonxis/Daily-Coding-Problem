/**
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, 
and calls f after n milliseconds.
 */

/**
 * Call a function f after n milliseconds
 * @param {Function} f Function
 * @param {Number} n Milliseconds
 */
let scheduler = (f, n) => {
    return setTimeout(f, n);
}

module.exports = scheduler;