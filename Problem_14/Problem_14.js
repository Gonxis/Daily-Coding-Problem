/**
This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo Method.

Hint: The basic equation of a circle is x2 + y2 = r2.
 */

/**
 * Estimate π to 3 decimal places with Monte Carlo Method.
 * @return {Number} Number
 */
let estimatePiWithMonteCarloMethod = () => {
    const size = 500;
    const iterations = 10000000;

    let inside = 0;
    for (let i = 0; i < iterations; i++) {
        var Xpos = Math.floor(Math.random() * (size));
        var Ypos = Math.floor(Math.random() * (size));

        var dist = Math.hypot(Xpos, Ypos);

        if (dist <= size) {
            inside++;
        }
    }

    return Number(4 * inside / iterations).toFixed(3);
};

module.exports = estimatePiWithMonteCarloMethod;