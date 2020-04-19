/**
This problem was asked by Facebook.

Given a stream of elements too large to store in memory, 
pick a random element from the stream with uniform probability.
 */

/**
 * Pick a random element from the stream with uniform probability
 * @param {Array} stream Array
 */
let selectRandomStream = (stream) => {
    let result = 0;
    count = 0;
    count++;

    if (count === 1) result = stream;
    else {
        let i = Math.random() * (count - 1);

        if (i === count - 1)
            result = stream;
    }

    return result;
}

module.exports = selectRandomStream;