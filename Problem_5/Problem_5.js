/**
This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element 
of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

Implement car and cdr.
 */

/**
 * Implementation of cons in problem description
 * @param {Number} a 
 * @param {Number} b 
 * @return {Function} Function that takes a function f as an argument
 */
function cons(a, b) {
    if (!Number(a) || !Number(b)) throw new Error("Value not a number");
    /**
     * 
     * @param {Function} f 
     * @return {Function} Function with a and b as arguments of the function that returns
     */
    function pair(f) {
        return f(a, b);
    }
    return pair;
}

/**
 * 
 * @param {Function} cons
 * @return {Number} The first element of cons
 */
function car(cons) {
    return cons((a, b) => a);
};

/**
 * 
 * @param {Function} cons
 * @return {Number} The last element of cons
 */
function cdr(cons) {
    return cons((a, b) => b);
}

module.exports = { cons, car, cdr };